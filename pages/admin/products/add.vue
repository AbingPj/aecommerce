<template>
	<div>
		<div class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1 class="m-0 text-dark">Products</h1>
					</div>

					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item">
								<a @click="dashboard()">Dashboard</a>
							</li>
							<li class="breadcrumb-item active">Products</li>
							<li class="breadcrumb-item active">Add</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<section class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-10">
						<div class="card">
							<div class="card-header">
								<h3 class="card-title">Add New Product</h3>
							</div>
							<!-- /.card-header -->
							<div class="card-body">
								<form>
									<div class="form-group mb-3">
										<div class="row">
											<div class="col-lg-3">
												<label for="">Avatar</label>
												<br />
												<img
													:src="preview"
													alt=""
													width="200"
													height="150"
												/>
												<br />
												<!-- <input type="text" class="form-control" placeholder="ex. Air Jordan"> -->
												<button
													type="button"
													class="btn btn-primary mt-2"
													style="width: 200px"
													@click="$refs.image_file_input.click()"
												>
													Add Image
												</button>
												<input
													type="file"
													ref="image_file_input"
													@change="onFileChange"
													class="d-none"
												/>
											</div>
											<!-- <div class="col-lg-8">
                        <label for="">More Images</label>
                        <br>
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <img src="" alt="" width="100" height="80" class="mb-1">
                        <br>
                        <button type="button" class="btn btn-primary w-50 mt-2">Add More Images</button>
                      </div> -->
										</div>
									</div>
									<div class="form-group mb-3">
										<label for="">Product Name</label>
										<input
											v-model="form.name"
											type="text"
											class="form-control"
											placeholder="ex. Air Jordan"
										/>
									</div>
									<div class="form-group mb-3">
										<label for="">Description</label>
										<textarea
											v-model="form.description"
											class="form-control"
											placeholder=""
										></textarea>
									</div>
									<div class="form-group mb-3">
										<label for="">Price</label>
										<input
											v-model="form.price"
											type="text"
											class="form-control"
											placeholder="ex. 1999.99"
										/>
									</div>
									<div class="form-group mb-3">
										<label for="">Unit</label>
										<input
											v-model="form.unit"
											type="text"
											class="form-control"
											placeholder="ex. pair"
										/>
									</div>
									<div class="form-group mb-3">
										<label for="">Category</label>
										<select
											v-model="form.category_id"
											name=""
											id=""
											class="form-control"
										>
											<option value="null" disabled>
												Please Select Category
											</option>
											<option
												v-for="(item, index) in categories"
												:value="item.id"
												:key="index"
											>
												{{ item.category_name }}
											</option>
										</select>
									</div>
									<div class="form-group mb-3">
										<button
											@click="addNewProduct()"
											type="button"
											class="btn btn-primary w-25"
										>
											Save
										</button>
										<button type="button" class="btn btn-danger w-25">
											Cancel
										</button>
									</div>
								</form>
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
	import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
	import Errors from "~/components/utililites/errorClass";
	export default {
		layout: "adminLte",
		components: {},
		data() {
			return {
				preview: "",
				form: {
					name: "",
					price: "",
					unit: "",
					image: "",
					category_id: null,
					image: "",
					description: "",
				},
				errors: new Errors(),
			};
		},
		computed: {
			...mapState({
				categories: (state) => state.admin.categories.categories,
			}),
		},
		methods: {
			...mapActions({
				addProduct: "admin/products/addProduct",
			}),
			onFileChange(e) {
				const file = e.target.files[0];
				this.form.image = file;
				this.preview = URL.createObjectURL(file);
			},
			addNewProduct() {
				var formData = new FormData();
				for (var key in this.form) {
					if (this.form[key] == null) {
						formData.append(key, '');
					} else {
						formData.append(key, this.form[key]);
					}
				}

				this.addProduct(formData)
					.then((res) => {
						toastr.success("Added!");
						this.$router.push("/admin/products");
					})
					.catch((err) => {
						toastr.error("Fail to Save");
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
					});
			},

			showErrorMessage(data) {
				data.forEach((element) => {
					toastr.error(element);
				});
			},

			dashboard() {
				this.$router.push("/admin");
			},
		},
	};
</script>

<style></style>
