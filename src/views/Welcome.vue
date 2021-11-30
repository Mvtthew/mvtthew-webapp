<template>
    <div class="welcome-box position-relative">
        <div
            class="welcome-box-text w-100 h-100 d-lg-block d-flex justify-content-center flex-column"
        >
            <p class="display-5 text-fancy">
                Mateusz Ożóg
            </p>
            <h3 class="mb-0">
                Vue.js / Frontend software developer
            </h3>
            <p class="small">
                also a 3rd year IT student
            </p>
        </div>
        <p class="position-absolute bottom-0 small end-0 mb-0 text-muted">
            mountains by Harryarts
        </p>
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
