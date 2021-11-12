<template>
    <div class="timeline-item position-relative">
        <div class="timeline-border position-absolute h-75 border-start border-dark" />
        <div class="d-flex w-100">
            <div class="dot bg-dark shadow me-3 rounded-circle" />
            <div class="content w-100 p-1">
                <div class="row">
                    <div class="col-8 d-flex">
                        <h5 class="mb-0 me-1">
                            {{ item.title }}
                        </h5>
                        <p>
                            <span v-if="item.where">
                                at
                            </span>
                            {{ item.where }}
                        </p>
                    </div>
                    <div class="col-4">
                        <p class="mb-0">
                            {{ item.jobFrom }} - {{ item.jobTo || 'now' }}
                        </p>
                        <p class="small">
                            ({{ length }})
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        <span
                            v-for="(tag, index) in item.tags"
                            :key="'tag_' + index"
                            class="badge bg-dark d-inline-block me-1"
                        >
                            {{ tag }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { jobLength } from '@/utils/jobLength'

export default {
    name: 'ExperienceTimelineItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        right: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        length () {
            return jobLength(this.item.jobFrom, this.item.jobTo).humanize()
        }
    }
}
</script>

<style lang="scss" scoped>
.timeline-item {
    margin-bottom: 20px;

    .dot {
        min-width: 32px;
        height: 32px;
    }

    .timeline-border {
        left: 14.5px;
        top: 35px;
    }
}
</style>
