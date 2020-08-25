<template>
  <div>
    <div class="hide-on-small-only">
      <the-banner :color="'banner_marron'" :scroll="false" />
      <div class="row hide-on-small-only">
        <div class="col m12 l12">
          <div class="col m2 l2 margin-t5">
            <div class="col s12 marron_text mano_negra texto_label center">Menu</div>
            <div class="col s12 marron"></div>
            <div class="col s12 center margin-t10 mano_negra">
              <a
                href="#napolle's coffees"
                class="col s12 margin-t10 marron_text text_category"
              >napolle's coffees</a>
              <a
                href="#napolle's bakery"
                class="col s12 margin-t10 marron_text text_category"
              >napolle's bakery</a>
              <a
                href="#napolle's bebidas"
                class="col s12 margin-t10 marron_text text_category"
              >napolle's bebidas</a>
            </div>
            <div class="col l12 m12 margin-t10" v-if="cant_total > 0">
              <button class="col s12 btn marron white-text margin-t10" to="/Cart" v-on:click="list_shop">Pagar</button>
            </div>
          </div>
          <!-- -->
          <div class="col m10 l10 margin-t3">
            <div class="col l12 box_productos" >
              <div v-for="item in productos" :key="item.id">
               <ThecategoryVue :product_list="item"/>
              </div>
              <br>
            </div>
          </div>
        </div>
      </div>
      <div class="cou">
        <the-footer />
      </div>
    </div>

    <div class="absolute smoke hide-on-med-and-up">
      <div class="row">
        <div class="col s12 marron_text margin-t5">
          <div class="col s12 t-xx-large mano_negra">Ñapolle</div>
        </div>
        <div class="col s6 offset-s3 margin-t10">
          <div class="col s12 center">
            <div class="b white-text t-xx-large mano_negra">.</div>
            <div class="a marron white-text t-xx-large mano_negra">
              <div class="c">Menu</div>
            </div>
          </div>
        </div>
        <div class="col s12  conten_producto margin-t5">
          <div class="col s12" v-for="item in productos" :key="item.id">
            <ThecategorymobileVue :product_list="item"/>
          </div>
        </div>
        <div class="col s12 margin-t5" v-if="cant_total > 0" >
          <button  class="col s6 offset-s3 btn mano_negra marron" v-on:click="list_shop">Completar pago</button>
        </div>
      </div>
      <the-navigation-bar />
    </div>
  </div>
</template>
<script>
import TheNavigationBar from "../components/Compartidos/TheNavigationBar.vue";
import TheFooter from "../components/Compartidos/TheFooter.vue";
import TheBanner from "../components/Compartidos/Banner/TheBanner.vue";
import { mapState, mapMutations } from "vuex";

import ThecategoryVue from '../components/Productos/Thecategory.vue';
import ThecategorymobileVue from '../components/Productos/Thecategorymobile.vue';
ThecategorymobileVue

export default {
  name: "Productos",

  components: {
    TheBanner,
    TheFooter,
    TheNavigationBar,
    ThecategoryVue,
    ThecategorymobileVue
  },
  data() {
    return {
      productos:this.$store.state.databaseM.items
    };
  },
  computed:{
    
  },
  methods: {
    list_shop(){
      var tem=[];
      for (var _c of this.productos){
        for(const a of _c.list_producto){
            if(a.cantidad > 0){
              tem.push(a)
            }   
        }
      }
      console.log(tem)
      this.$store.commit("databaseM/cargar_list_temp",tem);
      this.$router.push("/Cart")
    },
   
  },
  computed:{
      cant_total(){
        var contador = 0
      for (var a of this.productos){
        for (var b of a.list_producto){
          contador = b.cantidad + contador
        }
      }
      return contador
    },
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


.conten_producto {
  height: 380px;
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
</style>

<style scoped>
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

</style>
