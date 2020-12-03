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
												@click="sub()"
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
												@click="add()"
												class="btn btn-sm btn-outline-secondary"
												type="button"
											>
												<i class="fas fa-plus"></i>
											</button>
										</div>
									</div>
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
							<div class="w-50 text-right">$100.00</div>
						</div>
						<div class="d-flex">
							<div class="w-50">Discount</div>
							<div class="w-50 text-right">$0.00</div>
						</div>
						<hr />
						<div class="d-flex">
							<div class="w-50">
								<b>Total</b>
							</div>
							<div class="w-50 text-right">
								<b>$100.00</b>
							</div>
						</div>
						<div class="text-center p-3">
							<button @click="checkout()" type="button" class="btn btn-primary btn-block">
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
		},
		data() {
			return {};
		},
		methods: {
			...mapActions({
				vxAddToCart: "cart/addToCart",
				vxCheckout: "cart/checkout",
      }),
      checkout(){
        var bodyFormData = new FormData();
        // for (var key in this.form) {
        //   formData.append(key, this.form[key]);
        // }
       bodyFormData.append(
          "cart",
          JSON.stringify(this.cart)
        );

        this.vxCheckout(bodyFormData).then(res => {
            console.log(res)
          })
          .catch(err => {
            console.error(err);
          })

      }
		},
		created() {
			// this.getProductDetails(this.$route.params.id);
		},
	};
</script>
addToCart

<style lang="css" scoped>
	.filter-btn {
		padding: 0px 5px;
		font-size: 13px;
		border-radius: 1rem;
	}
</style>
