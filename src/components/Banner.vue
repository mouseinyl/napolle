<template>
  <div class="banner">
    <div class="navbar-fixed">
      <nav v-scroll="handleScroll" class="transparent banner_white mano_negra">
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
                  <router-link class="item tra" to="/Login" v-if="initied == false">Iniciar secion</router-link>
                  <router-link class="item" to="/Perfil" v-if="initied == true">perfil</router-link>
                  <router-link class="item" to="/" v-if="initied == true">cerrar cesion</router-link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>




<script>
// addEventListener("scroll", function(event) {
//   var scroll = this.scrollY;
//   console.log(scroll);
//   console.log;

//   if (scroll > 790) {
//     document
//       .getElementsByTagName("nav")[0]
//       .classList.replace("banner_white", "banner_marron");
//   } else {
//     document
//       .getElementsByTagName("nav")[0]
//       .classList.replace("banner_marron", "banner_white");
//   }
// });
import Vue from "vue";
Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

export default {
  name: "banner",

  data: function() {
    return {
      initied: false
    };
  },
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 800) {
        el.classList.replace("banner_white", "banner_marron");
      } else {
        el.classList.replace("banner_marron", "banner_white");
      }
    }
  }
};
</script>

<style scoped>
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
nav {
  box-shadow: none !important;
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
