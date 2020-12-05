<template>
	<div class="container">
		<div class="row">
			<div class="col-12 p-4">
				<ul class="nav nav-tabs" id="myTab" role="tablist">
					<li class="nav-item">
						<a
							class="nav-link active"
							id="home-tab"
							data-toggle="tab"
							href="#home"
							role="tab"
							aria-controls="home"
							aria-selected="true"
							>Profile</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="profile-tab"
							data-toggle="tab"
							href="#profile"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
							>Channge Password</a
						>
					</li>
				</ul>
				<div class="tab-content" id="myTabContent">
					<div
						class="tab-pane fade show active"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<Profile></Profile>
					</div>
					<div
						class="tab-pane fade"
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<ChangePassword></ChangePassword>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Profile from '~/components/profile/Profile'
import ChangePassword from '~/components/profile/ChangePassword'
	export default {
		middleware: "auth",
		layout: "customer",
		components: {
      Profile,
      ChangePassword
    },
	};
</script>
