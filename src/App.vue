<template>
  <div
    :class="{'dark-mode': isDarkMode}"
    class="app"
  >
    <theme-mode-switcher />
    <side-menu />
    <div class="app-box">
      <transition>
        <router-view />
      </transition>
    </div>
    <slide-navigation />
    <social-media-buttons />
  </div>
</template>

<script>
import ThemeModeSwitcher from '@/components/ThemeModeSwitcher'
import SideMenu from '@/components/SideMenu'
import SlideNavigation from '@/components/SlideNavigation'
import SocialMediaButtons from '@/components/SocialMediaButtons'

export default {
  name: 'App',
  components: {
    SocialMediaButtons,
    SlideNavigation,
    SideMenu,
    ThemeModeSwitcher
  },
  computed: {
    isDarkMode () {
      return this.$store.getters.isDarkMode
    }
  }
}
</script>

<style lang="scss" scoped>
.app-box {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;
  overflow: auto;
  padding: 0 15% 8% 15%;
}
</style>
