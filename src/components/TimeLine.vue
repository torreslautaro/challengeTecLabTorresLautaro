<template>
  <div id="visualization">
		<h4 class="timeline-title">Agenda de Reservas</h4>
    <div class="menu">
        <input @input="handleInputSlider()" style="display:none" id="sliderZoom" type="range" class="range" name="a" min="-1" max="1" step="0.1"
            value="0" />
        <i class="material-icons dp48 buttons-menu" id="fit" @click="handleClickFit()">home</i>
        <i class="material-icons dp48 buttons-menu" id="moveLeft" @click="move(0.2)">arrow_back</i>
        <i class="material-icons dp48 buttons-menu" id="moveRight" @click="move(-0.2)">arrow_forward</i>
    </div>
  </div>
</template>
<script>
import { store } from '../store/store'
import '../assets/timeline.css'
export default {
  data() {
    return {
      store,
      options : {
        orientation: {
          axis: "top",
          item: "top"
        },
        timeAxis: {scale: 'minute', step: 10, },
				editable: { remove: true },
        zoomMax: 8760090,
        zoomMin: 1000000,
				onRemove: (item, callback) => {
					this.store.removeItems(item, callback)
				}
      }
    }
  },
  methods: {
    move(percentage) {
      const range = this.store.timeline.getWindow()
      const interval = range.end - range.start
      this.store.timeline.setWindow({
        start: range.start.valueOf() - interval * percentage,
        end: range.end.valueOf() - interval * percentage
      })
    },
    handleInputSlider(e) {
      const value = this.value
      if (value < 0) {
        const start = moment().year(moment().year() - 100000),
          end = moment().year(moment().year() + 1)
        this.store.timeline.zoomOut(-value)
        if (value === "-1") this.store.timeline.setWindow(start, end)
      } else if (value > 0) {
        const start = moment(), end = moment(moment().utc() + 10)
        this.store.timeline.zoomIn(value)
        if (value === "1") this.store.timeline.setWindow(start, end)
      } else {
        this.store.timeline.fit(this.store.items.getIds())
        this.value = 0
      }
    },
    handleClickFit() {
      document.getElementById("sliderZoom").value = 0
      this.store.timeline.fit(this.store.items.getIds())
    }
  },
  mounted() {
    let container = document.getElementById('visualization')
    this.store.timeline = new vis.Timeline(container, this.store.items, this.options)
    this.store.timeline.moveTo(new Date())
  }
}
</script>