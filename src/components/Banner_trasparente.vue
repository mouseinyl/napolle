<template>
  <div>
    <nav class="transparent">
      <div class="nav-wrappe">
        <a href="#" class="brand-logo p">Ñapole</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down mg-8-left">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="badges.html">Productos</a>
          </li>
          <li>
            <a href="badges.html">Card</a>
          </li>
          <li>
            <a href="badges.html" class="mg-5-top">
              <i class="material-icons">account_circle</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "banner_trasparet"
};
</script>

<style  scoped>
.p {
  margin-left: 30px;
}
.mg-5-top {
  margin-top: 5%;
}
.mg-8-left {
  margin-right: 8%;
}
</style>