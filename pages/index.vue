<template>
  <div class="text-center">
    <h1>Landing Page</h1>
    <button @click="products()" class="btn btn-success">Products</button>
    <button @click="login()" class="btn btn-primary">Login</button>
    <button @click="signup()" class="btn btn-danger">Sign-up</button>
  </div>
</template>

<script>
export default {
    layout:'customer',

    methods:{
        products()
        {
            this.$router.push('/products')
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
