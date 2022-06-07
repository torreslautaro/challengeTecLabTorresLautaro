<template>
  <div class="form">
    <h4 class="form-title">RESERVAR</h4>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Nombre</span>
        <input type="text" v-model="name">
      </label>
      <label>
        <span>Fecha</span>
        <input type="date" v-model="date">
      </label>
      <label>
        <span>Desde</span>
        <input type="time" v-model="timeFrom">
      </label>
      <label>
        <span>Hasta</span>
        <input type="time" v-model="timeTo">
      </label>
      <button class="btn-guardar" type="submit"> Guardar </button>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
import { store } from '../store/store'
import '../assets/form.css'
export default {
  data() {
    return {
      name: '',
      date: '',
      timeFrom: '',
      timeTo: ''
    }
  },
  methods: {
    handleSubmit() {
      let name = this.name
      let date = this.date
      let timeFrom = this.timeFrom
      let timeTo = this.timeTo
      const newData = {
        id: uuidv4(),
        name,
        dateFrom : date+' '+timeFrom,
        dateTo : date+' '+timeTo,
        timeFrom,
        timeTo
      }
      const newItem = {
        id: newData.id,
        content: name,
        start: newData.dateFrom,
        end: newData.dateTo
      }
      store.setData(newData)
      store.setItems(newItem)
      store.setTimelineItems()
    }
  },
}
</script>