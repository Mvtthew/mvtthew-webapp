<template>
    <div class="position-relative portfolio-slider rounded-3">
        <button
            v-if="images.length > 1"
            class="btn btn-lg prev-photo position-absolute start-0 top-50 ms-1"
            @click="prev"
        >
            <i class="bx bx-left-arrow" />
        </button>
        <a
            v-for="(image, imageIndex) in images"
            :key="'image_' + imageIndex"
            :class="{'active': activeImage === imageIndex}"
            :href="/portfolio/ + image"
            class="portfolio-photo-box d-block h-100 rounded-3"
            target="_blank"
        >
            <div
                :style="{height: height + 'px', backgroundImage: `url(/portfolio/${image})`}"
                class="portfolio-photo rounded-3 shadow"
            />
        </a>
        <button
            v-if="images.length > 1"
            class="btn btn-lg next-photo position-absolute end-0 top-50 me-1"
            @click="next"
        >
            <i class="bx bx-right-arrow" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'PortfolioImageSlider',
    data () {
        return {
            activeImage: 0
        }
    },
    props: {
        height: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
        next () {
            this.activeImage = (this.activeImage + 1) % this.images.length
        },
        prev () {
            this.activeImage = this.activeImage - 1
            if (this.activeImage < 0) this.activeImage = this.images.length - 1
        }
    }
}
</script>

<style lang="scss" scoped>
.portfolio-slider {
    display: flex;
    width: 100%;

    .btn {
        transform: translateY(-50%);
        background-color: rgba(#fff, 0.2);

        i {
            text-shadow: 0 0 1px white;
        }
    }

    .portfolio-photo-box {
        width: 0;
        cursor: pointer;
        transition: 0.3s width;

        .portfolio-photo {
            background-size: cover;
            background-position: top;
        }

        &.active {
            width: 100%;
        }
    }
}
</style>
