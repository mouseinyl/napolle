<template>
  <div class="circulo valign-wrapper">
    <div class="col s12">
      <p class="col s12 white-text mano_negra center t-large">Ñapolle</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "circulo",
};
</script>

<style lang="scss">
@import "@/styles/Var-global.scss";
.circulo {
  background: $color-principal;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
}
@media #{$small-and-down} {
  .circulo {
    width: 100px;
    height: 100px;
  }
}
</style>