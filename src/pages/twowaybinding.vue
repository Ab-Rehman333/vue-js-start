<template>
    <div class="select-binding mt-4">
        <select v-model="selectedFruit">
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="banana">Banana</option>
        </select>
        <p>Selected Fruit: {{ selectedFruit }}</p>
    </div>
    <form >
        <input type="text" v-model="counter">
        <h2>{{ counter }}</h2>
    </form>
</template>
  
<script>
export default {
    name: 'TwoWayBind',
    data() {
        return {
            selectedFruit: 'orange',
            counter:0,
        };
    },
};
</script>
  