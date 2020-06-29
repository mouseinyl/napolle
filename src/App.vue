<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
.cou {
  position: absolute;
  width: 100%;
  bottom: 0px;
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
