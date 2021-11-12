<template>
  <div class="welcome-box position-relative">
    <div class="welcome-box-text w-100 h-100">
      <p class="display-5">
        Mateusz Ożóg
      </p>
      <h5>
        Vue.js / Front-end developer
      </h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.welcome-box {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url("/assets/mountain-big.jpeg");

  .welcome-box-text {
    padding-bottom: 25%;
  }
}
</style>
