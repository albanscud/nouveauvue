<template>
  <div id="app">
  {{ info }}
</div>
</template>

<script>

new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => (this.info = response))
      console.log(response.data)
  }
})




</script>