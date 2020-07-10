<template>
  <div class="banner">
    <banner-contenido :color="banner_white" :scroll="true" />
  </div>
</template>




<script>
import BannerContenido from "./BannerContenido.vue";

export default {
  name: "TheBanner",
  components: {
    BannerContenido
  },

  data: function() {
    return {
      initied: false
    };
  }
};
</script>

<style scoped>
</style>
