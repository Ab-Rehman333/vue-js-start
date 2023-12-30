<template>
    <div class="counter">
        <button class="increment" @click="increment">+</button>
        <div class="value">{{ count < 0 ? 0 : count }}</div>
                <button class="decrement" @click="decrement">-</button>
        </div>
</template>

<script>
export default {
    name: 'CounterNumber',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
}

</script>