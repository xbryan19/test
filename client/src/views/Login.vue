<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card
        class="mx-auto elevation-20 pl-3 pr-3"
        style="border-radius: 10px;"
        max-width="660px"
      >
        <v-row>
          <v-col
            cols="5"
            style="background-color:#00897B; border-radius: 10px 0px 0px 10px;border-bottom: 20px solid #00897B;border-top: 20px solid #00897B;"
          >
            <v-row>
              <v-col cols="2"></v-col>
              <v-col>
                <v-img height="157px" width="157px" src="img/MBWA2.png"></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>

            <span class="txt">
              Management By Walking Around is a system which involves team
              leader or section head wandering around, in an unstructured manner
              through the workplace or a specific time, to check his/her members
              or on the status of ongoing work
            </span>
          </v-col>

          <v-col cols="7">
            <v-card-title class="font-weight-bold display-1 mt-3">
              <v-img src="img/MBWA5.png" alt="title"> </v-img>
            </v-card-title>

            <v-card-text class="text--primary mt-5">
              <v-form ma-5>
                <v-text-field
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="user"
                  label="Username"
                  @keyup.enter="onLogin()"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="pass"
                  @keyup.enter="onLogin()"
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn raised dark color="teal" width="120" @click="onLogin()"
                >LOGIN</v-btn
              >
              <!-- <div class="marked">
                <h2>Clicks: {{ counter }}</h2>
              </div>
              <v-btn @click="addOne" :style="buttonStyle">Counter</v-btn> -->
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
</template>

<style scoped>
.txt {
  color: white;
  font-family: "fantasy" !important;
  font-size: 18px;
}
</style>

<script>
export default {
  name: "Login",
  data() {
    return {
      counter: 0,
      user: "",
      pass: "",
      tempInfo: "",
    };
  },
  created() {
    this.user = "";
    this.pass = "";
  },
  computed: {
    count() {
      return this.counter;
    },
  },
  methods: {
    // addOne() {
    //   this.counter++;
    // },
    async onLogin() {
      // const result = await this.$http.post(
      //   this.url + "logincontroller/account",
      //   { user: this.user, password: this.pass }
      // );
      // console.log(result.data);
      //masterAPI
      if (this.user !== "" && this.pass !== "") {
        try {
          const resp = await this.$http({
            method: "get",
            url: `http://adminsql1/api/basicinfo/${this.user}`,
            // url: `http://adminsql1/api/employees/hrd`,
            headers: {
              "Content-Type": "application/json",
              "master-api": "db588403f0a1d3b897442a28724166b4",
            },
          });

          // if (resp.data.length > 0) {
          //   this.$notification.success({
          //     message: `MBWA`,
          //     description: "Successfully Log in",
          //   });
          //   console.log('pasok')

          // }
          //  console.log(resp.data);

          if (resp.data.length > 0) {
            this.$store.commit("CHANGE_USER_INFO", resp.data);
            const response = await this.$http.post(
              `${this.url}logincontroller/getInfo/${this.user}`
            );

            if (response.data.length > 0) {
              this.$store.commit("CHANGE_LEADER_INFO", response.data);
              this.$router.push("/summary");
              this.$notification.success({
                message: `MBWA`,
                description: "Successfully Log in",
              });
            }
          } else {
            this.$notification.error({
              message: `MBWA`,
              description: "Username or Password incorrect!!!",
            });
          }
        } catch (ex) {
          console.log(ex);
        }
      } else {
        this.$notification.error({
          message: `MBWA`,
          description: "Username or Password incorrect!!!",
        });
      }
    },
  },
};
</script>
