<template>
	<div class="container">
		<div class="row mt-3 mb-3">
			<div class="col-lg-12">
				<h2><i class="fas fa-unlock-alt"></i> Change Password</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-8">
				<div class="p-1">
					<div class="form-group mb-3">
						<label for="">Current Password</label>
						<input
							v-model="currentPas"
							type="password"
							class="form-control"
              :class="errors.has('current_password')? 'is-invalid': ''"
              @keypress="errors.clear('current_password')"
						/>
					</div>
					<div class="form-group mb-3">
						<label for="">New Password</label>
						<input
							v-model="newPassword"
							type="password"
							class="form-control"
              :class="errors.has('new_password')? 'is-invalid': ''"
              @keypress="errors.clear('new_password')"
						/>
					</div>
					<div class="form-group mb-3">
						<label for="">Confirm Password</label>
						<input
							v-model="confirmPassword"
							type="password"
							class="form-control"
              :class="errors.has('confirm_password')? 'is-invalid': ''"
              @keypress="errors.clear('confirm_password')"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="p-1">
					<button class="btn btn-success" @click="changePassword()">
						<i class="fas fa-save mr-2"></i> Change Password
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Errors from "~/components/profile/errorClass";
	export default {
		data() {
			return {
				currentPas: null,
				newPassword: null,
				confirmPassword: null,
				errors: new Errors(),
			};
		},
		methods: {
			changePassword() {
				let data = {
					current_password: this.currentPas,
					new_password: this.newPassword,
					confirm_password: this.confirmPassword,
				};
				this.$axios
					.post("/api/customer/changePassword", data)
					.then((res) => {
						toastr.success("successfully Change Password");
						this.currentPas = null;
						this.newPassword = null;
						this.confirmPassword = null;
					})
					.catch((err) => {
						if (err.response) {
							if (err.response.status == 402) {
								toastr.error(err.response.data.message);
							} else {
								this.errors.record(err.response.data.errors);
								this.showErrorMessage(this.errors.getArrayOfMessages());
							}
						} else {
							toastr.error("Something went wrong.");
						}

						// console.error(err);
					});
			},

			showErrorMessage(data) {
				var arr = [];
				arr = data;
				arr.forEach((element) => {
					toastr.error(element);
				});
			},
		},
	};
</script>
