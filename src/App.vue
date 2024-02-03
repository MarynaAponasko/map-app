<template>
  <section class="container mx-auto px-[20px] py-[50px]">
    <base-card>
      <div>
        <h2 class="font-bold text-lg mb-[15px]">Customize map:</h2>
        <style-form></style-form>
      </div>
    </base-card>
    <base-card class="pb-[60px]"><the-map></the-map> </base-card>
  </section>
</template>

<script>
import TheMap from './components/TheMap.vue'
import StyleForm from './components/StyleForm.vue'
export default {
  components: {
    TheMap,
    StyleForm
  }
}
</script>
