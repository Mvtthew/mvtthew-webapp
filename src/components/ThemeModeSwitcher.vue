<template>
    <div
        class="position-fixed top-0 end-0 m-xxl-5 m-3 cursor-pointer theme-switcher h2"
        @click="changeDarkMode"
    >
        <i
            v-if="!isDarkMode"
            class="bx bx-sun"
        />
        <i
            v-else
            class="bx bx-moon"
        />
    </div>
</template>

<script>
export default {
    name: 'ThemeModeSwitcher',
    computed: {
        isDarkMode () {
            return this.$store.getters.isDarkMode
        }
    },
    methods: {
        changeDarkMode () {
            this.$store.dispatch('toggleDarkMode')
        }
    }
}
</script>

<style lang="scss" scoped>
.theme-switcher {
  transition: 0.3s all;

  &:hover {
    transform: rotate(10deg);
  }
}
</style>
