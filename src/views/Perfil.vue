t<template>
  <div>
    <Banner_white />
    <div class="row hide-on-small-only">
      <div class="col l12 m12">
        <div class="col l7 m10 offset-l2 offset-m1 smoke margin-t5 alegreya marron_text">
          <div class="col l3 m4 margin-t5">
            <div class="col l10 m10 offset-m1 offset-l1">
              <img src="../assets/avatar_boy.svg" alt srcset />
            </div>
          </div>
          <div class="col l8 m8 margin-t5 center">
            <div class="col s12">
              <p class="col s4">Nombre:</p>
              <p class="col s4 border-b">{{info_user.name}}</p>
            </div>
            <div class="col s12">
              <p class="col s4">Apellido:</p>
              <p class="col s4 border-b">{{info_user.apellido}}</p>
            </div>
          </div>

          <div class="col s12 margin-t5">
            <div class="col s8 offset-s1 center">
              <div class="col s12">
                <p class="col s2">
                  <i class="material-icons">account_circle</i>
                </p>
                <p class="col s6 border-b">{{info_user.correo}}</p>
              </div>
              <div class="col s12">
                <p class="col s2">
                  <i class="material-icons">vpn_key</i>
                </p>
                <p class="col s6 border-b">{{info_user.clave}}</p>
              </div>
            </div>
            <div class="col s3 center">
              <div class="col s6">
                <p class="col s12">Balance</p>
                <p class="col s12">{{info_user.balance}}</p>
              </div>
            </div>
          </div>

          <div class="col s12 margin-t5">
            <div class="col s4 offset-s4">
              <router-link to="/" class="col s12 btn marron">Volver</router-link>
            </div>
          </div>

          <!--  -->
          <div class="col m12 l12">
            <div class="poder_relativo">
              <div class="poder_absolute">
                <div class="col circulo marron valign-wrapper white-text mano_negra center">
                  <p class="col s12">Ñapolle</p>
                </div>
              </div>
            </div>
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
import Banner_white from "../components/Banner_white.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Perfil",
  components: {
    Banner_white,
    Footer
  },
  data() {
    return {
      info_user: {
        name: "alan",
        apellido: "Hidalgo",
        correo: "rmaaron99@gmail.com",
        clave: "clave",
        balance: 8000
      }
    };
  }
};
</script>
<style scoped>
.margin-t5 {
  margin-top: 5%;
}
.border-b {
  border-bottom: 2px solid #6b4015;
}
.poder_relativo {
  position: relative;
  left: -3%;
  top: -32px;
  height: auto;
  width: inherit;
}
.poder_absolute {
  position: absolute;
  height: auto;
  width: auto;
}
.circulo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: large;
}
</style>>
