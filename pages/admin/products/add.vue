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
            </ol>
          </div>

        </div>

      </div>

    </div>

    <section class="content">
      <div class="container-fluid">

        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  Add New Product
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">

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
