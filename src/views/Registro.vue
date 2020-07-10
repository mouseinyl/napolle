<template>
  <div>
    <div class="hide-on-small-only">
      <the-banner :color="'banner_marron'" :scroll="false" />
      <div class="row">
        <div class="col m6 l6">
          <div class="col m10 l10 offset-l2 margin-t25">
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
          <div class="col m10 l7 offset-m1 offset-l3 smoke margin-t10">
            <div class="col s6 offset-s3 circulo_conten">
              <div class="marron circulo valign-wrapper center">
                <p class="col s12 white-text mano_negra t-x-large">Ñapolle</p>
              </div>
            </div>
            <div class="col m12 l12 margin-t5">
              <div class="col l6 m6">
                <i class="poder_relativo icon_input_reg material-icons marron_text">account_circle</i>
                <input type="text" class="imput" />
              </div>
              <div class="col l6 m6">
                <i class="poder_relativo icon_input_reg material-icons marron_text">account_circle</i>
                <input type="text" class="imput" />
              </div>
              <div class="col m10 l8 offset-l2 offset-m1">
                <i class="poder_relativo icon_input material-icons marron_text">account_circle</i>
                <input type="text" class="imput" />
              </div>
              <div class="col l8 offset-l2 m10 offset-m1">
                <i class="poder_relativo icon_input material-icons marron_text">vpn_key</i>
                <input type="text" class="imput" />
              </div>
            </div>
            <div class="col s12 margin-t5">
              <a href class="col s8 offset-s2 btn marron white-text alegreya">Registrarme</a>
              <router-link
                to="/Login"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Iniciar</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="cou">
        <the-footer />
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
            <div class="col s6">
              <i class="poder_relativo icon_input_reg material-icons marron_text">account_circle</i>
              <input type="text" class="imput" />
            </div>
            <div class="col s6">
              <i class="poder_relativo icon_input_reg material-icons marron_text">account_circle</i>
              <input type="text" class="imput" />
            </div>
            <div class="col s12">
              <div class="col s10 offset-s1 offset-m1">
                <i class="poder_relativo icon_input material-icons marron_text">account_circle</i>
                <input type="text" class="imput" />
              </div>
              <div class="col s10 offset-s1">
                <i class="poder_relativo icon_input material-icons marron_text">vpn_key</i>
                <input type="text" class="imput" />
              </div>
            </div>
            <div class="col s12 margin-t10">
              <a href class="col s8 offset-s2 btn marron white-text alegreya">Registrarme</a>
              <router-link
                to="/Login"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Iniciar</router-link>
            </div>
          </div>
        </div>
      </div>
      <the-navigation-bar />
    </div>
  </div>
</template>

<script>
import TheNavigationBar from "../components/Compartidos/TheNavigationBar.vue";
import TheFooter from "../components/Compartidos/TheFooter.vue";
import TheBanner from "../components/Compartidos/Banner/TheBanner.vue";
export default {
  name: "Registro",
  components: {
    TheBanner,
    TheFooter,
    TheNavigationBar
  }
};
</script>
<style scoped>
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
.poder_absoluto {
  position: absolute;
  width: 30%;
  height: auto;
  z-index: 0;
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
.icon_input_reg {
  padding: 0px;
  margin: 0px;
  top: 18px;
  left: 38%;
}
input[type="text"]:focus {
  border-bottom: 1px solid #6b4015 !important;
  -webkit-box-shadow: 0 1px 0 0 #6b4015;
  box-shadow: 0 1px 0 0 #6b4015 !important;
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
