<template>
 <div>
    <HeaderMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from './components/header.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
  }
}
</script>
