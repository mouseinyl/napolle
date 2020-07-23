<template>
  <div>
    <the-banner :color="'banner_marron'" class :scroll="false" />
    <div class="row">
      <div class="col s12">
        <div class="col m6 l5 margin-t15 offset-l1 hide-on-small-only">
          <dibujo />
        </div>
        <div class="col offset-s1 s10 m6 l4 margin-t5 offset-l1 m-margin-t">
          <box :registro="true" />
        </div>
      </div>
    </div>

    <the-navigation-bar />
    <div class="cou">
      <the-footer />
    </div>
  </div>
</template>

<script>
import Box from "../components/log_info/Box.vue";

import TheNavigationBar from "../components/Compartidos/TheNavigationBar.vue";
import TheFooter from "../components/Compartidos/TheFooter.vue";
import TheBanner from "../components/Compartidos/Banner/TheBanner.vue";
import { mapState, mapMutations } from "vuex";
import { auth } from "@/store/firebase.js";
import Dibujo from "../components/log_info/Dibujo.vue";
// import auth from "@/store/auth.js";
export default {
  name: "Registro",
  components: {
    TheBanner,
    TheFooter,
    TheNavigationBar,
    Box,
    Dibujo,
  },
};
</script>
<style scoped lang="scss">
@import "@/styles/Var-global.scss";
@media #{$small-and-down} {
  .m-margin-t {
    margin-top: 20%;
  }
}
</style>
