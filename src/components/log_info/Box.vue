<template>
  <div class="row">
    <div class="col s12">
      <div class="col l12 box">
        <div class="col s12 pos-c">
          <circulo />
        </div>
        <div class="col s12 margin-t5">
          <div v-if="registro">
            <div class="col s5">
              <i class="icon-imput material-icons marron_text">account_circle</i>
              <input type="text" class="imput" v-model="name" />
            </div>
            <div class="col s5 offset-s2">
              <i class="icon-imput material-icons marron_text">account_circle</i>
              <input type="text" class="imput" v-model="last" />
            </div>
          </div>
          <div class="col s12">
            <div class="col s10 offset-s1 offset-m1">
              <i class="icon-imput material-icons marron_text">account_circle</i>
              <input type="text" v-model="User" />
            </div>
            <div class="col s10 offset-s1">
              <i class="icon-imput material-icons marron_text">vpn_key</i>
              <input type="text" v-model="Pass" />
            </div>
          </div>
          <div v-if="registro">
            <div class="col s12 margin-t10">
              <button
                class="col s8 offset-s2 btn marron white-text alegreya"
                @click="Registro"
              >Registrarse</button>
              <router-link
                to="/login"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Iniciar sesion</router-link>
            </div>
          </div>
          <div v-else>
            <div class="col s12 margin-t10">
              <button class="col s8 offset-s2 btn marron white-text alegreya" @click="Login">Login</button>
              <router-link
                to="/registro"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Registrarse</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Circulo from "@/components/log_info/Circulo.vue";
import { mapState, mapMutations } from "vuex";
import { auth } from "@/store/firebase.js";

export default {
  name: "Box",
  components: {
    Circulo,
  },
  props: {
    registro: {
      default: false,
      type: Boolean,
      requiere: true,
    },
  },
  // ///////////////////////////////////////////////////////////////////////////////////////
  computed: {},
  data() {
    return {
      User: "",
      Pass: "",
      name: "",
      last: "",

      //
    };
  },

  computed: {
    ...mapState(["signin"]),
  },
  methods: {
    ...mapMutations(["onsignin"]),
    Registro() {
      auth
        .createUserWithEmailAndPassword(this.User, this.Pass)
        .then(function () {
          this.onsignin(true);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
    Login() {
      auth
        .signInWithEmailAndPassword(this.User, this.Pass)
        .then((result) => {
          this.onsignin(true);
          auth.currentUser.sendEmailVerification().then(function () {
            // Email Verification sent!
            // [START_EXCLUDE]
            alert("Email Verification Sent!");
            // [END_EXCLUDE]
            console.log(auth.currentUser);
          });
          console.log(User);
        })
        .catch((err) => {
          // Handle Errors here.
          var errorCode = err.code;
          s;
          var errorMessage = err.message;
          console.log(errorCode, "===", errorMessage);
          if (errorCode == "auth/invalid-email") {
            alert("Correo erroneo");
          } else {
            alert(errorCode, "===", errorMessage);
          }
          // ...
        });
    },
  },
};
</script>

<style lang="scss" scope>
@import "@/styles/Var-global.scss";
.box {
  height: 550px;
  background: whitesmoke;
}
.pos-c {
  margin-top: -10%;
}
.icon-imput {
  position: relative;
  top: 38px;
  left: -30px;
}
input[type="text"]:focus {
  border-bottom: 1px solid $color-principal !important;
  -webkit-box-shadow: 0 1px 0 0 $color-principal;
  box-shadow: 0 1px 0 0 $color-principal !important;
}

@media #{$small-and-down} {
  .box {
    height: auto;
    background: whitesmoke;
  }
  .pos-c {
    margin-top: -20%;
  }
}
</style>