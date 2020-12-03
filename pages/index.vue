<template>
  <div class="text-center">
    <h1>Landing Page</h1>
    <!-- <button @click="products()" class="btn btn-success">Products</button>
    <button v-if="isLogin" @click="profile()" class="btn btn-info">Profile</button>
    <button v-if="isAdmin" @click="admin()" class="btn btn-info">Administrator</button>
    <button v-if="!isLogin" @click="login()" class="btn btn-primary">Login</button>
    <button v-if="!isLogin" @click="signup()" class="btn btn-dark">Sign-up</button>
    <button v-if="isLogin" @click="logout()" class="btn btn-danger">LOG OUT</button> -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';

export default {
    layout:'customer',
    computed: {
        ...mapState({
            isLogin: state => state.auth.isLogin
        }),
        // ...mapGetters({
        //     isLogin: 'auth/getIsLogin'
        // }),
        ...mapGetters({
            isLogin2: 'auth/getIsLogin',
            isAdmin: 'auth/getIsAdmin'
        }),
    },
    methods:{
        ...mapActions({
          vuexlogout: "auth/logout",
        }),
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
        logout()
        {
            console.log("check")
            this.vuexlogout();
            this.$router.push('/');
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
