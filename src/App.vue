<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",

  data() {
    return {};
  },
  methods: {}
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
.margin-t5 {
  margin-top: 5%;
}
.margin-t10 {
  margin-top: 10%;
}
.margin-t15 {
  margin-top: 15%;
}

/* fin margenes */
.poder-relative {
  position: relative;
}
.absolute {
  position: absolute;
  height: 100%;
}

.cou {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
.t-xx-large {
  font-size: xx-large;
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
.smoke {
  background: whitesmoke;
}
</style>
