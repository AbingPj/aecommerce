<template>
	<div class="container p-3">
		<div class="row mt-2 mb-3">
			<div class="col-12">
				<h2>
					<i class="fas fa-folder-open"></i>
					<NuxtLink :to="'/orders'"> My Orders</NuxtLink> / id: #{{
						selectedOrder.id
					}}
				</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8 border border-secondary">
				<div class="p-2">
					<div
						v-for="(item, index) in order_details"
						:key="index"
						class="card"
						style="height: 120px"
					>
						<div class="d-flex p-2">
							<div class="m-1">
								<img
									:src="item.image_link"
									style="width: 120px; height: 100px"
								/>
							</div>
							<div class="m-1">
								<h4>{{ item.product_name }}</h4>
								<h6>
									₱ {{ addCommaAndTwoDecimalPlaces(item.price) }} /
									{{ item.unit }}
								</h6>
								<div class="">
									<div class="input-group mb-3" style="width: 100px">
										<div class="input-group-prepend">
											<label for="" class="mr-3">Qty: </label>
										</div>
										<input
											v-model="item.quantity"
											type="text"
											class="form-control form-control-sm"
											readonly
										/>
									</div>
								</div>
							</div>
							<div class="ml-auto" style="width: 100px">
								<div
									class="font-size-20"
									style="position: absolute; bottom: 10px; right: 10px"
								>
									₱ {{ subTotal(item) }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 border border-secondary">
				<div style="min-height: 450px">
					<h3 class="text-center p-4">Order Summary</h3>
					<h4 class="pl-3">Order ID: #{{ selectedOrder.id }}</h4>
					<div class="p-3">
						<div class="d-flex">
							<div class="w-50">Total Order Amount</div>
							<div class="w-50 text-right">
								₱ {{ this.addCommaAndTwoDecimalPlaces(total) }}
							</div>
						</div>
						<div class="d-flex">
							<div class="w-50">Discount</div>
							<div class="w-50 text-right">₱ 0.00</div>
						</div>
						<hr />
						<div class="d-flex">
							<div class="w-50">
								<b>Total</b>
							</div>
							<div class="w-50 text-right">
								<b>₱ {{ addCommaAndTwoDecimalPlaces(total) }}</b>
							</div>
						</div>
						<div class="text-center p-3">
							<!-- <button
								@click="checkout()"
								type="button"
								class="btn btn-primary btn-block"
							>
								Check Out
							</button> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
	export default {
		layout: "customer",
		components: {},
		computed: {
			...mapState({
				selectedOrder: (state) => state.orders.selectedOrder,
				order_details: (state) => state.orders.order_details,
			}),
			total() {
				let total = 0;
				this.order_details.forEach((item) => {
					let subTotal = Number(item.price) * item.quantity;
					total = total + subTotal;
				});
				return total;
			},
		},
		data() {
			return {};
		},
		methods: {
			...mapActions({
				// vxAddToCart: "cart/addToCart",
				// vxCheckout: "cart/checkout",
				// vxUpdateCart: "cart/updateCart",
				// vxRemoveItem: "cart/removeItem",
				vxGetOrderDetails: "orders/getOrderDetails",
			}),
			subTotal(item) {
				let total = Number(item.price) * item.quantity;
				let value = this.addCommaAndTwoDecimalPlaces(total);
				return value;
			},
			addCommaAndTwoDecimalPlaces(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
		},
		created() {
			console.log("OYEEEEEEEEEEEEEEEEEEE");
			this.vxGetOrderDetails(this.$route.params.id);
		},
	};
</script>

<style lang="css" scoped>
	.filter-btn {
		padding: 0px 5px;
		font-size: 13px;
		border-radius: 1rem;
	}
</style>
