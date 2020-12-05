<template>
	<div class="container">
    <!-- <div class="row mt-3 mb-3">
      <div class="col-12">
        <h2>
       <i class="fas fa-folder-open"></i> Orders
        </h2>
      </div>
    </div> -->
		  <div class="row mt-4 mb-4">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h2>
       <i class="fas fa-folder-open"></i> My Orders
        </h2>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="orders" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Order Id</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <!-- <tbody>
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
                  </tbody> -->
                  <tfoot>
                    <tr>
                      <th>Order Id</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
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
</template>

<script>
	export default {
		middleware: "auth",
    layout: "customer",
     mounted() {
      $(document).ready( function () {
          $('#orders').DataTable();
      });
    }
	};
</script>

