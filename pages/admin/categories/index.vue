<template>
  <div>

    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              Categories
            </h1>
          </div>

          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a @click="dashboard()">Dashboard</a>
              </li>
              <li class="breadcrumb-item active">
                Categories
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
                  <button @click="addNewCategory()" class="btn btn-primary">Add New Category</button>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="category_table" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in categories" :key="index">
                      <td>{{item.id}}</td>
                      <td>{{item.category_name}}</td>
                      <td>
                         <NuxtLink class="btn btn-warning  btn-sm" :to="'/admin/categories/edit/'+item.id">Edit</NuxtLink>
                       </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Category Name</th>
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
    computed: {
      ...mapState({
            categories: state => state.admin.categories.categories
      }),
    },
    methods: {
      addNewCategory(){
       this.$router.push('/admin/categories/add')
      }
    },
    mounted() {
      $(document).ready( function () {
          $('#category_table').DataTable();
      });
    }
  }
</script>

<style></style>
