<template>
  <div class="container-fluid p-3">

    <div class="row">

      <div class="col-md-3">

        <h1 class="my-4">Davao Ecommerce</h1>
        <div class="list-group">
          <a href="#" class="list-group-item">Category 1</a>
          <a href="#" class="list-group-item">Category 2</a>
          <a href="#" class="list-group-item">Category 3</a>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">

          <div v-for="(item, index) in products" :key="index" class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" :src="item.image_link" alt="" style="width:400px; height:300px;"></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{item.product_name}}</a>
                </h4>
                <br>
                <h5>₱ {{item.price}} / {{item.unit}}</h5>
                <h6> <a href="#">{{item.category.category_name}}</a></h6>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
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
            products: state => state.admin.products.products
      }),

    },
    methods: {
       ...mapActions({
        getProducts: "admin/products/retrieveProducts",
     }),
      addNewProduct(){
        this.$router.push('/admin/products/add')

      },


      dashboard(){
        this.$router.push('/admin')
      }
    },
    created() {
      this.getProducts()
    },
  }
</script>
