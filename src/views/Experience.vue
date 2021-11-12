<template>
    <div class="row">
        <div class="col-xxl-4">
            <img
                alt="mvtthew-mountain-2"
                class="img-fluid"
                src="/assets/mountain2.png"
            >
            <p class="mb-0 small">
                Cool mountain again
            </p>
        </div>
        <div class="col-xxl-8 ps-5">
            <h1>
                Commercial Experience
            </h1>
            <h5 class="text-fancy mb-5">
                In total <span class="text-heading text-primary">{{ totalHumanized }}</span>
            </h5>

            <experience-timeline />
        </div>
    </div>
</template>

<script>
import ExperienceTimeline from '@/components/ExperienceTimeline'
import moment from 'moment'
import experienceItems from '@/models/experienceItems'
import { jobLength } from '@/utils/jobLength'

export default {
    name: 'Experience',
    components: { ExperienceTimeline },
    data () {
        return {
            total: null
        }
    },
    computed: {
        totalHumanized () {
            return `${this.total.years()} year and ${this.total.months()} months`
        }
    },
    created () {
        this.total = moment.duration()
        experienceItems.forEach(item => {
            this.total.add(jobLength(item.jobFrom, item.jobTo))
        })
    }
}
</script>
