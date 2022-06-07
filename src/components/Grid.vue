<template>
  <div v-if="store.data.length > 0">
		<div class="table-grid-cabecera">
			<p>Nombre</p>
			<p>Horario</p>
			<p>Accion</p>
		</div>
		<div v-for="dt in store.data" :key="dt.id" class="table-grid-contenido">
			<p class="table-grid-nombre">{{dt.name}}</p>
      <p class="table-grid-horario">de {{dt.timeFrom}} a {{dt.timeTo}}</p>
			<button class="btn-borrar" @click="store.removeItems(dt)">
				<span class="material-icons">delete</span>
			</button>
		</div>
  </div>
</template>
<script>
import '../assets/grid.css'
import { store } from '../store/store'
export default {
  data() {
    return{
      store
    }
  }
}
</script>