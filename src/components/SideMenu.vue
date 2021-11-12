<template>
  <div class="side-menu position-fixed start-0 top-0 ps-4 d-flex flex-column justify-content-center">
    <side-menu-item
      active
      href="/"
      title="Welcome"
    />
    <side-menu-item
      href="/experience"
      title="Experience"
    />
    <side-menu-item
      href="/tech-stack"
      title="Tech stack"
    />
    <side-menu-item
      href="/education"
      title="Education"
    />
  </div>
</template>

<script>
import SideMenuItem from '@/components/SideMenuItem'

export default {
  name: 'SideMenu',
  components: { SideMenuItem }
}
</script>

<style lang="scss" scoped>
.side-menu {
  height: 100vh;
}
</style>
