<template>
  <div>
    <div class="hide-on-small-only home">
      <div class>
        <bloque_1 />
        <bloque_2 />
        <Footer />
      </div>
    </div>
    <div class="hide-on-med-and-up">
      <div class="row">
        <div class="col s12 smoke caja">
          <div class="col s10 offset-s1 margin-t10 ">
            <div class="col s12  center">
              <img
                src="../assets/local_coffe.png"
                class="circulo"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div
            class="col s12 marron_text center mano_negra t-xx-large margin-t5"
          >
            Ñapolle
          </div>
          <div class="fixed_powed img_2_pos center">
            <div class="col s11 ">
              <img src="../assets/chica_sentada.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Navigation_bar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from "@/components/Banner.vue";
import bloque_1 from "@/components/block_1.vue";
import bloque_2 from "@/components/block_2.vue";
import Footer from "@/components/Footer.vue";
import Navigation_bar from "../components/Navigation_bar.vue";

export default {
  name: "Home",
  components: {
    banner,
    bloque_1,
    bloque_2,
    Footer,
    Navigation_bar,
  },
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
