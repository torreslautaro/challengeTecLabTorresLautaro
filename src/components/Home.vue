<template>
<div class="home">
  <Form />
	<TimeLine />
  <Grid />
</div>
</template>
<script>
import '../assets/home.css'
import TimeLine from './TimeLine.vue'
import Form from './Form.vue'
import Grid from './Grid.vue'
export default {
  components: {TimeLine,Form,Grid},
}
</script>
<style>
</style>