<style lang="scss">
	.quick-chat-container .header-container {
		height: 50px !important;
	}

	.quick-chat-container .header-container .header-paticipants-text {
		display: none !important;
	}
</style>


<template>
	<div
		style="width: 350px; position: fixed; bottom: 5px; right: 5px; z-index: 5"
	>
		<button
			style="background-color: #339f25"
			v-if="visible == false"
			class="btn btn-sm text-light float-right"
			@click="visibleToTrue()"
		>
			<span class="ml-2">Chat Admin</span>
			<i
				class="fa fa-comments ml-2 mr-1"
				style="font-size: 20px"
				aria-hidden="true"
			>
				<span
					style="font-size: 10px"
					class="badge badge-danger align-top"
					>{{ chat_badge }}</span
				>
			</i>
		</button>
		<Chat
			:style="'max-height:500px; height:400px;'"
			v-if="visible"
			:participants="participants"
			:myself="myself"
			:messages="messages"
			:chat-title="chatTitle"
			:placeholder="placeholder"
			:colors="colors"
			:border-style="borderStyle"
			:hide-close-button="hideCloseButton"
			:close-button-icon-size="closeButtonIconSize"
			:submit-icon-size="submitIconSize"
			:submit-image-icon-size="submitImageIconSize"
			:load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
			:async-mode="asyncMode"
			:scroll-bottom="scrollBottom"
			:display-header="true"
			:send-images="false"
			:profile-picture-config="profilePictureConfig"
			:timestamp-config="timestampConfig"
			:link-options="linkOptions"
			:accept-image-types="'.png, .jpeg'"
			@onImageClicked="onImageClicked"
			@onImageSelected="onImageSelected"
			@onMessageSubmit="onMessageSubmit"
			@onType="onType"
			@onClose="onClose"
		/>
	</div>
