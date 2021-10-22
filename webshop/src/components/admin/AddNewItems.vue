<template>
  <div class="container-fluid" id="addnewitemsbody">
    <div class="row d-flex justify-content-center" id="bodyrow">
      <div class="col col-lg-6 p-5">
        <div class="card bg-dark mt-5">
          <div class="card-body">
            <form>
              <div class="form-group row mb-4 mt-4">
                <label for="inputEmail3" class="col-sm-2 col-form-label text-white">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputName3" placeholder="Name" v-model="name">
                </div>
              </div>
              <div class="form-group row mb-4">
                <label for="inputPassword3" class="col-sm-2 col-form-label text-white">Price</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="inputPrice3" placeholder="Price" v-model="price">
                </div>
              </div>
              <div class="form-group row mb-4">

              </div>
              <div class="form-group row mb-4">
                <div class="col-sm-2 text-white">Size</div>
                <div class="col-sm-10">
                  <div v-for="size in sizeArray" :key="size">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="gridCheck1" :value="size" v-model="selectedSizes">
                      <label class="form-check-label text-white" for="gridCheck4">
                        {{ size }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-4">
                <div class="col-sm-2 text-white">Gender</div>
                <div class="col-sm-10">
                  <div v-for="gender in genderArray" :key="gender">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" id="gridCheck1" :value="gender" v-model="selectedGender">
                      <label class="form-check-label text-white" for="gridCheck4">
                        {{ gender }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-4">
                <div class="col-sm-2 text-white">Brands</div>
                <div class="col-sm-10">
                  <div v-for="brand in brandArray" :key="brand">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" id="gridCheck1" :value="brand" v-model="selectedBrand">
                      <label class="form-check-label text-white" for="gridCheck4">
                        {{ brand }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-4">
                <div class="col-sm-10">
                  <label for="exampleFormControlFile1" class="text-white me-5">Image</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="uploadFile($event)">
                </div>
              </div>
              <div class="form-group row mb-4">
                <div class="col-sm-10">
                  <button type="button" class="btn btn-outline-light p-2 mt-5" @click="saveShoeItem" v-bind:disabled="isFileSaving">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db, storage} from "@/firebase"
export default {
  components: {},
  data: () => ({
    name: null,
    price: null,
    sizeArray: [36, 38, 40, 42, 44],
    genderArray: ["Male", "Female"],
    brandArray: ["Nike", "Adidas", "Off-White"],
    selectedSizes: [],
    selectedGender: null,
    selectedBrand: null,
    uploadedFileUrl: null,
    isFileSaving: false,
  }),
  methods: {
    saveShoeItem() {
      db.collection('shoes').add({
        name: this.name,
        price: this.price,
        url: this.uploadedFileUrl,
        size: this.selectedSizes,
        gender: this.selectedGender,
        brand: this.selectedBrand,
      }).then(() => this.resetValues())
    },
    resetValues(){
        this.name = null
        this.price = null
        this.selectedSizes = []
        this.uploadedFileUrl = null
        this.isFileSaving = false
        this.selectedGender = null
        this.selectedBrand = null
    },
    uploadFile(event){
      this.isFileSaving = true;
      const file = event.target.files[0]
      if(file){
        const rnd = (Math.random() + 1).toString(36).substring(4); // generate random string for better file naming
        const storageRef = storage.child('shoesItem/'+ rnd + file.name);
        storageRef.put(file).then((snapshot) => {
          snapshot.ref.getDownloadURL().then(url => {
            this.uploadedFileUrl = url;
            this.isFileSaving = false;
          })
        });
    }
    }
  },
  beforeMount() {
  },
  beforeDestroy() {
  }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

#addnewitemsbody {
    font-family: 'Raleway', sans-serif;
}

#bodyrow {
    background-color: black;
}


</style>