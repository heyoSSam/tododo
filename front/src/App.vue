<template>
  <div>
    <h1>tododo</h1>

    <Suspense>
      <template #default>
        <taskComp/>
      </template>
    </Suspense>

    <inputComp/>
  </div>
</template>

<script>
import taskComp from '@/components/taskComp.vue'
import inputComp from '@/components/inputComp.vue'

export default {
  props:{
    view: Boolean
  },
  components: {
    taskComp,
    inputComp
  },

  setup(){
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

html,body{
  width: 60%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
}
</style>
