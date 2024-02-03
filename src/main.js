import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import ColorItems from './components/ui/ColorItems.vue'
import RangeSlider from './components/ui/RangeSlider.vue'

const app = createApp(App)

app.use(store)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('color-items', ColorItems)
app.component('range-slider', RangeSlider)

app.mount('#app')
