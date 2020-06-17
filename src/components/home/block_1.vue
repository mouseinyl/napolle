<template>
  <div>
    <div class="contenido">
      <banner />
    </div>
    <img class="img_background" src="@/assets/cafe-devocion.jpg" alt srcset />
    <div class="cortina" :style="color_1"></div>
  </div>
</template>

<style scoped>
.img_background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.cortina {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 150;
  opacity: 0.55;
}
.contenido {
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
}
</style>
<script>
</script>



<script>
import banner from "@/components/Banner.vue";
export default {
  name: "bloque_1",
  components: {
    banner
  },
  data() {
    return {
      color_1: "background:#523110;"
    };
  },
  mounted() {
    $(document).ready(function() {});
  }
};
</script>