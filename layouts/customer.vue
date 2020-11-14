<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
export default {
  computed: {
        ...mapState({
            login: state => state.auth.login
        }),
    },
  methods: {
        ...mapActions({
          vuexlogout: "auth/logout",
        }),
        logout(){
            this.vuexlogout();
            this.$router.push('/login')
        }
  }
}
</script>
<style>
</style>
