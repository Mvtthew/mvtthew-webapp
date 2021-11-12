<template>
  <router-link
    :class="{'h6 text-primary': active}"
    :to="href"
    class="side-menu-item my-3"
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
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
