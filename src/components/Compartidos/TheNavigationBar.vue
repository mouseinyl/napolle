<template>
  <div class="cou-fixed">
    <div class="row">
      <div class="col s12 smoke bar valign-wrapper marron_text">
        <div class="col s3 center">
          <router-link to="/Information">
            <i class="material-icons marron_text">info</i>
          </router-link>
        </div>
        <div class="col s3 center">
          <router-link to="/">
            <i class="material-icons marron_text">home</i>
          </router-link>
        </div>
        <div class="col s3 center">
          <router-link to="/Productos">
            <img src="../../assets/carrito-de-compras.svg" style="width:25%" />
          </router-link>
        </div>
        <div class="col s3 center">
          <router-link to="/Login">
            <i class="material-icons marron_text">account_circle</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheNavigationBar"
};
</script>
<style scoped>
.bar {
  height: 50px;
}
.cou-fixed {
  position: fixed;
  bottom: 0px;
}
</style>
