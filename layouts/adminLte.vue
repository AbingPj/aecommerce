<template>
  <div>
    <NavBar />
    <SideBar />
    <nuxt class="content-wrapper" />
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/adminLte_components/NavBar'
import SideBar from '../components/adminLte_components/SideBar'
import Footer from '../components/adminLte_components/Footer'
import { mapActions } from "vuex";
export default {
  middleware: 'auth',
  components: {
    NavBar, SideBar, Footer
  },
  methods: {
        ...mapActions({
          vuexlogout: "auth/logout",
        }),
        dashboard(){
           this.$router.push('/admin')
        },
        categories(){
           this.$router.push('/admin/categories')
        },
        products(){
           this.$router.push('/admin/products')
        },
        users(){
           this.$router.push('/admin/users')
        },
        logout(){
            this.vuexlogout('vuexlogout');
            this.$router.push('/')
        }
  }
}
</script>
