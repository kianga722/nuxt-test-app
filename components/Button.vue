<script setup>
    defineProps([
        'text',
        'handleClick'
    ])
</script>

<template>
    <button 
        @click="handleClick"
    >{{text}}</button>
</template>