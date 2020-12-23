<template>
	<div class="container">
		<Loading
			:active.sync="isLoading"
			:can-cancel="false"
			:is-full-page="true"
			color="#28a745"
			:height="128"
			:width="128"
		>
		</Loading>
		<div class="row mt-3 mb-3">
			<div class="col-12">
				<h2><i class="fas fa-user-circle"></i> Profile</h2>
			</div>
		</div>
		<div class="row p-2">
			<div class="col-lg-3 border-bottom pb-2">
				<div
					class="border border-warning"
					style="height: 300px; width: 100%"
				>
					<img :src="photoUrl" style="auto; width: 100%" />
				</div>

				<button
					@click="$refs.image_file_input2.click()"
					class="btn btn-warning btn-block boder"
				>
					<i class="fas fa-camera mr-2"></i>Change Profile Photo
				</button>
				<input
					type="file"
					ref="image_file_input2"
					name="image_file"
					class="d-none"
					accept="image/x-png,image/gif,image/jpeg"
					@change="onFileChange"
				/>
			</div>

			<div class="col-lg-8 border-bottom pb-2">
				<div class="row">
					<div class="col-lg-12">
						<div class="p-1">
							<div class="form-group mb-3">
								<label for="">Name</label>
								<input
									v-model="me.name"
									type="text"
									class="form-control"
								/>
							</div>
							<div class="form-group mb-3">
								<label for="">Email</label>
								<input
									v-model="me.email"
									type="text"
									class="form-control"
									disabled
								/>
							</div>
							<div class="form-group mb-3">
								<label for="">Contact</label>
								<input
									v-model="me.contact"
									type="text"
									class="form-control"
								/>
							</div>
							<div class="form-group mb-3">
								<label for="">Address</label>
								<input
									v-model="me.address"
									type="text"
									class="form-control"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="p-1 text-right">
							<button @click="update()" class="btn btn-success">
								<i class="fas fa-save mr-2"></i> Update Profile
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Loading from "vue-loading-overlay";
	import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
	export default {
		components: {
			Loading,
		},
		computed: {
			...mapState({
				me: (state) => state.auth.me,
			}),
			photoUrl() {
				if (this.updatedUrl) {
					return this.url;
				} else {
					return this.me.image_link;
				}
			},
		},
		data() {
			return {
				updatedUrl: false,
				url: null,
				imageFile: null,
				isLoading: false,
			};
		},
		methods: {
       ...mapActions({
        authMe: "auth/me2",
      }),
			onFileChange(e) {
				console.log(e);
				this.updatedUrl = true;
				const file = e.target.files[0];
				this.imageFile = file;
				this.url = URL.createObjectURL(file);
			},
			update() {
        this.isLoading = true;
				var formData = new FormData();
				let data = {
					name: this.me.name,
					contact: this.me.contact,
					address: this.me.address,
					image: this.imageFile,
				};
				for (var key in data) {
					formData.append(key, data[key]);
				}
				this.$axios
					.post("/api/customer/updateProfile", formData)
					.then((res) => {
             this.isLoading = false;
						console.log(res);
            toastr.success("Successfully Updated");
            this.authMe();
					})
					.catch((err) => {
            this.authMe();
            this.isLoading = false;
						toastr.error("Error: "+err);
						console.error(err);
					});
			},
		},
	};
</script>
