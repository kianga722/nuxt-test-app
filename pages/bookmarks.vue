<script setup>
    import { storeToRefs } from 'pinia'
    import { useBookmarksStore } from '~/stores/bookmarks'

    const bookmarksStore = useBookmarksStore()
    const { bookmarksList } = storeToRefs(bookmarksStore)
</script>

<template>
  <main>
    <h1>Bookmarks</h1>

    <ul class="results">
      <ResultCard
        v-for="result in bookmarksList" 
        :key="result.id"
        :id="result.id"
        :image="result.image"
        :bookmark="true"
        :title="result.title"
        :subtitle="'Origin: ' + result.subtitle"
      />
    </ul>
  </main>
</template>