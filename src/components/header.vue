<template>
  <div>
    <header class="header">
      <h1>My App</h1>
      <router-link to="/" class="router-link">Home</router-link>
      <router-link to="/TodoPage" class="router-link">Todos</router-link>
      <router-link to="/albumsPage" class="router-link">Albums</router-link>
      <router-link to="/TwoWayBind" class="router-link">Two Way Binding</router-link>
    </header>
  </div>
</template>

  
<script>
export default {
  name: 'HeaderMenu',
};
</script>
<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.router-link {
  cursor: pointer;
}

.router-link,
.router-link-exact-active {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
</style>
