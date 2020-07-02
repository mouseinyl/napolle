<template>
  <div>
    <div class="hide-on-small-only">
      <div class="row">
        <Banner_white />
        <div class="col s12 valign-wrapper">
          <div class="col s6">
            <!-- contenedor raiz -->
            <div class="conten_2">
              <!-- correcion de posicion -->
              <div class="conten_3">
                <!-- contenido -->
                <div class="col s12 conten_producto">
                  <div
                    class="col s10 offset-s1 smoke center valign-wrapper alegreya marron_text producto"
                    v-for="(item, index) of selecion"
                    :key="item.id"
                  >
                    <div class="col s1">
                      <div class="img_product">
                        <img src="@/assets/svg/001-coffee-cup-1.svg" class alt srcset />
                      </div>
                    </div>
                    <div class="col s4">{{ item.nombre }}</div>
                    <div class="col s1 menu_productos_boton" @click="aumentar(index)">+</div>
                    <div class="col s1">{{ item.cantidad }}</div>
                    <div class="col s1 menu_productos_boton" @click="disminuir(index)">-</div>
                    <div class="col s2">$ {{ item.price }} c/u</div>
                    <div class="col s2">$ {{ valor_por_cantidad(index) }}</div>
                    <div class="col s1" @click="eliminar(index)">
                      <i class="material-icons">delete</i>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
            </div>
            <div class="conten_0">
              <span class="col marron barrar vertical _1">
                <div class="mano_negra menu_label marron_text">Resumen</div>
              </span>
              <span class="col marron barrar horrizontal _2"></span>
              <span class="col marron barrar vertical _3"></span>
              <span class="col marron barrar horrizontal boton _4"></span>
            </div>
          </div>
          <!--  -->
          <div class="col s6 alegreya">
            <div class="col s12 center">
              <div class="col s6 offset-s3">
                <img src="@/assets/girl_add_car.svg" alt srcset />
              </div>
            </div>
            <div class="col s12 center marron_text conten">Cantidad de productos :{{ cant_item }}</div>
            <div class="col s12 center marron_text conten">Total a pagar : {{ cant_total }}</div>
            <div class="col s8 offset-s2 conten valign-wrapper">
              <a class="col s5 btn marron alegreya waves-effect waves-light">Cancelar</a>
              <a class="col s5 btn marron alegreya waves-effect waves-light">Pagar</a>
            </div>
          </div>
        </div>
      </div>
      <div class="cou">
        <Footer />
      </div>
    </div>
    <div class="hide-on-med-and-up">
      <div class="row smoke caja">
        <div class="col s12 marron_text margin-t5">
          <div class="col s12 t-xx-large mano_negra">Ñapolle</div>
        </div>
        <div class="col s6 offset-s3 margin-t10">
          <div class="col s12 center">
            <div class="b white-text t-xx-large mano_negra">.</div>
            <div class="a marron white-text t-xx-large mano_negra">
              <div class="c">Resumen</div>
            </div>
          </div>
        </div>
        <div class="col s12 margin-t5" v-if="cant_total > 0">
          <router-link to="/Cart" class="col s6 offset-s3 btn mano_negra marron">Completar pago</router-link>
        </div>
      </div>
      <navigation_bar />
    </div>
  </div>
</template>
<script>
import Banner_white from "@/components/Banner_white.vue";
import Footer from "@/components/Footer.vue";
import Navigation_bar from "../components/Navigation_bar.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Cart",
  components: {
    Banner_white,
    Footer,
    Navigation_bar
  },
  data() {
    return {
      selecion: []
    };
  },
  computed: {
    ...mapState(["items"]),
    cant_item() {
      var contador = 0;
      for (var x = 0; x < this.items.length; x++) {
        contador = contador + this.items[x].cantidad;
      }
      return contador;
    },
    cant_total() {
      var contador = 0;
      for (var x = 0; x < this.items.length; x++) {
        contador = contador + this.items[x].cantidad * this.items[x].price;
      }
      return contador;
    }
  },

  methods: {
    ...mapMutations(["aumentar", "disminuir", "eliminar", "valor_por_cantidad"])
  }
};
</script>
<style scoped>
/* mobile css */
.caja {
  height: 740px;
}
.pos-banner {
  top: -105px;
}
.relative {
  position: relative;
}
.a {
  transform: rotate(-3deg);
  margin-top: -48px;
  background: #523110;
  margin-left: 6px;
  width: 94%;
}
.b {
  transform: rotate(5deg);
  background-color: #643d16;
}
.c {
  transform: rotate(3deg);
}
.circulo_0 {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 0px;
  left: 7px;
  top: -5px;
}
.t {
  top: -2px;
}
</style>

<style scoped>
.menu_label {
  margin-top: 5px;
  margin-left: 10px !important;
  font-size: xx-large;
}
.conten_0 {
  position: relative;
  z-index: 10;
}
.conten_2 {
  position: absolute;
  z-index: 11;
  width: 43%;
}
.conten_3 {
  position: relative;
  top: 90px;
  background: blue;
}
.conten {
  margin-top: 3%;
  /* margin-left: 2% !important; */
}
.barrar {
  position: relative;
}

.horrizontal {
  width: 90%;
  height: 2px;
}
.vertical {
  width: 2px;
  height: 570px;
  padding: 0px;
}
._2 {
  top: 40px;
}
._3 {
  top: 40px;
  height: 500px;
}
._4 {
  bottom: -39px;
}

/*  */
.conten_producto {
  height: 400px;
  overflow-y: scroll;
}
.conten_producto::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.conten_producto::-webkit-scrollbar-track {
  background: #f1f1f100;
}

/* Handle */
.conten_producto::-webkit-scrollbar-thumb {
  background: #643c14;
}

/* Handle on hover */
.conten_producto::-webkit-scrollbar-thumb:hover {
  background: #6b4015;
}
.producto {
  margin: 1%;
  font-size: medium;
}
.img_product {
  border-radius: 50%;
  background: whitesmoke;
  width: 35px;
  height: 35px;
}
.img_product img {
  margin: 0px 0px 0px 3px;
  padding: 7px 2px 5px 0px;
}

.menu_productos_boton {
  cursor: pointer;
}
.btn:hover {
  background: #6b4015;
}
</style>
