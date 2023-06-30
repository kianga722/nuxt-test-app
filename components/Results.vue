<script setup>
    defineProps([
        "searchTerm",
        "results"
    ])

    import { computed } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useBookmarksStore } from '~/stores/bookmarks'

    const bookmarksStore = useBookmarksStore()
    const { bookmarksList } = storeToRefs(bookmarksStore)

    // Use to check for already bookmarked recipes
    const bookmarksIds = computed(() => {
        return bookmarksList.value.map(item => item.id)
    })
</script>

<template>
    <section>
        <h2>Results for <span>"{{searchTerm}}"</span></h2>

        <ul class="results">
            <ResultCard
                v-for="result in results" 
                :key="result.idMeal"
                :id="result.idMeal"
                :image="result.strMealThumb"
                :bookmark="bookmarksIds.indexOf(result.idMeal) !== -1"
                :title="result.strMeal"
                :subtitle="'Origin: ' + result.strArea"
            />
        </ul>
    </section>
</template>