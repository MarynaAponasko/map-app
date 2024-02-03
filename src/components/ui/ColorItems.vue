<template>
  <li>
    <button
      class="w-[36px] h-[36px] border-black border-[1px]"
      :style="{ backgroundColor: color }"
      @click="setColor"
    ></button>
  </li>
</template>

<script>
export default {
  props: ['color'],

  methods: {
    setColor() {
      this.$store.dispatch('changeCurrectColor', this.color)
    }
  }
}
</script>
