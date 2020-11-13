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
                  <input v-model="form.email" type="email" class="form-control" placeholder="Email">
                  <div class="input-group-append">
                     <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                     </div>
                  </div>
               </div>
               <div class="input-group mb-3">
                  <input v-model="form.password" type="password" class="form-control" placeholder="Password">
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
    data() {
      return {
        form: {
          email: 'test@ecommerce.com',
          password: '123123123',
          name: '',
        },
      }
    },
    methods: {
      login() {
        this.$axios.$post('/api/login', this.form)
          .then((res) => {
            let token = res.data.token;
            this.$store.dispatch('setToken', {token});
            this.$router.push('/admin')
          })
          .catch(errors => {
            console.dir(errors);
          });
      },
    }
  }
</script>
