<template>
    <div
        class="portfolio-item shadow-lg rounded-3 p-3 mb-4"
    >
        <div class="d-flex align-items-center mb-2">
            <h3 class="mb-0">
                {{ item.name }}
            </h3>
            <div class="ms-2 mt-n1">
                <span
                    v-for="(technology, technologyIndex) in item.technologies"
                    :key="'technology_' + index + technologyIndex"
                    class="badge bg-dark me-1"
                >
                    {{ technology }}
                </span>
            </div>
        </div>
        <p>
            {{ item.description }}
        </p>
        <portfolio-image-slider
            :images="item.images"
            height="350"
        />
    </div>
</template>

<script>
import PortfolioImageSlider from '@/components/PortfolioImageSlider'

export default {
    name: 'PortfolioItem',
    components: { PortfolioImageSlider },
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
