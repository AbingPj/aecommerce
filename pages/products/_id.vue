<template>
  <div class="container p-3">

    <div class="row">
      <div class="col-12 mb-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="image border border-secondary text-center mb-3">
                <img :src="product.image_link" alt="" style="width:100%; height:300px; object-fit:cover;">
              </div>
              <div class="image-2">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
                <img class="border border-secondary text-center m-1" :src="product.image_link" alt="" style="width:50px; height:50px;">
              </div>
            </div>
            <div class="col-md-6">
               <div class="title">
                 <h2>{{product.product_name}}</h2>
                 <h4>₱ {{product.price}} / {{product.unit}}</h4>
                 <h6><a href="#">{{product.category.category_name}}</a></h6>
                 <div> <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div>
                 <p class="card-text" style="height:100px; overflow: hidden; text-overflow: ellipsis;">{{product.description}}
                </p>
                </div>

                 <div class="d-flex justify-content-between mt-3">
                <div class="">
                        <div class="input-group mb-3" style="width:130px;">
                      <div class="input-group-prepend">
                        <button @click="sub()" class="btn btn-outline-secondary" type="button"><i class="fas fa-minus"></i></button>
                      </div>
                      <input v-model="quantity" type="text" class="form-control" readonly>
                      <div class="input-group-append">
                        <button @click="add()" class="btn btn-outline-secondary" type="button"><i class="fas fa-plus"></i></button>
                      </div>
                      </div>
                </div>
                <div class="text-right ml-1">
                    <button @click="addToCart()" type="button" class="btn btn-info" :to="''"> Add to cart</button>
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
        product: state => state.products.productsDetail,
      }),

    },
    data() {
      return {
        quantity: 1
      }
    },
    methods: {
      ...mapActions({
        getProductDetails: "products/getProductDetails",
        vxAddToCart: "cart/addToCart",
      }),
      add(){
        this.quantity = this.quantity  + 1;
      },
      sub(){
        if(this.quantity > 1){
           this.quantity = this.quantity  - 1;
        }
      },
      addToCart(){
        let body = {
          quantity: this.quantity,
          product_id: this.product.id
        }
        this.vxAddToCart(body)
        .then(res => {
          console.log(res)
          this.$router.push('/cart')
        })
        .catch(err => {
          console.error(err);
        })
      }
    },
    created() {
      this.getProductDetails(this.$route.params.id);
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
