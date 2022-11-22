

<template>
  <router-view/>
  
  <tetedepage/>
  <corppageacceuil/>
  <pieddepage/>
     
 </template> 
  

  
 
  
 



<script>
import tetedepage from './components/tetedepage.vue'
import pieddepage from './components/pieddepage.vue'
import corppageacceuil from './components/corppageacceuil.vue'

export default {
  name: 'App',
  components: {
    tetedepage,
    pieddepage,
    corppageacceuil
  }
}





</script>


