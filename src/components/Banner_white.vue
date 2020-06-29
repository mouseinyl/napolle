<template>
  <div class="Bannerwhite">
    <div class="navbar-fixed">
      <nav class="white banner_marron mano_negra">
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
export default {
  name: "Banner_white",
  data() {
    return {
      initied: true
    };
  }
};
</script>





<style scoped >
.banner_marron * {
  color: #523110 !important;
}
/* .banner_white * {
  color: white;
}  */
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


