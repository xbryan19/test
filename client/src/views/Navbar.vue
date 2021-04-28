<template>
  <div id="inspire">
    <v-app-bar clipped-left app color="#26A69A">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <img
          src="img/MBWA1.png"
          width="200px"
          height="50px"
          :aspect-ratio="8 / 8"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="logout()">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped app>
      <template v-slot:prepend>
        <v-list class="mt-5">
          <div class="text-center">
            <v-avatar size="90">
              <v-img aspect-ratio="1" :src="imageUrl"></v-img>
            </v-avatar>
          </div>
          <v-list-item two-line style="text-align: center">
            <v-list-item-content v-if="userInfo[0].FirstName">
              <!-- <v-list-item-title class="title">{{
                userInfo[0].FirstName + " " + userInfo[0].LastName
              }}</v-list-item-title> -->
              <v-list-item-title class="title">{{EmployeeName}}</v-list-item-title>
              <v-list-item-subtitle class="title">under construction</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider color="white"></v-divider>
      </template>

      <v-list>
        <v-list-item-title class="ml-5">
          <h1 class="font-weight-bold headline" style="color: #424242">Menu</h1>
        </v-list-item-title>
        <template
          v-for="cheks in chek"
          :to="cheks.to"
          style="text-decoration: none"
        >
          <v-list-item
            :to="cheks.to"
            :key="cheks.text"
            style="text-decoration: none"
          >
            <v-list-item-action>
              <v-icon>{{ cheks.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ cheks.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <!----------------------- REPORTS -------------------------->
      <v-list>
        <v-list-item-title class="ml-5">
          <h1 class="headline font-weight-bold" style="color: #424242">
            Reports
          </h1>
        </v-list-item-title>
        <template
          v-for="item2 in items2"
          :to="item2.to"
          style="text-decoration: none"
        >
          <v-list-item
            :to="item2.to"
            :key="item2.text"
            style="text-decoration: none"
          >
            <v-list-item-action>
              <v-icon>{{ item2.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item2.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    chek: [
      {
        icon: "mdi-check",
        text: "CHECK",
        to: "check",
      },
    ],
    items2: [
      {
        icon: "mdi-file-chart",
        text: "MBWA REPORT",
        to: "report",
      },
      {
        icon: "mdi-clipboard-list",
        text: "MBWA SUMMARY",
        to: "summary",
      },
    ],
  }),
  computed: {
    EmployeeName() {
      // console.log(val)
      let arrName = this.$store.state.userInfo[0].EmployeeName.toLowerCase().split(
        " "
      );
      // return arrName[0]
      // console.log(arrName)
      let arr = [];
      for (let i = 0; i < arrName.length; i++) {
        arr.push(arrName[i].charAt(0).toUpperCase() + arrName[i].slice(1));
        // console.log(arr)
      }
      return arr[0];
    },
    imageUrl() {
      return `http://10.168.64.31:3001/ftp/employee_pictures/0${this.userInfo[0].EmployeeCode}.jpg`;
      // if (this.$store.state.userInfo.Gender == "F") {
      //   return `img/female.png`;
      // } else if (this.$store.state.userInfo.Gender == "M") {
      //   return `img/male.png`;
      // } else {
      //   return `img/default.png`;
      // }
    },
  },
  methods: {
    logout() {
      this.$store.commit("CHANGE_USER_INFO", "")
      this.$store.commit('CHANGE_LEADER_INFO', '')
      this.$router.push("/login");
    },
  },
};
</script>
