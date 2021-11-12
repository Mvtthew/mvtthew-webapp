<template>
    <router-link
        :class="{'text-heading text-primary': active}"
        :to="href"
        class="side-menu-item my-3 fw-lighter text-fancy"
    >
        — {{ title }}
    </router-link>
</template>

<script>
export default {
    name: 'SideMenuItem',
    props: {
        title: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        }
    },
    computed: {
        active () {
            return this.$route.path === this.href
        }

    }
}
</script>
