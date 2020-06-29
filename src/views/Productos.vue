<template>
  <div class>
    <Banner_white />
    <div class="row">
      <div class="col m12 l12">
        <div class="col m2 l2 margin-t5">
          <div class="col s12 marron_text mano_negra texto_label center">Menu</div>
          <div class="col s12 marron"></div>
          <div class="col s12 center margin-t5 mano_negra">
            <a
              href="#napolle's coffees"
              class="col s12 margin-t5 marron_text text_category"
            >napolle's coffees</a>
            <a
              href="#napolle's bakery"
              class="col s12 margin-t5 marron_text text_category"
            >napolle's bakery</a>
            <a
              href="#napolle's bebidas"
              class="col s12 margin-t5 marron_text text_category"
            >napolle's bebidas</a>
          </div>
        </div>
        <!-- -->
        <div class="col m10 l10 margin-t3">
          <div class="col l12 box_productos">
            <h6
              class="col s11 offset-s1 margin-t5 mano_negra marron_text"
              id="napolle's coffees"
            >napolle's coffees</h6>
            <div class="col m4 l3 margin-t3" v-for="(item,index) in items" :key="item.id">
              <div class="col l10 offset-l1 smoke">
                <div class="cantidad white-text mano_negra center" v-if="item.cantidad > 0">
                  <div class="marron">{{item.cantidad}}</div>
                </div>
                <div class="col s12">
                  <div class="col s6 offset-s3 margin-t3 circulo white">
                    <img src="../assets/svg/005-coffee.svg" alt srcset />
                  </div>
                </div>
                <div class="col s12 margin-b5">
                  <p class="col s12 center marron_text alegreya">{{item.nombre}}</p>
                  <div class="col s4 mano_negra marron_text center" @click="aumentar(index)">+</div>
                  <div class="col s4 center marron_text alegreya">{{item.price }} c/u</div>
                  <div class="col s4 mano_negra marron_text center" @click="disminuir(index)">-</div>
                </div>
              </div>
            </div>
            <!--  -->
            <h6
              class="col s11 offset-s1 margin-t5 mano_negra marron_text"
              id="napolle's bakery"
            >apolle's Bakery</h6>
            <div class="col m4 l3 margin-t3" v-for="(item,index) in items" :key="item.id">
              <div class="col l10 offset-l1 smoke">
                <div class="cantidad white-text mano_negra center" v-if="item.cantidad > 0">
                  <div class="marron">{{item.cantidad}}</div>
                </div>
                <div class="col s12">
                  <div class="col s6 offset-s3 margin-t3 circulo white">
                    <img src="../assets/svg/005-coffee.svg" alt srcset />
                  </div>
                </div>
                <div class="col s12 margin-b5">
                  <p class="col s12 center marron_text alegreya">{{item.nombre}}</p>
                  <div class="col s4 mano_negra marron_text center" @click="aumentar(index)">+</div>
                  <div class="col s4 center marron_text alegreya">{{item.price }} c/u</div>
                  <div class="col s4 mano_negra marron_text center" @click="disminuir(index)">-</div>
                </div>
              </div>
            </div>
            <!--  -->

            <h6
              class="col s11 offset-s1 margin-t5 mano_negra marron_text"
              id="napolle's bebidas"
            >napolle's Bebidas</h6>
            <div class="col m4 l3 margin-t3" v-for="(item,index) in items" :key="item.id">
              <div class="col l10 offset-l1 smoke">
                <div class="cantidad white-text mano_negra center" v-if="item.cantidad > 0">
                  <div class="marron">{{item.cantidad}}</div>
                </div>
                <div class="col s12">
                  <div class="col s6 offset-s3 margin-t3 circulo white">
                    <img src="../assets/svg/005-coffee.svg" alt srcset />
                  </div>
                </div>
                <div class="col s12 margin-b5">
                  <p class="col s12 center marron_text alegreya">{{item.nombre}}</p>
                  <div class="col s4 mano_negra marron_text center" @click="aumentar(index)">+</div>
                  <div class="col s4 center marron_text alegreya">{{item.price }} c/u</div>
                  <div class="col s4 mano_negra marron_text center" @click="disminuir(index)">-</div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->

          <!--  -->
        </div>
      </div>
    </div>
    <div class="cou">
      <Footer />
    </div>
  </div>
</template>
<script>
import Banner_white from "@/components/Banner_white.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Productos",
  components: {
    Banner_white,
    Footer
  },

  data() {
    return {
      items: [
        { nombre: "chocolate", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "capuchino", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "chocolate", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "capuchino", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "chocolate", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "capuchino", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "chocolate", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "capuchino", cantidad: 0, price: 350, existencia: 3 },
        { nombre: "cafe frio de ayer", cantidad: 0, price: 350, existencia: 3 },
        {
          nombre: "pan duro que añuga y mata",
          cantidad: 0,
          price: 350,
          existencia: 3
        }
      ],
      c: 0
    };
  },
  methods: {
    // valor_por_cantidad(index) {
    //   var pan = this.items[index];
    //   return pan.cantidad * pan.price;
    // },
    aumentar(index) {
      var pan = this.items[index];
      console.log(pan);
      if (pan.cantidad < pan.existencia) {
        return pan.cantidad++;
      }
    },
    disminuir(index) {
      var pan = this.items[index];
      console.log(pan);
      if (pan.cantidad > 0) {
        return pan.cantidad--;
      }
    }
  },
  computed: {
    // cant_item() {
    //   var contador = 0;
    //   for (var x = 0; x < this.items.length; x++) {
    //     contador = contador + this.items[x].cantidad;
    //   }
    //   return contador;
    // }
    // cant_total() {
    //   var contador = 0;
    //   for (var x = 0; x < this.items.length; x++) {
    //     contador = contador + this.items[x].cantidad * this.items[x].price;
    //   }
    //   return contador;
    // }
  }
};
</script>

<style  scoped>
.margin-b5 {
  margin-bottom: 5%;
}
.margin-t3 {
  margin-top: 3%;
}
.margin-t5 {
  margin-top: 5%;
}

.texto_label {
  font-size: 250%;
}
h6 {
  font-size: x-large;
}
.text_category {
  font-size: larger;
}
.text_category:hover {
  border-bottom: 1px solid #643c14;
  transition: 0.5s;
  width: 70%;
}

/* .circulo {
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 123.3 0 595.2 595.2' id='Layer_1' version='1.1' viewBox='123.3 0 595.2 595.2' x='0px' xml:space='preserve' y='0px' %3E%3Cg id='change1_1'%3E%3Ccircle cx='420.9' cy='297.6' fill='%23fff' r='297.6' /%3E%3C/g%3E%3C/svg%3E");
} */
.circulo {
  border-radius: 50%;
  height: auto;
  padding: 4%;
}
.shadow {
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
}
.box_productos {
  height: 500px;
  overflow-y: scroll;
  cursor: pointer;
}
.box_productos::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.box_productos::-webkit-scrollbar-track {
  background: #f1f1f100;
}

/* Handle */
.box_productos::-webkit-scrollbar-thumb {
  background: #643c14;
}

/* Handle on hover */
.box_productos::-webkit-scrollbar-thumb:hover {
  background: #6b4015;
}
.cantidad {
  position: relative;

  width: auto;
  height: auto;
  float: right;
}
.cantidad div {
  position: absolute;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  top: -4px;
  right: -20px;
}
</style>