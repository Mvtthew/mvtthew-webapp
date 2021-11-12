<template>
  <div class="row w-100">
    <div class="col-xxl-7">
      <h1>Tech stack</h1>
      <p class="mb-5">
        My everyday use stack
      </p>

      <div class="row">
        <div class="col-7 h5">
          Tech
        </div>
        <div class="col-5 h5">
          Version /-s
        </div>
      </div>
      <div
        v-for="(item, index) in techStackItems"
        :key="'tech_' + index"
        :class="{'border-bottom': index !== techStackItems.length - 1}"
        class="row"
      >
        <div class="col-7">
          <i
            :class="item.bxlIcon"
            class="bx"
          />
          {{ item.name }}
        </div>
        <div class="col-5">
          {{ item.versions }}
        </div>
      </div>
    </div>
    <div class="col-xxl-5 ps-5">
      <img
        alt="mvtthew-mountain-1"
        class="img-fluid"
        src="/assets/mountain1.png"
      >
      <p class="text-end mb-0 small">
        Cool mountain
      </p>

      <div class="ps-5 pt-5">
        <p>
          Lately I'm learning really <span class="text-heading">cool stuff</span> too:
        </p>

        <ul>
          <li
            v-for="(item, index) in learningStackItems"
            :key="'learning_' + index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import techStackItems from '@/models/techStackItems'
import learningSackItems from '@/models/learningSackItems'

export default {
  name: 'TechStack',
  computed: {
    techStackItems () {
      return techStackItems
    },
    learningStackItems () {
      return learningSackItems
    }
  }
}
</script>
