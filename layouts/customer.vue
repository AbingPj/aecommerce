<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" @click="home()">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" @click="home()">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="products()" >Products</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item">
          <NuxtLink class="nav-link"  v-if="isLogin" to="/cart"><i class="fas fa-shopping-cart"></i> </NuxtLink>

      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="isLogin" @click="profile()">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " v-if="isAdmin" @click="admin()" >Administrator</a>
        <!-- <a class="nav-link " @click="admin()" >Administrator</a> -->
      </li>
       <li class="nav-item">
        <button v-if="!isLogin" @click="login()" class="btn btn-sm btn-primary mr-2">Login</button>
      </li>
       <li class="nav-item">
         <button v-if="!isLogin" @click="signup()" class="btn btn-sm btn-dark mr-2">Sign-up</button>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="logout()"><i class="fas fa-sign-out-alt"></i></a>
        <!-- <button v-if="isLogin" @click="logout()" class="btn btn-sm btn-danger mr-2">LOG OUT</button> -->
      </li>
    </ul>
  </div>
</nav>
    <Nuxt/>

  <!-- <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright © Your Website 2020</p>
    </div>
  </footer> -->
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
export default {
   computed: {
        ...mapState({
            isLogin: state => state.auth.isLogin
        }),
        // ...mapGetters({
        //     isLogin: 'auth/getIsLogin'
        // }),
        ...mapGetters({
            isLogin2: 'auth/getIsLogin',
            isAdmin: 'auth/getIsAdmin',
            getNum1Num2: 'auth/getNum1Num2'
        }),
    },
    mounted() {
      this.getCartContent()
    },
        methods: {
        ...mapActions({
          vuexlogout: "auth/logout",
          getIsLogin: "auth/getIsLogin",
          getCartContent: "cart/getCartContent",
        }),
        home()
        {
            this.$router.push('/')
        },
        products()
        {
            this.$router.push('/products')
        },
        profile()
        {
            this.$router.push('/profile')
        },
        admin()
        {
            this.$router.push('/admin')
        },
        login()
        {
            this.$router.push('/login')
        },
        signup()
        {
            this.$router.push('/sign-up')
        },
        logout(){
            this.vuexlogout();
            this.$router.push('/login')
        }
  }
}
</script>
<style>
.footer-fixed{
position: fixed;
  left: 0;
  bottom: 0;
  width:100%;
}
</style>
