export const produ_funcion = {
    methods: {
        aumentar(index, list) {
            return list[index].cantidad++
        },
        disminuir(index, list) {
            return list[index].cantidad--
        },
        valor_por_cantidad(index, list) {
            return list[index].cantidad * list[index].precio;
        },
        eliminar(index, list) {
            list.splice(index, 1)
            console.log(list)
        },
        getimg(img) {
            return require('../' + img)
        }
    },
    computed: {
        cant_de_items(list) {
            var contador = 0;
            for (var x = 0; x < list.productos.length; x++) {
                contador = list.productos[x].cantidad + contador
            }
            return contador
        },
        total_a_pagar(list) {
            var contador = 0;
            for (var x = 0; x < list.productos.length; x++) {
                contador = (list.productos[x].cantidad * list.productos[x].precio) + contador
            }
            return contador
        }
    },
}