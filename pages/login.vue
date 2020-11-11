<template>
    <div id="loginBox">
       <div class="login-box">
      <div class="login-logo">
         <a href="#"><b>Davao</b>Ecommerce</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
         <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>

               <div class="input-group mb-3">
                  <input v-model="email" type="email" class="form-control" placeholder="Email">
                  <div class="input-group-append">
                     <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                     </div>
                  </div>
               </div>
               <div class="input-group mb-3">
                  <input v-model="password" type="password" class="form-control" placeholder="Password">
                  <div class="input-group-append">
                     <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                     </div>
                  </div>
               </div>
               <div class="row">

                  <!-- /.col -->
                  <div class="col-12">
                     <button @click="login" type="submit" class="btn btn-primary btn-block">Sign In</button>
                  </div>
                  <!-- /.col -->
               </div>

         </div>
         <!-- /.login-card-body -->
      </div>
   </div>
  </div>
</template>

<script>
export default {
    layout:'customer',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            console.log('hello');
            this.$router.push('/admin')
        }
    }
}
</script>

<style>
#loginBox {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
