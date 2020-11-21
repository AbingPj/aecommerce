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
               <li class="breadcrumb-item active">
                Add
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
                  Add New Category
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
               <div class="form-group mb-3">
                  <label for="">Category Name</label>
                  <input v-model="name" type="text" class="form-control" placeholder="Clothes">
               </div>
               <div class="form-group mb-3">
                  <button @click="addNewCategory()" type="button" class="btn btn-primary w-25">Save</button>
                  <button type="button" class="btn btn-danger w-25">Cancel</button>
               </div>
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
    data() {
      return {
        name:""
      }
    },
    methods: {
      ...mapActions({
        addCategory: "categories/addCategory",
      }),
        addNewCategory() {
          console.log(this.name)
          let data = {
            name: this.name
          }
          console.log(data)


        this.addCategory(data)
            .then((res) => {
               toastr.success('Added!')
               this.$router.push('/admin/categories')
            })
            .catch((err) => {
               toastr.error('Fail to Save')
            });
      },
    }
  }
</script>

<style></style>
