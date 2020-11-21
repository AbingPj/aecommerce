<template>
  <div>

    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              Products
            </h1>
          </div>

          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a @click="dashboard()">Dashboard</a>
              </li>
              <li class="breadcrumb-item active">
                Products
              </li>
               <li class="breadcrumb-item active">
                Edit
              </li>
            </ol>
          </div>

        </div>

      </div>

    </div>

    <section class="content">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-10">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  Edit Product: {{ProductName}}
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                    <form>
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-lg-3">
                      <label for="">Avatar</label>
                      <br>
                      <img src="" alt="" width="200" height="150">
                      <br>
                      <!-- <input type="text" class="form-control" placeholder="ex. Air Jordan"> -->
                      <button type="button" class="btn btn-primary mt-2" style="width:200px;">Update Image</button>
                    </div>
                    <div class="col-lg-8">
                      <label for="">More Images</label>
                      <br>
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                      <img src="" alt="" width="100" height="80" class="mb-1">
                       <br>
                      <button type="button" class="btn btn-primary w-50 mt-2">Add More Image</button>
                    </div>
                  </div>

               </div>
                <div class="form-group mb-3">
                  <label for="">Product Name</label>
                  <input type="text" class="form-control" placeholder="ex. Air Jordan">
               </div>
               <div class="form-group mb-3">
                  <label for="">Description</label>
                  <textarea class="form-control" placeholder=""></textarea>
               </div>
               <div class="form-group mb-3">
                  <label for="">Price</label>
                  <input type="text" class="form-control" placeholder="ex. 1999.99">
               </div>
                <div class="form-group mb-3">
                  <label for="">Unit</label>
                  <input type="text" class="form-control" placeholder="ex. pair">
               </div>
                <div class="form-group mb-3">
                  <label for="">Category</label>
                  <select name="" id="" class="form-control">
                    <option value="null" disabled>ex. Shoes</option>
                  </select>
               </div>
               <div class="form-group mb-3">
                  <button type="button" class="btn btn-warning w-25">Update</button>
                  <button type="button" class="btn btn-light w-25">Cancel</button>
               </div>
               </form>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>

        </div>

      </div>
    </section>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
  export default {
    layout: 'adminLte',
    data() {
      return {
        ProductName:""
      }
    },
    components: {},
    computed: {
      ...mapGetters({
        products: 'products/getProducts'
      }),
    },
    methods: {
      ...mapActions({
        getProducts: "products/retrieveProducts",
      }),
      dashboard(){
        this.$router.push('/admin')
      }
    },
    created() {
      this.getProducts();
    },
    mounted() {
      // this.getProducts();
      $('#example1').DataTable();
    }
  }
</script>

<style></style>
