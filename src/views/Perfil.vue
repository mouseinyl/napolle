<template>
  <div>
    <div class="hide-on-small-only">
      <the-banner :color="'banner_marron'" :scroll="false" />
      <div class="row hide-on-small-only">
        <div class="col l12 m12">
          <div class="col l7 m10 offset-l2 offset-m1 smoke margin-t5 alegreya marron_text">
            <div class="col l3 m4 margin-t5">
              <div class="col l10 m10 offset-m1 offset-l1">
                <img src="../assets/avatar_boy.svg" alt srcset />
              </div>
            </div>
            <div class="col l8 m8 margin-t5 center">
              <div class="col s12">
                <p class="col s4">Nombre:</p>
                <p class="col s4 border-b">{{ user_info.name }}</p>
              </div>
              <div class="col s12">
                <p class="col s4">Apellido:</p>
                <p class="col s4 border-b">{{ user_info.last }}</p>
              </div>
            </div>

            <div class="col s12 margin-t5">
              <div class="col s8 offset-s1 center">
                <div class="col s12">
                  <p class="col s2">
                    <i class="material-icons">account_circle</i>
                  </p>
                  <p class="col s6 border-b">{{ user_info.email }}</p>
                </div>
                <!-- <div class="col s12">
                  <p class="col s2">
                    <i class="material-icons">vpn_key</i>
                  </p>
                  <p class="col s6 border-b">{{ info_user.clave }}</p>
                </div> -->
              </div>
              <!-- <div class="col s3 center">
                <div class="col s6">
                  <p class="col s12">Balance</p>
                  <p class="col s12">{{ info_user.balance }}</p>
                </div>
              </div> -->
            </div>

            <div class="col s12 margin-t5">
              <div class="col s4 offset-s4">
                <router-link to="/" class="col s12 btn marron">Volver</router-link>
              </div>
            </div>

            <!--  -->
            <div class="col m12 l12">
              <div class="col pos-cir ">
                <CirculoVue/>
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
      <div class="class row">
        <div class="col s12 margin-t20">
          <div class="col s4">
            <div class="circulo marron">
              <img src="../assets/avatar_boy.svg" alt srcset />
            </div>
          </div>
          <div class="col s8 margin-t5 alegreya">
            <div class="col s12 marron_text">
              <div class="col s10 offset-s1 center border-b">{{ user_info.name }}</div>
            </div>
            <div class="col s12 marron_text margin-t5">
              <div class="col s10 offset-s1 center border-b">{{user_info.last }}</div>
            </div>
          </div>
          <div class="col s12 margin-t15">
            <div class="col s12 alegreya marron_text">
              <div class="col s10 offset-s1 center border-b">{{ user_info.email }}</div>
            </div>
            <!-- <div class="col s12 alegreya marron_text margin-t15">
              <div class="col s10 offset-s1 center border-b">{{ info_user.clave }}</div>
            </div> -->
          </div>
          <div class="col s12 marron_text">
            <!-- <div
              class="col s6 offset-s3 alegreya t-x-large margin-t10"
            >Balance: {{info_user.balance}}</div> -->
          </div>
          <div class="col s12">
            <div class="col s12 margin-t10 alegreya">
              <router-link to="/" class="col s8 btn offset-s2 marron">Regresar</router-link>
            </div>
          </div>
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
import { mapState } from 'vuex';
import CirculoVue from '../components/log_info/Circulo.vue';

export default {
  name: "Perfil",
  components: {
    TheBanner,
    TheFooter,
    TheNavigationBar,
    CirculoVue
  },
  data() {
    return {
    }
  },
  computed:{
    ...mapState("databaseM",["user_info"])
  }
};
</script>
<style scoped>
.border-b {
  border-bottom: 2px solid #6b4015;
}
.pos-cir{
  margin-bottom:-4em;
  margin-left:-3em ;
}
</style
>>
