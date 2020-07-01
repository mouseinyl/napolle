<template>
  <div class="row">
    <!--  -->
    <div class="col l12">
      <div class>
        <h5 class="alegreya marron_text center">Para amanates del cafe</h5>
        <div class="col m10 l8 offset-l2 offset-m1">
          <div class="col s3 conten_img">
            <div class="col s12 circulo">
              <img class="col s12" src="@/assets/select.svg" alt />
            </div>
            <h6 class="col s12 alegreya marron_text label_text center">Amplio catalogo</h6>
          </div>

          <div class="col s3 conten_img">
            <div class="col s12 circulo">
              <img class="col s12" src="@/assets/boy_pay.svg" alt />
            </div>
            <h6 class="col s12 alegreya marron_text label_text center">Amplio catalogo</h6>
          </div>

          <div class="col s3 conten_img">
            <div class="col s12 circulo">
              <img class="col s12" src="@/assets/spee_process.svg" alt />
            </div>
            <h6 class="col s12 alegreya marron_text label_text center">Amplio catalogo</h6>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="col s12 margin_top cubito">
      <!--  -->
      <div class="col m10 l8 offset-l2 offset-m1 margin_top_10">
        <h5 class="alegreya white-text center">Para amanates de la lectura</h5>

        <div class="col s3 conten_img">
          <div class="col s12 circulo">
            <img class="col s11" src="@/assets/girl_from_armario.svg" alt />
          </div>
          <h6 class="col s12 alegreya white-text label_text center">Bookshelves</h6>
        </div>

        <div class="col s3 conten_img">
          <div class="col s12 circulo">
            <img class="col s11 offset-s1" src="@/assets/boy_reading.svg" alt />
          </div>
          <h6 class="col s12 alegreya white-text label_text center">Amplio catalogo</h6>
        </div>

        <div class="col s3 conten_img">
          <div class="col s12 circulo">
            <img class="col s12" src="@/assets/boy_take_coffe.svg" alt />
          </div>
          <h6 class="col s12 alegreya white-text label_text center">Amplio catalogo</h6>
        </div>
      </div>
    </div>

    <!--  -->
  </div>
</template>
<script>
export default {
  name: "bloque_2"
};
</script>

<style scoped>
.cubito {
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg class='' viewBox='0 0 246.5 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath class='DnjQGA' d='M0,30.5V88H246.5V0Z' fill='%23523110' /%3E%3C/svg%3E");
  background-size: cover;
}

.contenido {
  transform: rotate(1.72deg);
}
.circulo {
  background: whitesmoke;
  border-radius: 50%;
}
.conten_img {
  margin-top: 5%;
  margin-left: 5% !important;
}
.margin_top {
  margin-top: 5%;
}
.margin_top_10 {
  margin-top: 15%;
  margin-bottom: 8%;
}
@media only screen and (min-width: 600px) and (max-width: 992px) {
}
</style>
