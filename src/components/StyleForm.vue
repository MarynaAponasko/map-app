<template>
  <div class="flex gap-[20px]">
    <div class="w-[65%]">
      <h2 class="text-base mb-[10px]">Choose a color:</h2>
      <ul class="flex gap-[10px] flex-wrap">
        <color-items v-for="color in colors" :key="color" :color="color"></color-items>
      </ul>
    </div>
    <div class="w-[35%]">
      <h2 class="text-base mb-[10px]">Choose an opacity:</h2>
      <range-slider></range-slider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        '#fa766F',
        '#ffffcc',
        '#464748',
        '#41b6c4',
        '#7c98ec',
        '#80b364',
        '#e7c1e3',
        '#253494',
        '#fd8d3c',
        '#f03b20',
        '#3e8381',
        '#bd0026'
      ]
    }
  }
}
</script>
