<template>
  <div class="text-center">
    <h1>Products</h1>
     <button @click="home()" class="btn btn-primary">Landing Page / Home</button>
     <button @click="login()" class="btn btn-primary">Login</button>
   <button @click="signup()" class="btn btn-danger">Sign-up</button>
  </div>
</template>

<script>
export default {
    layout:'customer',
    methods:{
      home()
        {
            this.$router.push('/')
        },
        login()
        {
            this.$router.push('/login')
        },
         signup()
        {
            this.$router.push('/sign-up')
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
