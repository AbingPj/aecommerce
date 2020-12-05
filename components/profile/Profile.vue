<template>
	<div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-12">
        <h2>
        <i class="fas fa-user-circle"></i> Profile
        </h2>
      </div>
    </div>
		<div class="row p-2">
			<div class="col-lg-3 border-bottom pb-2">
				<div
					class="border border-warning"
					style="height: 300px; width: 100%"
				>
					<img :src="''" style="auto; width: 100%" />
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
									v-model="name"
									type="text"
									class="form-control"
									placeholder="John Doe"
								/>
							</div>
							<div class="form-group mb-3">
								<label for="">Email</label>
								<input
									v-model="email"
									type="text"
									class="form-control"
									placeholder="customer@email.com"
									disabled
								/>
							</div>
							<div class="form-group mb-3">
								<label for="">Contact</label>
								<input
									v-model="contact"
									type="text"
									class="form-control"
									placeholder="+639 123 1234"
								/>
							</div>
							<div class="form-group mb-3">
								<label for="">Address</label>
								<input
									v-model="address"
									type="text"
									class="form-control"
									placeholder="+639 123 1234"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="p-1">
							<button class="btn btn-success">
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
	export default {
    data() {
      return {

      }
    },
    methods: {
      onFileChange(e) {
				console.log(e);
				const file = e.target.files[0];
				// this.imageFile = file;
				// this.disableSavePictureBtn = false;
				this.SET_PROFILE_PICTURE(URL.createObjectURL(file));
			},
    },
	};
</script>
