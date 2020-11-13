<template>
  <div>
<div class="card">
         <div class="card-body login-card-body">
            <p class="login-box-msg">Sign UP Page</p>

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
                     <button @click="submit" type="submit" class="btn btn-primary btn-block">SUBMIT</button>
                  </div>
                  <!-- /.col -->
               </div>

         </div>
         <!-- /.login-card-body -->
      </div>
  </div>
</template>

<script>
export default {
  layout:'customer',
  methods:{
    submit()
    {
      this.$router.push('/profile')
    }
  }
}
</script>
