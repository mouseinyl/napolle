<template>
  <div class="row footer hide-on-small-only">
    <div class="col s12 white">
      <div class="col s10 offset-s1">
        <div class="col s12 alegreya valign-wrapper marron_text">
          <div class="col s4 center">
            <h6>Calle Duarte #35</h6>
            <h6>Telefono :809-335-2312</h6>
          </div>
          <div class="col s4 center">
            <h6>Ñapolle</h6>
          </div>
          <div class="col s4 center">
            <a href="#" class="icon">
              <img src="@/assets/facebook.svg" alt srcset />
            </a>
            <a href="#" class="icon">
              <img src="@/assets/instagram.svg" alt srcset />
            </a>
            <a href="#" class="icon">
              <img src="@/assets/twitter.svg" alt srcset />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheFooter",
};
</script>
<style scoped>
.icon img {
  width: 20px;
  margin-left: 15px;
}
</style>