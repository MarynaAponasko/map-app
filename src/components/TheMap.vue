<template>
  <div id="map" class="w-100% h-[80vh]"></div>
  <ul class="flex absolute top-[30px] w-[90%] gap-[40px] justify-center">
    <li><base-button name="Polygon">Polygon</base-button></li>
    <li><base-button name="LineString">Line</base-button></li>
    <li><base-button name="Point">Point</base-button></li>
  </ul>

  <div class="absolute bottom-[100px] right-[70px]">
    <button
      class="py-[8px] px-[15px] rounded-[12px] shadow-mainShadow bg-green-400"
      name="download"
      @click="downloadGeoJson"
    >
      Download GeoJson
    </button>
  </div>
</template>

<script>
import { Map } from 'maplibre-gl'

export default {
  data() {
    return {
      map: null,
      centeredCoordiante: null,
      customCoordinates: null,
      type: '',
      style: null,
      geoJsonData: null
    }
  },
  computed: {
    coordinates() {
      return this.$store.getters.coordinates
    },
    colorStyle() {
      return this.$store.getters['currentColor']
    },
    opacityStyle() {
      return this.$store.getters['currentOpacity']
    },
    currentCategory() {
      return this.$store.getters['currentCategory']
    }
  },
  watch: {
    currentCategory() {
      this.customiseMap()
      this.changeMap()
      this.generateGeoJson()
    },
    colorStyle() {
      this.customiseMap()
      this.changeMap()
      this.generateGeoJson()
    },
    opacityStyle() {
      this.customiseMap()
      this.changeMap()
      this.generateGeoJson()
    }
  },
  methods: {
    generateGeoJson() {
      this.geoJsonData = {
        type: 'Feature',
        geometry: {
          type: this.currentCategory,
          coordinates: this.customCoordinates
        }
      }
    },
    downloadGeoJson() {
      if (this.geoJsonData) {
        const jsonString = JSON.stringify(this.geoJsonData, null, 2)
        const blob = new Blob([jsonString], { type: 'application/json' })
        const url = URL.createObjectURL(blob)

        const a = document.createElement('a')
        a.href = url
        a.download = 'data.geojson'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        URL.revokeObjectURL(url)
      }
    },
    customiseMap() {
      const coordinates = this.$store.getters.coordinates
      if (this.currentCategory === 'Polygon') {
        this.centeredCoordiante = [...coordinates[0]]
        this.customCoordinates = [coordinates]
        this.type = 'fill'
        this.style = {
          'fill-color': this.colorStyle,
          'fill-opacity': this.opacityStyle
        }
        return
      } else if (this.currentCategory === 'LineString') {
        this.centeredCoordiante = [...coordinates[0]]
        this.customCoordinates = [[...coordinates[0]], [...coordinates[1]]]
        this.type = 'line'
        this.style = {
          'line-color': this.colorStyle,
          'line-opacity': this.opacityStyle,
          'line-width': 4.5
        }
        return
      } else {
        this.customCoordinates = [...coordinates[0]]
        this.centeredCoordiante = [...coordinates[0]]
        this.type = 'circle'
        this.style = {
          'circle-radius': 20,
          'circle-color': this.colorStyle,
          'circle-opacity': this.opacityStyle
        }
        return
      }
    },
    changeMap() {
      if (this.map) {
        if (this.map.getLayer('maine')) {
          this.map.removeLayer('maine')
          this.map.removeSource('maine')
          this.map.addSource('maine', {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: this.currentCategory,
                coordinates: this.customCoordinates
              }
            }
          })
          this.map.addLayer({
            id: 'maine',
            type: this.type,
            source: 'maine',
            layout: {},
            paint: this.style
          })
        }
      }
    },
    createMap() {
      this.map = new Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/streets/style.json?key=3fWHoSNdSUga7QwMSIV5',
        center: this.centeredCoordiante,
        zoom: 5
      })

      this.map.on('load', () => {
        this.map.addSource('maine', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: this.currentCategory,
              coordinates: this.customCoordinates
            }
          }
        })
        this.map.addLayer({
          id: 'maine',
          type: this.type,
          source: 'maine',
          layout: {},
          paint: this.style
        })
      })
    }
  },

  mounted() {
    this.customiseMap()
    this.createMap()
    this.generateGeoJson()
  }
}
</script>
