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

            <div class="ps-2 pt-5">
                <p class="text-fancy">
                    My other achievements <span class="text-heading">(non job related)</span>:
                </p>

                <ul class="small pe-3">
                    <li
                        v-for="(item, index) in otherAchievementsItems"
                        :key="'learning_' + index"
                        class="mb-1"
                    >
                        {{ item.name }}
                        <span class="small me-1 badge bg-dark">
                            {{ item.type }}
                        </span>
                        <a
                            v-if="item.link"
                            :href="item.link"
                            target="_blank"
                        >
                            <i class="bx bx-link-external" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-xxl-8 ps-5">
            <div class="ps-5">
                <h1>
                    Commercial Experience
                </h1>
                <h5 class="text-fancy mb-5">
                    In total <span class="text-heading text-primary">{{ totalHumanized }}</span>
                </h5>

                <experience-timeline />
            </div>
        </div>
    </div>
</template>

<script>
import ExperienceTimeline from '@/components/ExperienceTimeline'
import moment from 'moment'
import experienceItems from '@/models/experienceItems'
import { jobLength } from '@/utils/jobLength'
import otherAchievementsItems from '@/models/otherAchievementsItems'

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
        },
        otherAchievementsItems () {
            return otherAchievementsItems
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
