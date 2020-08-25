<template>
    <div>
        <h5 class="col s12 marron_text margin-t5 mano_negra" :id="label">{{label}}</h5>
        <div class="col s12 white margin-t10 center valign-wrapper alegreya marron_text producto" v-for="(item,index) in productos" :key="item.id">
            <div class="col s1" @click="disminuir(index,productos)">-</div>
            <div class="col s1">
                <div class="relative circulo_0 marron white-text">
                <div class="relative t">{{ item.cantidad }}</div>
                </div>
            </div>
            <div class="col s2">
                <img :src="getimg(item.img)" alt srcset />
            </div>
            <div class="col s4">{{ item.name }}</div>
            <div class="col s1" @click="aumentar(index,productos)">+</div>
            <div class="col s3">$ {{ item.precio }}</div>
        </div>
    </div>
</template>

<script>
 import {produ_funcion} from "@/mixin/productos-fuccion.js"
    export default {
        name:"thecategorymobile",
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
        methods:{},
    }
</script>

<style lang="scss" scoped>
.circulo_0 {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    margin-left: 0px;
    left: 1em;
    top: -1em;
}
.t {
  top: -2px;
}
.relative {
  position: relative;
}
</style>