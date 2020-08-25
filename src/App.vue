<template>
  <div id="app">
     <div v-if="loadding">
      <the-loading />
    </div>
    <div v-else>
      <router-view />
    </div>
   
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import TheLoading from "./components/Compartidos/TheLoading.vue";
export default {
  name: "app",
  components: {
    TheLoading,
  },
  data() {
    return {
      
    };
  },
  computed:{
      ...mapState("generalM",['loadding']),
      
  },

  methods: {
     carga(){
      this.$store.dispatch("databaseM/getItems")
    }
  },
  mounted() {
   this.carga()
  },
  // methods:{
  //   carga(){
  //     console.log("hola")
  //     // this.$store.dispatch("databaseM")
  //       // console.log(this.$store.commit('generalM/Isloadding'))
  //     }
  // },
  
};
</script>
<style>
@font-face {
  font-family: "mano_negra";
  src: url("./assets/font/WC-Mano-Negra-Bta/WCManoNegraBoldBta.otf")
    format("opentype");
}
@font-face {
  font-family: "alegreya";
  src: url("./assets/font/alegreya/Alegreya-Bold.otf") format("opentype");
}
/* margenes */
.margin-t3 {
  margin-top: 3%;
}
.margin-t5 {
  margin-top: 5%;
}
.margin-t10 {
  margin-top: 10%;
}
.margin-t15 {
  margin-top: 15%;
}
.margin-t20 {
  margin-top: 20%;
}
.margin-t25 {
  margin-top: 25%;
}
.margin-b5 {
  margin-bottom: 5%;
}


/* fin margenes */
.poder-relative {
  position: relative;
}

.cou {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
.t-xx-large {
  font-size: xx-large;
}
.t-x-large {
  font-size: x-large;
}
.t-large {
  font-size: large;
}
.t-medium {
  font-size: medium;
}
.t-small {
  font-size: small;
}
.row {
  margin: 0px;
}
img {
  width: 100%;
  height: inherit;
  text-align: center;
  padding: 0px;
  margin: 0px;
}
.mano_negra {
  font-family: "mano_negra" !important;
}
.alegreya {
  font-family: "alegreya";
}

/* color */
.marron {
  /* background: #523110; */
  background: #613a13;
}
.marron_text {
  /* color: #523110; */
  color: #613a13;
}
.btn:hover {
  background: #6b4015;
}
.btn:focus {
  background: #6b4015;
}
.smoke {
  background: whitesmoke;
}
@media only screen and (min-height: 811px) and (max-height: 910px) {
  .absolute {
    background: whitesmoke;
    width: 100%;
    height: 850px;

    background-size: cover;
  }
}
@media only screen and (min-height: 700px) and (max-height: 810px) {
  .absolute {
    background: whitesmoke;
    width: 100%;
    height: 800px;

    background-size: cover;
  }
}
@media only screen and (min-height: 500px) and (max-height: 700px) {
  .absolute {
    background: whitesmoke;
    width: 100%;
    height: 700px;

    background-size: cover;
  }
}
</style>
