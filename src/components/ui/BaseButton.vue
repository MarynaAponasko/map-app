<template>
  <button
    @click="setCetegory"
    class="py-[8px] px-[15px] rounded-[12px] shadow-mainShadow bg-cyan-50"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    setCetegory(e) {
      this.$store.dispatch('changeCurrentCategory', e.target.name)
    }
  }
}
</script>
