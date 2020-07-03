<template>
  <div>
    <div class="row hide-on-small-only">
      <banner_white />
      <div class>
        <div class="col m6 l6">
          <div class="col m12 l10 offset-l2 margin-t25">
            <div class="col m6 l6">
              <div class="col l12">
                <img src="../assets/jugito_de_veneno.svg" alt srcset />
              </div>
            </div>
            <div class="col m6 l6 mano mano_negra marron_text eslogan_veneno">
              <p class="a">Es momento</p>
              <p class="b">de tomar un</p>
              <p class="c">descanzo no ?</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col m6 l6">
          <div class="col m10 l7 offset-m1 offset-l2 login margin-t10">
            <div class="col s6 offset-s3 circulo_conten">
              <div class="circulo marron valign-wrapper">
                <p class="col s12 white-text mano_negra center t-x-large">Ñapolle</p>
              </div>
            </div>
            <div class="col m12 l12 margin-t10">
              <div class="col m10 l8 offset-l2 offset-m1">
                <i class="poder_relativo icon_input material-icons marron_text">account_circle</i>
                <input type="text" class="imput" />
              </div>
              <div class="col l8 offset-l2 m10 offset-m1 margin-t10">
                <i class="poder_relativo icon_input material-icons marron_text">vpn_key</i>
                <input type="text" class="imput" />
              </div>
            </div>
            <div class="col s12 margin-t10">
              <a href class="col s8 offset-s2 btn marron white-text alegreya">Iniciar</a>
              <router-link
                to="/registro"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Registrarse</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="cou">
        <Footer />
      </div>
    </div>
    <div class="hide-on-med-and-up absolute">
      <div class="row">
        <div class="col s12">
          <div class="col s10 white offset-s1 margin-t25">
            <div class="col s6 offset-s3 circulo_conten">
              <div class="circulo marron valign-wrapper">
                <p class="col s12 white-text mano_negra center t-large">Ñapolle</p>
              </div>
            </div>
            <div class="col s12 margin-t5">
              <div class="col s10 offset-s1 offset-m1">
                <i class="poder_relativo icon_input material-icons marron_text">account_circle</i>
                <input type="text" class="imput" />
              </div>
              <div class="col s10 offset-s1 margin-t10">
                <i class="poder_relativo icon_input material-icons marron_text">vpn_key</i>
                <input type="text" class="imput" />
              </div>
            </div>
            <div class="col s12 margin-t10">
              <a href class="col s8 offset-s2 btn marron white-text alegreya">Iniciar</a>
              <router-link
                to="/registro"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Registrarse</router-link>
            </div>
          </div>
        </div>
      </div>
      <Navigation_bar />
    </div>
  </div>
</template>

<script>
import Banner_white from "@/components/Banner_white.vue";
import Footer from "@/components/Footer.vue";
import Navigation_bar from "../components/Navigation_bar.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Login",
  components: {
    Banner_white,
    Footer,
    Navigation_bar
  },

  computed: {
    ...mapState([])
  },
  methods: {
    ...mapMutations([])
  }
};
</script>
<style scoped>
.w {
  background: blue;
}

.eslogan_veneno {
  font-size: 130%;
  margin-top: 10%;
}
.eslogan_veneno p {
  padding: 0px;
  margin: 0px;
}
.eslogan_veneno p.a {
  margin-left: 5%;
}
.eslogan_veneno p.b {
  margin-left: 20%;
}
.eslogan_veneno p.c {
  margin-left: 30%;
}
.circulo {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: auto;
}

.circulo_conten {
  margin-top: -10%;
}

.poder_relativo {
  position: relative;
}
.icon_input {
  padding: 0px;
  margin: 0px;
  top: 40px;
  left: -25px;
}
input[type="text"]:focus {
  border-bottom: 1px solid #6b4015 !important;
  -webkit-box-shadow: 0 1px 0 0 #6b4015;
  box-shadow: 0 1px 0 0 #6b4015 !important;
}

.login {
  background: whitesmoke;
}

@media only screen and (min-width: 100px) and (max-width: 600px) {
  .circulo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
  }

  .circulo_conten {
    margin-top: -15%;
  }
}
</style>
