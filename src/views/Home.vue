<template>
  <div>
    <div class="hide-on-small-only home">
      <div class>
        <the-home-block01 />
        <the-home-block02 />
        <TheFooter />
      </div>
    </div>
    <div class="hide-on-med-and-up">
      <div class="row">
        <div class="col s12 smoke caja">
          <div class="col s10 offset-s1 margin-t10">
            <div class="col s12 center">
              <img src="../assets/local_coffe.png" class="circulo" alt srcset />
            </div>
          </div>
          <div class="col s12 marron_text center mano_negra t-xx-large margin-t5">Ñapolle</div>
          <div class="fixed_powed img_2_pos center">
            <div class="col s11">
              <img src="../assets/chica_sentada.svg" alt />
            </div>
          </div>
        </div>
      </div>
      <the-navigation-bar />
    </div>
  </div>
</template>

<script>
import TheBanner from "../components/Compartidos/TheBanner.vue";
import TheHomeBlock01 from "../components/Home/TheHomeBlock01.vue";
import TheHomeBlock02 from "../components/Home/TheHomeBlock02";
import TheFooter from "../components/Compartidos/TheFooter.vue";
import TheNavigationBar from "../components/Compartidos/TheNavigationBar.vue";
import TheBannerWhite from "../components/Compartidos/TheBannerWhite.vue";
export default {
  name: "Home",
  components: {
    TheBanner,
    TheHomeBlock01,
    TheHomeBlock02,
    TheFooter,
    TheNavigationBar
  }
};
</script>
<style scoped>
.fixed_powed {
  position: fixed;
}

.img_2_pos {
  bottom: 60px;
}
.circulo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
}
.caja {
  height: 800px;
}
.margin-t5 {
  margin-top: 5%;
}
.margin-t10 {
  margin-top: 10%;
}
</style>
