<template>
    <div>
        <div class="row">
            <div class="col-lg-4">
                <img
                    alt="mvtthew-mountain-4"
                    class="img-fluid"
                    src="/assets/mountain4.png"
                >
                <p class="mb-0 small">
                    Mountains are cool
                </p>
            </div>
            <div class="col-lg-8">
                <h1>
                    Portfolio
                </h1>
                <p class="mb-0">
                    My few projects and products from couple last years
                </p>
            </div>
        </div>
        <div class="row my-5 pb-5">
            <div class="col-lg-6">
                <portfolio-item
                    v-for="(item, index) in portfolioItemsFirstHalf"
                    :key="'portfolio_' + index"
                    :item="item"
                />
            </div>
            <div class="col-lg-6">
                <portfolio-item
                    v-for="(item, index) in portfolioItemsSecondHalf"
                    :key="'portfolio_' + index"
                    :item="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import portfolioItems from '@/models/portfolioItems'
import PortfolioItem from '@/components/PortfolioItem'

export default {
    name: 'Portfolio',
    components: {
        PortfolioItem
    },
    computed: {
        portfolioItemsFirstHalf () {
            return portfolioItems.filter((_, index) => index % 2 === 0)
        },
        portfolioItemsSecondHalf () {
            return portfolioItems.filter((_, index) => index % 2 === 1)
        }
    }
}
</script>
