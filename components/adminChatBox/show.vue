<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container mt-3">
      <!-- <div class="row">
        <div class="col-md-6">
          <h2 class="card-title mb-0">Chat Customer</h2>
        </div>
        <div class="col-md-6"></div>
      </div>
      <br />
      <br /> -->
      <div class="row">
        <!-- <div class="col-md-4 border border-secondary"> -->
        <div class="col-md-4 p-0" style="height:500px;">
            <CustomerList  :customer_id="2"></CustomerList>
        </div>
        <div class="col-md-8 p-0">
          <AdminChatbox ref="chatBoxRefs" :propscustomer="propscustomer"></AdminChatbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import summernote from "../../plugin/summernote-bs4.min.js";
import AdminChatbox from "~/components/adminChatBox/adminChatbox";
import CustomerList from "~/components/adminChatBox/customerlist";

export default {
  props: ["propscustomer"],
  components:{
    AdminChatbox,
    CustomerList
  },
  mounted() {
    this.showChatBox();
  },
  methods: {
    showChatBox(){
      // this.$refs.chatBoxRefs.toLoadMethods(2)
    }
  },
};
</script>


