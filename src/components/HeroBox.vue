<template>
  <div class="hero-box position-relative">
    <div class="hero-box-text w-100 h-100 d-flex flex-column align-items-start justify-content-center">
      <p class="display-5">
        Mateusz Ozog
      </p>
      <h5>
        Vue.js / Front-end developer
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBox'
}
</script>

<style lang="scss" scoped>
.hero-box {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url("/assets/hero-bg.jpeg");

  .hero-box-text {
    padding-bottom: 25%;
  }
}
</style>
