<template>
  <div class="home">
    <bloque_1 />
  </div>
</template>

<script>
// @ is an alias to /src
import banner from "@/components/Banner.vue";
import bloque_1 from "@/components/home/block_1.vue";

export default {
  name: "Home",
  components: {
    banner,
    bloque_1
  }
};
</script>
