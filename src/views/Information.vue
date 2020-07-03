<template class="">
  <div class="hide-on-med-and-up">
    <div class="absolute smoke">
      <div class="row">
        <div class="col s12">
          <div class="col s6 center offset-s3 margin-t15">
            <div class="circulo_1 marron valign-wrapper">
              <span class="col s12 t-xx-large white-text mano_negra">Ñapolle</span>
            </div>
          </div>
          <div class="col s12 margin-t5">
            <div class="col s12 margin-t15 valign-wrapper">
              <div
                class="col s6 alegreya marron_text t-small"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labor.</div>
              <div class="col s6">
                <div class="col s12">
                  <img src="../assets/girl_from_armario.svg" alt srcset />
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col s12 margin-t15 valign-wrapper">
              <div class="col s6">
                <div class="col s12">
                  <img src="../assets/boy_take_coffe.svg" alt srcset />
                </div>
              </div>
              <div
                class="col s6 alegreya marron_text t-small"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labor.</div>
            </div>
            <!--  -->
            <div class="col s12 margin-t15 valign-wrapper">
              <div
                class="col s6 alegreya marron_text t-small"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labor.</div>
              <div class="col s6">
                <div class="col s6 offset-s3">
                  <img src="../assets/location.svg" alt srcset />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navigation_bar />
  </div>
</template>

<script>
import Navigation_bar from "../components/Navigation_bar.vue";
export default {
  name: "Information",
  components: {
    Navigation_bar
  }
};
</script>

<style scoped>
.circulo_1 {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: auto;
}
.m-auto {
  margin: auto;
}
</style>