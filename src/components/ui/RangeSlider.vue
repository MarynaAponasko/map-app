<template>
  <div class="container mx-auto text-center">
    <div class="">
      <input
        type="range"
        id="opacityRange"
        v-model="opacityValue"
        min="0"
        max="1"
        step="0.1"
        class="w-full bg-blue-500 border-[1px] border-black"
      />
      <div
        class="mt-4 border-black border-[1px]"
        :style="{ backgroundColor: `rgba(0, 0, 455, ${opacityValue})` }"
      >
        <p class="text-gray-900">{{ opacityValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacityValue: 0.3
    }
  },
  watch: {
    opacityValue() {
      this.$store.dispatch('changeCurrectOpacity', parseFloat(this.opacityValue))
    }
  }
}
</script>
