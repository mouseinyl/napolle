<template>
  <div>
    <div class="navbar-fixed hide-on-small-only">
      <nav v-scroll="handleScroll" class="transparent mano_negra" :class="[color_state]">
        <div class="nav-wrappe">
          <a href="#" class="brand-logo p">Ñapole</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down mg-8-left">
            <li class="principal_tag">
              <router-link class="principal_tag" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="principal_tag" to="/Productos">Productos</router-link>
            </li>
            <li>
              <router-link class="principal_tag" to="/Cart">Cart</router-link>
            </li>
            <li class="dro_menu center">
              <i class="material-icons">account_circle</i>
              <div class="conten">
                <ul class="chill alegreya">
                  <router-link class="item tra" to="/Login" v-if="signin == false">Iniciar secion</router-link>
                  <router-link class="item" to="/Perfil" v-if="signin == true">perfil</router-link>
                  <p class="item" v-if="signin == true" @click="outsign">cerrar cesion</p>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="hide-on-large-only">
        <i class="material-icons bu marron-text" tabindex="1">menu</i>
        <div class="space">
          <div class="row">
            <div
              class="col s10 offset-m1 mano_negra marron_text t-xx-large center margin-t10 linea"
            >Ñapolle</div>
            <ul class="col s12 margin-t10 center">
              <li class="col s12 margin-t5 principal_tag" tabindex="2">
                <router-link class="col s12 marron_text mano_negra" to="/">Home</router-link>
              </li>
              <li class="col s12 margin-t5 principal_tag" tabindex="2">
                <router-link class="col s12 marron_text mano_negra" to="/Productos">Productos</router-link>
              </li>

              <li class="col s12 margin-t5 principal_tag" tabindex="2">
                <router-link class="col s12 marron_text mano_negra" to="/Cart">Cart</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.directive("scroll", {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
});
import { mapState, mapMutations } from "vuex";
import { auth } from "@/store/firebase.js";
export default {
  name: "TheBanner",
  props: {
    color: {
      type: String,
      requiere: true,
    },
    scroll: {
      default: false,
      type: Boolean,
      requiere: true,
    },
  },
  data() {
    return {
      color_state: this.color, // color inicializado
    };
  },
  computed: {
    ...mapState(["signin"]),
  },
  methods: {
    ...mapMutations(["onsignin"]),
    outsign() {
      //   // [START signout]
      auth.signOut();
      this.onsignin(false);
    },
    handleScroll: function (evt, el) {
      if (this.scroll) {
        //se ejecuta si se permite la ejecucion de funcion
        if (window.scrollY > 800) {
          this.color_state = "banner_marron";
        } else {
          this.color_state = "banner_white";
        }
      } else {
        //se ejecuta color proporcionado si el proms scroll es false
        this.color_state = this.color;
      }
    },
  },
};
</script>

<style scoped>
nav {
  box-shadow: none !important;
}
.bu {
  position: fixed;
  z-index: 10;
  top: 10px;
  left: 10px;
}
.space {
  position: fixed;
  width: 40%;
  background: white;
  height: 100%;
  z-index: 20;
  transition: 1s;
  left: -40%;
}
.bu:focus + .space {
  display: block;
  left: 0%;
  transition: 1s;
}
.linea {
  border-bottom: 2px solid #523110;
}

.banner_marron * {
  color: #523110 !important;
}
.banner_white * {
  color: white;
}
.p {
  margin-left: 30px;
}
.mg-5-top {
  margin-top: 5%;
}
.mg-8-left {
  margin-right: 8%;
}

.chill li {
  float: none;
}
.conten {
  position: absolute;
}
.chill {
  position: relative;
  background: white;
  color: chocolate !important;
  width: 150px;
  right: 40%;
}

ul.chill .item {
  display: none;
  color: #523110;
  border-bottom: 1px #523110 solid;
}
.dro_menu:hover .chill .item {
  display: block;
  background: white;
}
.principal_tag {
  font-size: 20px;
}
.dro_menu i {
  margin-top: 4px;
  margin-left: 5px;
}
</style>