</template>
<script>
	import { Chat } from "vue-quick-chat";
	import "vue-quick-chat/dist/vue-quick-chat.css";
	import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

	export default {
		props: ["user", "store_logo", "store_settings"],
		components: {
			Chat,
		},
		computed: {
			...mapState({
				me: (state) => state.auth.me,
			}),
			chat_badge() {
				var badge = "";
				if (this.badge != 0) {
					badge = this.badge;
				}
				return badge;
			},
		},
		beforeCreate() {},
		mounted() {},
		created() {
			setTimeout(() => {
				this.toLoadMethods();
			}, 2000);
		},

		data() {
			return {
				badge: 0,
				submitImageIconSize: 20,
				visible: false,
				participants: [],
				myself: {},
				messages: [],
				chatTitle: "Davao Ecommerce",
				placeholder: "send your message",
				colors: {
					header: {
						bg: "#339f25",
						text: "#fff",
					},
					message: {
						myself: {
							bg: "#f0edbd",
							text: "#222224",
						},
						others: {
							bg: "#339f25",
							text: "#fff",
						},
						messagesDisplay: {
							bg: "#f7f3f3",
						},
					},
					submitIcon: "#b91010",
					submitImageIcon: "#b91010",
				},
				borderStyle: {
					topLeft: "10px",
					topRight: "10px",
					bottomLeft: "10px",
					bottomRight: "10px",
				},
				hideCloseButton: false,
				submitIconSize: 25,
				closeButtonIconSize: "15px",
				asyncMode: true,
				toLoad: [],
				scrollBottom: {
					messageSent: true,
					messageReceived: false,
				},
				displayHeader: false,
				profilePictureConfig: {
					others: true,
					myself: true,
					styles: {
						width: "30px",
						height: "30px",
						borderRadius: "50%",
					},
				},
				timestampConfig: {
					format: "HH:mm M/d/y",
					relative: false,
				},
				// there are other options, you can check them here
				// https://soapbox.github.io/linkifyjs/docs/options.html
				linkOptions: {
					myself: {
						className: "myLinkClass",
						events: {
							click: function (e) {
								alert("Link clicked!");
							},
							mouseover: function (e) {
								alert("Link hovered!");
							},
						},
						format: function (value, type) {
							if (type === "url" && value.length > 50) {
								value = value.slice(0, 50) + "…";
							}
							return value;
						},
					},
					others: {
						className: "othersLinkClass",
						events: {
							click: function (e) {
								alert("Link clicked!");
							},
							mouseover: function (e) {
								alert("Link hovered!");
							},
						},
						format: function (value, type) {
							if (type === "url" && value.length > 50) {
								value = value.slice(0, 50) + "…";
							}
							return value;
						},
					},
				},
			};
		},
		methods: {
			toLoadMethods() {
				this.$axios
					.get("/api/customer/getMessageCustomer")
					.then((res) => {
						this.toLoad = res.data;
					})
					.catch((err) => {
						console.error(err);
					});

				// axios
				//   .get("/getparticipants")
				//   .then((res) => {
				//     this.participants = res.data;
				//   })
				//   .catch((err) => {
				//     console.error(err);
				//   });


				this.myself = {
					// name: this.$store.state.auth.me.name,
					name: this.me.name,
					id: this.me.id,
					profilePicture:
						"https://www.pikpng.com/pngl/b/243-2439658_customer-service-icon-png-transparent-customer-icon-png.png",
				};

				this.participants = [
					{
						name: "Davao Ecommerce",
						id: 1,
						profilePicture:
							"http://images.china.cn/attachement/jpg/site1007/20110822/0014222d98500fbc086301.jpg",
					},
				];
			},

			getUnviewedChats() {
				// axios
				//   .get("/getunviewdchats")
				//   .then((res) => {
				//     this.badge = res.data;
				//   })
				//   .catch((err) => {
				//     console.error(err);
				//   });
			},

			visibleToTrue() {
				this.visible = true;
				// axios
				//   .post("/updateUnviewedChats")
				//   .then((res) => {
				//     console.log(res);
				//   })
				//   .catch((err) => {
				//     console.error(err);
				//   });
			},
			onType: function (event) {
				//here you can set any behavior
			},
			loadMoreMessages(resolve) {
				setTimeout(() => {
					resolve(this.toLoad); //We end the loading state and add the messages
					//Make sure the loaded messages are also added to our local messages copy or they will be lost
					this.messages.unshift(...this.toLoad);
					this.toLoad = [];
				}, 1000);
			},
			onMessageSubmit: function (message) {
				/*
				 * example simulating an upload callback.
				 * It's important to notice that even when your message wasn't send
				 * yet to the server you have to add the message into the array
				 */
				this.messages.push(message);

				/*
				 * you can update message state after the server response
				 */
				// timeout simulating the request

				this.$axios
				  .post("/api/customer/sendChatCustomer", message)
				  .then((res) => {
				    if (res.data == "success") {
				      setTimeout(() => {
				        message.uploaded = true;
				      }, 1000);
				    }
				  })
				  .catch((err) => {
				    console.error(err);
				  });
			},
			onClose() {
				this.visible = false;
				this.getUnviewedChats();
			},
			onImageSelected(files, message) {
				console.log("oyeee");
				let src =
					"https://res.cloudinary.com/practicaldev/image/fetch/s--Biu9Ca3V--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/70fcyla63wfu1ge40yu8.jpg";
				this.messages.push(message);
				/**
				 * This timeout simulates a requisition that uploads the image file to the server.
				 * It's up to you implement the request and deal with the response in order to
				 * update the message status and the message URL
				 */
				// setTimeout(
				//   (res) => {
				//     message.uploaded = true;
				//     message.src = res.src;
				//   },
				//   3000,
				//   { src }
				// );
			},
			onImageClicked(message) {
				/**
				 * This is the callback function that is going to be executed when some image is clicked.
				 * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
				 */
				console.log("Image clicked", message.src);
			},
		},
	};
</script>
