

<template>
  
  <tetedepage/>

  <router-view/>

  <pieddepage/>
     
 </template> 
  

<script>

import tetedepage from './components/tetedepage.vue'
import pieddepage from './components/pieddepage.vue'


export default {
  name: 'App',
  components: {
    tetedepage,
    pieddepage
  },
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script> 
 
  
 






