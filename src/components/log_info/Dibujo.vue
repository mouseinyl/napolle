<template>
  <div class="col s12">
    <div class="col s12">
      <div class="col s7">
        <img src="@/assets/jugito_de_veneno.svg" alt srcset />
      </div>
      <div class="col s5 mano_negra marron_text eslogan_veneno margin-t15">
        <p class="a">Es momento</p>
        <p class="b">de tomar un</p>
        <p class="c">descanzo no ?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dibujo",
};
</script>

<style lang="scss" scoped>
@import "@/styles/Var-global.scss";
.eslogan_veneno p.a {
  margin-left: 5%;
}
.eslogan_veneno p.b {
  margin-left: 20%;
}
.eslogan_veneno p.c {
  margin-left: 30%;
}
.eslogan_veneno {
  font-size: 120%;
}
@media only screen and (min-height: 700px) and (max-height: 1025px) {
  .m-margin-t15 {
    margin-top: 25%;
  }
  .eslogan_veneno p.a {
    margin-left: -10%;
  }
  .eslogan_veneno p.b {
    margin-left: 5%;
  }
  .eslogan_veneno p.c {
    margin-left: 15%;
  }
  .eslogan_veneno {
    font-size: 120%;
  }
}
@media only screen and (min-height: 700px) and (max-height: 810px) {
}
@media only screen and (min-height: 500px) and (max-height: 700px) {
}
</style>