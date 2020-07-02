<template>
  <div class="row">
    <div class="conten">
      <div class="cortina maroon">
        <banner />
        <div class="col s6 eslogan">
          <pre class="mano_negra white-text">
            "Mas de una 
                emocion en 
                    una sola taza"
               </pre>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<style scoped>
.conten {
  background-image: url("../assets/cafe-devocion.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 800px;
}

.cortina {
  background: #523110ab;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.contenido {
  color: white;
}
.eslogan pre {
  transform: translate(35%, 27%);
}
pre {
  font-size: 70px;
}

@media only screen and (min-width: 600px) and (max-width: 992px) {
  .eslogan pre {
    transform: translate(-15%, 27%);
  }
  pre {
    font-size: 70px;
  }
}
</style>



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
  }
};
</script>