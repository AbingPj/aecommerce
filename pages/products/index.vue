<template>
  <div class="container-fluid p-3">

    <div class="row">
      <div class="col-12 mb-3">
        <div class="container">
          <div class="row">
            <div class="col-12">
                <div class="d-flex flex-wrap">
                  <div class="m-1 p-2">
                  Categories:
                </div>
                  <button @click="searchCategory(item)" v-for="(item, index) in categories" :key="index" class="btn btn-light btn-sm m-1">
                    {{item.category_name}}
                </button>
                </div>
              </div>
            <div class="col-12">
              <div class="d-flex">
                <div class="w-75 p-2">
              <div class="input-group">
                <input v-model="search" type="text" class="form-control" placeholder="Search this blog">
                <div class="input-group-append">
                  <button @click="searching()" class="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
                </div>
                <div class="w-25 p-2">
                  <div>
                     <select  class="form-control">
                  <option disable>Sort By: All</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                   </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex flex-wrap">
                <button
                v-if="searchName!=''"
                type="button"
                class="btn btn-secondary btn-sm filter-btn mr-2"
              >
                "{{searchName}}"
                <i class="fas fa-times-circle"></i>
              </button>
                <button
                type="button"
                class="btn btn-secondary btn-sm filter-btn mr-2"
                v-for="(item, index) in searchCategories" :key="index"
              >
                "{{item.category_name}}"
                <i class="fas fa-times-circle"></i>
              </button>
              </div>

            </div>


          </div>
        </div>

      </div>

      <div class="col-12">
        <div class="d-flex flex-wrap">
          <div v-for="(item, index) in products" :key="index" class="card shadow-lg border border-info m-1"
            style="width:320px;">
            <div class="text-center p-1 shadow rounded">
              <img :src="item.image_link" alt="" class="card-img-top rounded"
                style="object-fit:cover; width: 300px; height: 200px;">
            </div>
            <div class="card-body">
              <h4 class="card-title"><a href="#">{{item.product_name}}</a></h4> <br>
              <h5>₱ {{addCommaAndTwoDecimalPlaces(item.price)}} / {{item.unit}}</h5>
              <h6><a href="#">{{item.category.category_name}}</a></h6>
              <p class="card-text">{{item.description}}
              </p>
            </div>
            <div class="card-footer ">
              <div class="d-flex">
                <div class="w-50"> <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div>
                <div class="w-50 text-right">
                    <NuxtLink class="btn btn-info" :to="'/products/'+item.id"> Add to cart</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>



<script>
  import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
  export default {
    layout: 'customer',
    components: {},
    computed: {
      ...mapState({
        products: state => state.products.products,
        categories: state => state.products.categories
      }),

    },
    data() {
      return {
        search:"",
        searchName:"",
        searchCategories:[]
      }
    },
    methods: {
      ...mapActions({
        getProducts: "products/retrieveProducts",
        getCategories: "products/retrieveCategories",
      }),
      addCommaAndTwoDecimalPlaces(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
      dashboard() {
        this.$router.push('/admin')
      },
      searching(){
        this.searchName = this.search;
      },
      searchCategory(data){
        this.searchCategories.push(data);
      }
    },
    created() {
      this.getProducts();
      this.getCategories();


      //  formData.append(
      //     "selected_products",
      //     JSON.stringify(this.selectedProducts)
      //   );
    },
  }
</script>


<style lang="css" scoped>
.filter-btn {
  padding: 0px 5px;
  font-size: 13px;
  border-radius: 1rem;
}

</style>
