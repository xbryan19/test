<template>
  <v-app id="inspire">
    <Navbar v-if="confirmed"/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './views/Navbar'
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      confirmed: false,
    };
  },
  watch: {
    userInfo(val) {
      console.log(val);
      this.authenticate();
    },
  },
  created() {
    this.authenticate();
  },
  methods: {
    authenticate() {
      // console.log(this.$store.state.userInfo[0].EmployeeCode);
      if (this.$store.state.userInfo.length != 0) {
        this.confirmed = true;
      } else {
        this.confirmed = false;
      }
    },
  },
};
</script>
