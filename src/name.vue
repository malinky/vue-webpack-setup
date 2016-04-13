<template>
    <div class="message">{{ msg }} : Value is {{ count }}</div>
    <a href="#" @click.prevent="increment">Increment</a>
</template>

<script>
export default {
    data: function () {
        return {
            msg: 'Hotreload',
            count: 0,
        }
    },
    methods: {
        increment () {
            this.count++;
        }
    }
}
</script>

<style>
    .message {
        color: red;
    }
</style>
