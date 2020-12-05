<template>
	<div class="container p-3">
		<div class="row">
			<div class="col-md-8 border border-secondary">
				<div class="p-2">
					<div
						v-for="(item, index) in cart"
						:key="index"
						class="card"
						style="height: 120px"
					>
						<div class="d-flex p-2">
							<div class="m-1">
								<img
									:src="item.product.image_link"
									style="width: 120px; height: 100px"
								/>
							</div>
							<div class="m-1">
								<h4>{{ item.product.product_name }}</h4>
								<h6>
									₱ {{ item.product.price }} / {{ item.product.unit }}
								</h6>
								<div class="">
									<div class="input-group mb-3" style="width: 100px">
										<div class="input-group-prepend">
											<button
												@click="sub(item)"
												class="btn btn-sm btn-outline-secondary"
												type="button"
											>
												<i class="fas fa-minus"></i>
											</button>
										</div>
										<input
											v-model="item.quantity"
											type="text"
											class="form-control form-control-sm"
											readonly
										/>
										<div class="input-group-append">
											<button
												@click="add(item)"
												class="btn btn-sm btn-outline-secondary"
												type="button"
											>
												<i class="fas fa-plus"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="ml-auto" style="width: 100px">
								<button
									class="btn btn-danger btn-sm"
									style="position: absolute; top: 10px; right: 10px"
								>
									<i class="fas fa-trash-alt"></i> Remove
								</button>
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
					<div class="p-3">
						<div class="d-flex">
							<div class="w-50">Total Order Amount</div>
							<div class="w-50 text-right">₱ {{this.addCommaAndTwoDecimalPlaces(total)}}</div>
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
								<b>₱ {{addCommaAndTwoDecimalPlaces(total)}}</b>
							</div>
						</div>
						<div class="text-center p-3">
							<button
								@click="checkout()"
								type="button"
								class="btn btn-primary btn-block"
							>
								Check Out
							</button>
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
				cart: (state) => state.cart.cart,
      }),
      total(){
        let total = 0;
        this.cart.forEach(item => {
           let subTotal = Number(item.product.price) * item.quantity;
           total = total + subTotal;
        });
        return total;
      }
		},
		data() {
			return {
			};
		},
		methods: {
			...mapActions({
				vxAddToCart: "cart/addToCart",
				vxCheckout: "cart/checkout",
				vxUpdateCart: "cart/updateCart",
				vxRemoveItem: "cart/removeItem",
			}),
			subTotal(item) {
        let total = Number(item.product.price) * item.quantity;
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
			add(data) {
				this.updateCart(data.id, data.quantity + 1);
			},
			sub(data) {
				if (data.quantity > 1) {
					this.updateCart(data.id, data.quantity - 1);
				}
      },
      vxRemoveItem(data) {

			},
			updateCart(id, quantity) {
				this.$events.fire("LoadingOverlay", true);
				let data = {
					cartContentId: id,
					quantity: quantity,
				};
				this.vxUpdateCart(data)
					.then((res) => {
						console.log(res);
						this.$events.fire("LoadingOverlay", false);
					})
					.catch((err) => {
						console.log(err);
						this.$events.fire("LoadingOverlay", false);
					});
			},

			checkout() {
				this.$events.fire("LoadingOverlay", true);
				var bodyFormData = new FormData();
				bodyFormData.append("selectedProducts", JSON.stringify(this.cart));
				bodyFormData.append("total", this.total);

				this.vxCheckout(bodyFormData)
					.then((res) => {
						console.log(res);
						this.$events.fire("LoadingOverlay", false);
					})
					.catch((err) => {
						console.error(err);
						this.$events.fire("LoadingOverlay", false);
					});
			},
		},
		created() {
			// this.getProductDetails(this.$route.params.id);
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
