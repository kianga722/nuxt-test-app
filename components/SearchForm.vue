<script setup>
    defineProps([
        "modelValue",
        "handleSubmit",
        "placeholder"
    ])

    defineEmits([
        "update:modelValue"
    ])
</script>

<template>
    <form @submit.prevent="handleSubmit(modelValue)">
        <input 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" 
            :placeholder="placeholder"
            required
        />
        
        <button type="submit">Submit</button>
    </form>
</template>