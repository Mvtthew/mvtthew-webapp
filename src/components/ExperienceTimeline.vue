<template>
    <div class="timeline px-2 position-relative">
        <experience-timeline-item
            v-for="(item, index) in experienceItems"
            :key="'experience_' + index"
            :item="item"
        />
    </div>
</template>

<script>
import ExperienceTimelineItem from '@/components/ExperienceTimelineItem'
import experienceItems from '@/models/experienceItems'

export default {
    name: 'ExperienceTimeline',
    components: { ExperienceTimelineItem },
    computed: {
        experienceItems () {
            return experienceItems
        }
    }
}
</script>

<style lang="scss" scoped>
.timeline {
    overflow: auto;
    width: 100%;
    max-height: 57vh;
    background: linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
    background: linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
    /* Opera doesn't support this in the shorthand */
    background-attachment: local, local, scroll, scroll;
}
</style>
