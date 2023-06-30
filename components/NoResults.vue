<script setup>
    defineProps([
        "searchTerm"
    ])
</script>

<template>
    <p class="no-results">No Results for <span>"{{searchTerm}}"</span></p>
</template>