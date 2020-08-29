<template>
  <div class="row">
    <div class="col s12">
      <div class="col l12 box">
        <div class="col s12 pos-c">
          <circulo />
        </div>
        <div class="col s12 margin-t5">
          <div v-if="registro">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_box</i>
              <input id="name" v-model="name" type="text">
              <label for="name">First Name</label>
               <span class="helper-text red-text" data-error="wrong" data-success="right" v-if="!validate_name">*Campo requerido</span>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">supervised_user_circle</i>
              <input id="last_name" v-model="last" type="text">
              <label for="last_name">Last Name</label>
              <span class="helper-text red-text" data-error="wrong" data-success="right" v-if="!validate_last">*Campo requerido</span>
            </div>
          </div>
          <div class="col s12">
              <div class="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input id="email" v-model="User" type="text">
                <label for="email">Email</label>
                <span class="helper-text" data-error="wrong" data-success="right" v-if="!validate_email && User !=''">Email no valido</span>
              </div>
               <div class="input-field col s12 ">
                <i class="material-icons prefix">vpn_key</i>
                <input id="password" v-model="Pass" type="password">
                <label for="password">Password</label>
                <span class="helper-text" data-error="wrong" data-success="right" v-if="!validate_pass && Pass != ''">La contraseña debe poseer mas de 6 caracteres</span>
              </div>
          </div>
          <div v-if="registro">
            <div class="col s12 margin-t10">
              <button
                class="col s8 offset-s2 btn marron white-text alegreya"
                @click="Register"
              >Registrarse</button>
              <router-link
                to="/login"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Iniciar sesion</router-link>
            </div>
          </div>
          <div v-else>
            <div class="col s12 margin-t10">
              <button class="col s8 offset-s2 btn marron white-text alegreya" @click="Login">Login</button>
              <router-link
                to="/registro"
                class="col s6 offset-s1 center marron_text alegreya right margin-t5"
              >Registrarse</router-link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Circulo from "@/components/log_info/Circulo.vue";
import { mapState, mapMutations } from "vuex";
import { auth } from "@/store/firebase.js";

export default {
  name: "Box",
  components: {
    Circulo,
  },
  props: {
    registro: {
      default: false,
      type: Boolean,
      requiere: true,
    },
  },
  // ///////////////////////////////////////////////////////////////////////////////////////
  computed: {},
  data() {
    return {
      User: "",
      Pass: "",
      name: "",
      last: "",

      //
    };
  },

  computed: {
    validate_name(){
      if(this.name != ""){
        return true
      }else {
        return false
      }
    },
    validate_last(){
       if(this.name != ""){
        return true
      }else {
        return false
      }
    },
    validate_email(){
      var email = this.User;
      var Regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return Regex.test(email);
    },
    validate_pass(){
       if (this.Pass.length >= 6) {
        return true;
      } else {
        return false;
      }
    },
    validate_infomation(){
      if(this.registro){
        if(this.validate_name && this.validate_last && this.validate_email && this.validate_pass){
          return true

        }else{
          return false
        }
      }else{
        if(this.validate_email && this.validate_pass){
          return true
        }else {
          return false
        }
      }
    } 
  },
  methods: {
   
    Login() {
      console.log(this.validate_infomation)
      if(this.validate_infomation){
        this.$store.dispatch("authM/signin",{user:this.User,pass:this.Pass}).then((snap)=>{
          console.log(snap)
          this.$store.dispatch("databaseM/getinfouser",snap.user).then(()=>{
            this.$store.commit("authM/sign_swich",true)
            this.$router.push('/')
          })
        }).catch((even)=>{
    
            this.$store.commit("generalM/setAlertMessage",{menssage:`<span class='alegreya'>'${even.message}</span>`})
          })
      }else{
        this.$store.commit("generalM/setAlertMessage",{menssage:"<span class='alegreya'>Debes completar la informacion</span>"})
      }
    },
    Register(){
      if(this.validate_infomation){
          this.$store.dispatch("authM/signup",{user:this.User,pass:this.Pass}).then((snap)=>{
            console.log(snap)
            const datos =snap.user
            console.log(datos)
            const info={
              name:this.name,
              last:this.last,
              uid:datos.uid,
              email:datos.email,
              list_cart:datos.list_cart
            }
          this.$store.dispatch("databaseM/setinfouser",info),
          this.$store.commit("databaseM/cargarinfouser",info)
          this.$store.commit("authM/sign_swich",true)
          this.$router.push('/')
          }).catch((even)=>{

            this.$store.commit("generalM/setAlertMessage",{menssage:`<span class='alegreya'>'${even.message}</span>`})
          })
        }else{
        this.$store.commit("generalM/setAlertMessage",{menssage:"<span class='alegreya'>Debes completar la informacion</span>"})
      }
    }
  },
};
</script>

<style lang="scss" scope>
@import "@/styles/Var-global.scss";
.box {
  height: 550px;
  background: whitesmoke;
}
.pos-c {
    margin-top: -15%;
  }

.input-field input[type="text"]:focus + label{
  color:$color-principal !important
}
.input-field input[type="password"]:focus + label{
  color:$color-principal !important
}
.input-field .prefix.active {
  color:$color-principal !important;
  
}

.input-field input[type="text"]:focus  {
  border-bottom: 1px solid $color-principal !important;
  -webkit-box-shadow: 0 1px 0 0 $color-principal;
  box-shadow: 0 1px 0 0 $color-principal !important;
}
.input-field input[type="password"]:focus  {
  border-bottom: 1px solid $color-principal !important;
  -webkit-box-shadow: 0 1px 0 0 $color-principal;
  box-shadow: 0 1px 0 0 $color-principal !important;
}

@media #{$small-and-down} {
  .box {
    height: auto;
    background: whitesmoke;
  }
  .pos-c {
    margin-top: -20%;
  }
 
}
</style>