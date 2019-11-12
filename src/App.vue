<template>
    <div class="container">
      <FormTeddy id="formTeddy"></FormTeddy>
    </div>
</template>

<script>
import FormTeddy from './components/FormTeddy.vue'

export default {
  name: 'formTeddy',
  components: {
    FormTeddy
  }
}
</script>

<style>
#formTeddy {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
