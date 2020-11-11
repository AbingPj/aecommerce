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
export default {
  components: {
    NavBar, SideBar, Footer
  },
  methods: {
        logout(){
            console.log('hello');
            this.$router.push('/login')
        }
  }
}
</script>
