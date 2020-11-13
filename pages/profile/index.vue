<template>
  <div class="text-center">
    <h1>Profile Page</h1>
    <button @click="home()" class="btn btn-primary">Landing Page / HOME</button>
    <button @click="products()" class="btn btn-success">Products</button>
    <button @click="logout()" class="btn btn-danger">Logout</button>
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
     products()
        {
            this.$router.push('/products')
        },
        logout()
        {
            this.$router.push('/')
        }
  }
}
</script>
