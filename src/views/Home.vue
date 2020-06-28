<template>
  <div class="home">
    <div class>
      <bloque_1 />
      <bloque_2 />
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from "@/components/Banner.vue";
import bloque_1 from "@/components/block_1.vue";
import bloque_2 from "@/components/block_2.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    banner,
    bloque_1,
    bloque_2,
    Footer
  }
};
</script>
<style scoped>
</style>
