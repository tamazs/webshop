<template>
    <div class="container" id="filters">
	<div class="row">
        <a id="filterbtn" class="btn btn-outline-light mb-4" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Filters
  </a>
            <div class="panel panel-default collapse" id="collapseExample">
                <div class="panel-body">
                    <form class="form-inline" role="form">
                        <div class="form-group mb-3">
                            <label class="filter-col mb-1" style="margin-right:0;" for="pref-perpage">Brands:</label>
                            <select id="pref-perpage" class="form-control">
                                <option value="All">All</option>
                                <option value="Nike">Nike</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Off-White">Off-White</option>
                            </select>                                
                        </div> <!-- form group [rows] -->
                        <div class="form-group mb-3">
                            <label class="filter-col mb-1" style="margin-right:0;" for="pref-perpage">Size:</label>
                            <select id="pref-perpage" class="form-control">
                                <option value="36">36</option>
                                <option value="38">38</option>
                                <option value="40">40</option>
                                <option value="42">42</option>
                                <option value="44">44</option>
                            </select>                                
                        </div> <!-- form group [rows] -->
                        <div class="form-group">    
                            <div class="checkbox mb-1" style="margin-left:10px; margin-right:10px;">
                                <label><input type="checkbox">Man</label>
                            </div>
                            <div class="checkbox mb-3" style="margin-left:10px; margin-right:10px;">
                                <label><input type="checkbox">Woman</label>
                            </div>
                            <button type="submit" class="btn btn-light filter-col mb-5">
                                <span class="glyphicon glyphicon-record"></span> Save Settings
                            </button>  
                        </div>
                    </form>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

#filters {
    background-color: black;
    color: white;
    font-family: 'Raleway', sans-serif;
}

.container{
    margin-top:30px;
}

.filter-col{
    padding-left:10px;
    padding-right:10px;
}

.form-control {
    width: 7rem;
}

#filterbtn {
    width: 5rem;
}
</style>