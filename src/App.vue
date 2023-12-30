<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <NumberCounter :count="1" />
  <CounterNumber />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NumberCounter  from './components/test.vue'
import CounterNumber  from './components/counter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NumberCounter,
    CounterNumber,
  }
}
</script>
