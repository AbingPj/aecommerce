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
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
export default {
  middleware: 'admin',
  components: {
    NavBar, SideBar, Footer
  },
  created() {
    //  this.vuexproducts();
  },
  methods: {
        ...mapActions({
          vuexlogout: "auth/logout",
          // vuexproducts: "products/retrieveProducts",
        }),
        home(){
           this.$router.push('/')
        },
        dashboard(){
           this.$router.push('/admin')
        },
        categories(){
           this.$router.push('/admin/categories')
        },
        products(){
           this.$router.push('/admin/products')
        },
        customers(){
           this.$router.push('/admin/customers')
        },
        logout(){
            this.vuexlogout('vuexlogout');
            this.$router.push('/')
        }
  }
}
</script>
