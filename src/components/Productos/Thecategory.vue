<template>
    <div>
        <h6 class="col s11 offset-s1 margin-t5 mano_negra marron_text" id="napolle's coffees">{{label}}</h6>
        <div class="col m4 l3 margin-t3" v-for="(item, index) in productos" :key="item.id">
            <div class="col l10 offset-l1 smoke">
                <div class="cantidad white-text mano_negra center" v-if="item.cantidad > 0">
                    <div class="marron">{{ item.cantidad }}</div>
                </div>
                <div class="col s12 ">
                    <div class="col circulo white offset-s3 margin-t3 ">
                        <img :src="getimg(item.img)" alt srcset />
                    </div>
                </div>
                <div class="col s12 margin-b8 margin-t5 " v>
                    <p class="col s12 center marron_text alegreya">{{ item.name }}</p>
                    <div class="col s2  mano_negra marron_text center" @click="aumentar(index,productos)">+</div>
                    <div class="col s8  center marron_text alegreya">{{ item.precio }} c/u</div>
                    <div class="col s2  mano_negra marron_text center" @click="disminuir(index,productos)" v-if="item.cantidad > 0">-</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {produ_funcion} from "@/mixin/productos-fuccion.js"
    export default {
        name:"Thecategory",
        mixins:[produ_funcion],
        props:{
            product_list:{
                type:Object,
                requiere:true
            }
        },
        data() {
            return {
                productos:this.product_list.list_producto,
                label:this.product_list.name_producto
            }
        },
        methods:{
           
        },
        
    }
</script>

<style lang="scss" scoped>
@import "@/styles/Var-global.scss";
.circulo {
  background: $color-principal;
  width: 80px;
  height:80px;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
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
@media #{$small-and-down} {
  .circulo {
    width: 100px;
    height: 100px;
  }
}
.margin-b8{
    
    margin-bottom: 8%;
}
</style>