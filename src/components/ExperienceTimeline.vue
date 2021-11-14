<template>
    <div class="timeline shadow-scroll px-2 position-relative">
        <experience-timeline-item
            v-for="(item, index) in experienceItems"
            :key="'experience_' + index"
            :item="item"
            :time-line-border="index < experienceItems.length - 1"
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
    width: 100%;
    max-height: 60vh;
}
</style>
