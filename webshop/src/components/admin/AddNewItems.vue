<template>
    <div class="container-fluid">
        <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        <div class="row d-flex justify-content-center" id="bodyrow">
            <div class="col col-lg-6 p-5">
                <div class="card bg-dark mt-5">
                <div class="card-body">
                    <form>
                        <div class="form-group row mb-4 mt-4">
                            <label for="inputEmail3" class="col-sm-2 col-form-label text-white">Name</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputName3" placeholder="Name">
                            </div>
                        </div>
                        <div class="form-group row mb-4">
                            <label for="inputPassword3" class="col-sm-2 col-form-label text-white">Price</label>
                            <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputPrice3" placeholder="Price">
                            </div>
                        </div>
                        <div class="form-group row mb-4">
                            <div class="col-sm-2 text-white">Size</div>
                            <div class="col-sm-10">
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="gridCheck1">
                                <label class="form-check-label text-white" for="gridCheck1">
                                36
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="gridCheck1">
                                <label class="form-check-label text-white" for="gridCheck2">
                                38
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="gridCheck1">
                                <label class="form-check-label text-white" for="gridCheck3">
                                40
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="gridCheck1">
                                <label class="form-check-label text-white" for="gridCheck4">
                                42
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1">
                                <label class="form-check-label text-white" for="gridCheck5">
                                44
                                </label>
                            </div>
                            </div>
                        </div>
                        <div class="form-group row mb-4">
                            <div class="col-sm-10">
                                <label for="exampleFormControlFile1" class="text-white me-5">Image</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>
                        <div class="form-group row mb-4">
                            <div class="col-sm-10">
                            <button class="btn btn-outline-light p-2 mt-5 me-4" type="submit">Submit</button>
                            <button type="button" class="btn btn-outline-light p-2 mt-5" data-toggle="modal" data-target="#exampleModal">Preview</button>
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
export default {
    
}
</script>

<style lang="scss" scoped>
#bodyrow {
    background-color: black;
}


</style>