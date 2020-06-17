<template>
  <div>
    <div class="navbar-fixed">
      <nav class="transparent">
        <div class="nav-wrappe">
          <a href="#" class="brand-logo p">Ñapole</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down mg-8-left">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/Productos">Productos</router-link>
            </li>
            <li>
              <router-link to="/Cart">Cart</router-link>
            </li>
            <li>
              <i class="material-icons">account_circle</i>
              <div class="chill">
                <ul>
                  <li>hola</li>
                  <li>hola</li>
                  <li>hola</li>
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
  name: "banner",
  data() {
    return {
      initied: true
    };
  }
};
</script>

<style  scoped>
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
.chill {
  position: relative;
  background: blue;
}
.chill ul li {
  margin: 5px;
  background: red;
}
</style>