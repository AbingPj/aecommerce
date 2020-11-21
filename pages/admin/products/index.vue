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
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <button @click="addNewProduct()" class="btn btn-primary">Add New Product</button>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="products" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Avatar</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Unit</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in products" :key="index">
                      <td>{{item.id}}</td>
                      <td> <img :src="item.image_link" alt="" style="width:50px; height:50px; object-fit: cover;"></td>
                      <td>{{item.product_name}}</td>
                      <td>{{item.price}}</td>
                      <td>{{item.unit}}</td>
                      <td>{{item.category.category_name}}</td>
                      <td>{{item.product_status}}</td>
                      <td>
                         <NuxtLink class="btn btn-warning  btn-sm" :to="'/admin/products/edit/'+item.id">Edit</NuxtLink>
                        </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Avatar</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Unit</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                </table>
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
      ...mapState({
            products: state => state.products.products
      }),
      // ...mapGetters({
      //   products: 'products/getProducts'
      // }),
    },
    methods: {
      addNewProduct(){
        this.$router.push('/admin/products/add')
      },
      dashboard(){
        this.$router.push('/admin')
      }
    },
    mounted() {
      $(document).ready( function () {
          $('#products').DataTable();
      });
    }
  }
</script>

<style></style>
