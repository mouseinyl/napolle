<template>
  <div>
    <banner_white />
    <div class="row">
      <div class="col m6 l6">
        <div class="col m12 l10 offset-l1 empuje-t25">
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
      <!-- <div >
        <div class="red poder_absoluto">
          <div class="poder_relativo pos_circulo">
            <div class="col m6 l4 marron circulo offset-l4 offset-m3 valign-wrapper center">
              <p class="col s12 white-text mano_negra">Ñapolle</p>
            </div>
          </div>
      </div>-->
      <div class="col m6 l6 empuje-t5">
        <div class="col m10 l8 offset-m1 offset-l2 login">
          <div class="col m6 l4 marron circulo offset-l4 offset-m3 valign-wrapper center">
            <p class="col s12 white-text mano_negra">Ñapolle</p>
          </div>
          <div class="col m12 l12 empuje-t5">
            <div class="col m6 l6">
              <i class="poder_relativo icon_input_reg material-icons marron_text">account_circle</i>
              <input type="text" class="imput" />
            </div>
            <div class="col m6 l6">
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
          <div class="col s12 empuje-t5 red">
            <a href class="col s8 offset-s2 btn marron white-text alegreya">registrarse</a>
            <router-link
              to="/registro"
              class="col s6 offset-s1 center marron_text alegreya right empuje-t5"
            >Iniciar sesion</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="cou">
      <Footer />
    </div>
  </div>
</template>
 

<script>
import Banner_white from "@/components/Banner_white.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Registro",
  components: {
    Banner_white,
    Footer
  }
};
</script>
<style scoped>
.empuje-t25 {
  margin-top: 25%;
}
.empuje-t5 {
  margin-top: 10%;
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
  margin-top: 20px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 0px black;
}
.circulo p {
  font-size: 150%;
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
  top: 50px;
  left: -25px;
}
.icon_input_reg {
  padding: 0px;
  margin: 0px;
  top: 18px;
  left: 42px;
}
input[type="text"]:focus {
  border-bottom: 1px solid #6b4015 !important;
  -webkit-box-shadow: 0 1px 0 0 #6b4015;
  box-shadow: 0 1px 0 0 #6b4015 !important;
}

.login {
  background: whitesmoke;
}
</style>