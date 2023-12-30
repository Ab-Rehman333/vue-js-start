<template>
    <div class="practice">
        <h1>{{ count }}</h1>
        <h2>{{ name }}</h2>
        <h2>{{ getProducts() }}</h2>
    </div>
</template>

<script>
export default {
    name: 'NumberCounter ',
    data() {
        return {
            name: 'Abdul Rehman',
        }
    },
    props: {
        count: {
            type: Number,
            required: true,
        },
    },
    methods: {
        getProducts() {
            return 'one'
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>