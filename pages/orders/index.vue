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
						<h2><i class="fas fa-folder-open"></i> My Orders</h2>
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
							<tbody>
								<tr v-for="(item, index) in orders" :key="index">
									<td>{{item.id}}</td>
									<td><b>₱ {{addCommaAndTwoDecimalPlaces(item.price)}}</b></td>
                  <td>
                    <span v-if="item.status === 1" class="badge badge-success">{{item.status_label}}</span>
                    <span v-else class="badge badge-warning">{{item.status_label}}</span>
                  </td>
                  <td>{{item.date}}</td>
									<td>
										<NuxtLink
											class="btn btn-info btn-sm"
											:to="'/orders/' + item.id"
											>Details</NuxtLink
										>
									</td>
								</tr>
							</tbody>
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
	import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
	export default {
		middleware: "auth",
		layout: "customer",

		computed: {
			...mapState({
				orders: (state) => state.orders.orders,
			}),
		},
		methods: {
      addCommaAndTwoDecimalPlaces(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
			...mapActions({
				vxGetOrders: "orders/getOrders",
			}),
		},

		created() {
			this.vxGetOrders();
		},

		mounted() {
			$(document).ready(function () {
				$("#orders").DataTable();
			});
		},
	};
</script>

