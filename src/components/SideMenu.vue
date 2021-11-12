<template>
  <div class="side-menu position-fixed start-0 top-0 ps-4 d-flex flex-column justify-content-center">
    <side-menu-item
      v-for="slide in slides"
      :key="slide.id"
      v-bind="slide"
    />
  </div>
</template>

<script>
import SideMenuItem from '@/components/SideMenuItem'
import slides from '@/models/slides'

export default {
  name: 'SideMenu',
  components: { SideMenuItem },
  computed: {
    slides () {
      return slides
    }
  }
}
</script>

<style lang="scss" scoped>
.side-menu {
  height: 100vh;
}
</style>
