<template>
  <div @loadstart="new_list">
    <div class="hide-on-small-only">
      <the-banner-white />
      <div class="row">
        <div class="col s12">
          <div class="col m12 l6">
            <ul class="relative">
              <li class="relative barra_1 marron">
                <!-- contenido -->
                <div v-if="selecion.length > 0">
                  <div class="col s12 conten_producto margin-t10">
                    <div
                      class="col m12 l10 offset-l1 smoke center valign-wrapper alegreya marron_text producto"
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
                </div>

                <div class="col s12 margin-t10 center" v-else>
                  <p class="col s7 offset-s3 marron_text mano_negra margin-t10 t-medium">
                    Aun no has selecionado nada,
                    <br />! Por que no mira nuestra lista de
                    productos !
                  </p>
                  <div class="col s12 margin-t5">
                    <router-link
                      to="/Productos"
                      class="col s6 offset-s3 btn mano_negra marron"
                    >Lista de productos</router-link>
                  </div>
                </div>
              </li>
              <li class="marron absolute barra_2">
                <h4 class="col mano_negra marron_text offset-s1">Resumen</h4>
              </li>
              <li class="relative barra_4 marron">2</li>
              <li class="relative barra_3 marron">33</li>
            </ul>
          </div>

          <div class="col m12 l6 alegreya margin-t5">
            <div class="col m6 l12 center">
              <div class="col m10 l6 offset-l3">
                <img src="@/assets/girl_add_car.svg" alt srcset />
              </div>
            </div>
            <div class="col m6 l12 margin-t10">
              <div class="col s12 center marron_text">Cantidad de productos : {{ cant_item }}</div>
              <div class="col s12 center marron_text">Total a pagar : {{ cant_total }}</div>
              <div class="col s8 offset-s2 conten valign-wrapper margin-t5">
                <a class="col s5 btn marron alegreya waves-effect waves-light">Cancelar</a>
                <a class="col s5 btn marron alegreya waves-effect waves-light">Pagar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cou">
        <the-footer />
      </div>
    </div>

    <div class="absolute smoke hide-on-med-and-up">
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
        <div v-if="selecion.length > 0">
          <div class="col s10 offset-s1 conten_producto margin-t5">
            <div
              class="col s12 white margin-t10 center valign-wrapper alegreya marron_text"
              v-for="(item, index) in selecion"
              :key="item.id"
            >
              <div class="col s1" @click="disminuir(index)">-</div>
              <div class="col s1">
                <div class="relative circulo_0 marron white-text">
                  <div class="relative t">{{ item.cantidad }}</div>
                </div>
              </div>
              <div class="col s2">
                <img src="../assets/svg/001-coffee-cup-1.svg" alt srcset />
              </div>
              <div class="col s4">{{ item.nombre }}</div>
              <div class="col s1" @click="aumentar(index)">+</div>
              <div class="col s3">$ {{ item.price }}</div>
            </div>
          </div>

          <div class="col s12 margin-t10">
            <div class="col s12 center marron_text alegreya">
              <div class="col s6 marron_text offset-s1">Cantidad de productos :</div>
              <div class="col s3 white marron_text">{{ cant_item }}</div>
              <div class="col s6 marron_text offset-s1 margin-t5">Total a pagar :</div>
              <div class="col s3 white marron_text margin-t5">{{ cant_total }}</div>
            </div>
          </div>
        </div>
        <div class="col s12 margin-t10 center" v-else>
          <p class="col s7 offset-s3 marron_text mano_negra margin-t10 t-medium">
            Aun no has selecionado nada,
            <br />! Por que no mira nuestra lista de
            productos !
          </p>
          <div class="col s12 margin-t5">
            <router-link
              to="/Productos"
              class="col s6 offset-s3 btn mano_negra marron"
            >Lista de productos</router-link>
          </div>
        </div>
        <div class="col s12 margin-t5" v-if="cant_total > 0">
          <router-link to="/Productos" class="col s4 offset-s4 btn mano_negra marron">Cancelar</router-link>
          <router-link
            to="/Cart"
            class="col s6 offset-s3 btn mano_negra marron margin-t5"
          >Completar pago</router-link>
        </div>
      </div>
      <the-navigation-bar />
    </div>
  </div>
</template>
<script>
import TheBannerWhite from "../components/Compartidos/TheBannerWhite.vue";
import TheFooter from "../components/Compartidos/TheFooter.vue";
import TheNavigationBar from "../components/Compartidos/TheNavigationBar.vue";
import { mapState, mapMutations } from "vuex";
function na(list, elemente) {
  var x = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === elemente) {
      x++;
    }
  }
  if (x === 0) {
    return true;
  } else {
    return false;
  }
}

export default {
  name: "Cart",
  components: {
    TheBannerWhite,
    TheFooter,
    TheNavigationBar
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
    },

    new_list() {
      for (var x = 0; x < this.items.length; x++) {
        if (this.items[x].cantidad > 0) {
          var w = na(this.selecion, this.items[x]);
          if (w) {
            this.selecion.push(this.items[x]);
          }
        }
      }

      return 0;
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
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.barra_1 {
  width: 100%;
  height: 2px;
  top: 7px;
}
.barra_3 {
  width: 100%;
  height: 2px;
  top: 2px;
}
.barra_2 {
  width: 2px;
  height: 600px;
  top: -15px;
}
.barra_4 {
  width: 2px;
  height: 550px;
  left: 100%;
  top: 5px;
}
/*  */
.conten_producto {
  height: 400px;
  overflow-y: scroll;
}
.conten_producto::-webkit-scrollbar {
  width: 5px;
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
@media only screen and (min-width: 600px) and (max-width: 992px) {
  .barra_1 {
    top: 9px;
    width: 100%;
    height: 2px;
  }
  .barra_3 {
    top: 4px;
    width: 100%;
    height: 2px;
  }
  .barra_2 {
    width: 2px;
    height: 350px;
  }
  .barra_4 {
    top: 7px;
    width: 2px;
    height: 300px;
    left: 100%;
  }
  .conten_producto {
    height: 200px;
    overflow-y: scroll;
    margin-top: 7%;
  }
}
@media only screen and (min-width: 100px) and (max-width: 600px) {
  .conten_producto {
    height: 200px;
    overflow-y: scroll;
  }
}
</style>
