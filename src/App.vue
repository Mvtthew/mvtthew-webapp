<template>
    <div
        :class="{'dark-mode': isDarkMode}"
        class="app"
    >
        <theme-mode-switcher />
        <side-menu />
        <div class="app-box">
            <div class="position-relative w-100 h-100">
                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
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
    max-width: calc(1100px + 30%);
    margin: 0 auto;
    height: 100vh;
    overflow: auto;
    padding: 8% 15% 8% 15%;
    box-shadow: 0 0 10px #fff inset;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
