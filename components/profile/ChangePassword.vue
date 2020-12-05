<template>
	<div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-lg-12">
        <h2>
          <i class="fas fa-unlock-alt"></i> Change Password
        </h2>
      </div>
    </div>
		<div class="row">
			<div class="col-lg-8">
				<div class="p-1">
					<div class="form-group mb-3">
						<label for="">Current Password</label>
						<input
							v-model="currentPassword"
							type="password"
							class="form-control"
							placeholder="John Doe"
						/>
					</div>
					<div class="form-group mb-3">
						<label for="">New Password</label>
						<input
							v-model="newPassword"
							type="password"
							class="form-control"
							placeholder="customer@email.com"
							disabled
						/>
					</div>
					<div class="form-group mb-3">
						<label for="">Confirm Password</label>
						<input
							v-model="confirmPassword"
							type="password"
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
						<i class="fas fa-save mr-2"></i> Change Password
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentPassword: null,
				newPassword: null,
				confirmPassword: null,
			};
		},
	};
</script>
