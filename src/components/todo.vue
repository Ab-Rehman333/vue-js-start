<template>
    <div class="todo_list">
        <ul>
            <li v-for="todo in todosArray" :key="todo.id">{{ todo.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FetchhingTodo',

    data() {
        return {
            todosArray: []
        }
    },
    mounted() {
        this.getTodos();
    },
    methods: {
        async getTodos() {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                let todos = await response.json();
                this.todosArray = todos;

            } catch (error) {
                console.error('Error fetching data:', error);
            }


        }
    }
}

</script>