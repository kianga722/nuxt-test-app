import { defineStore } from 'pinia'

export const useBookmarksStore = defineStore('bookmarks', () => {
    const bookmarksList = ref([])

    function addBookmark(meal) {
        bookmarksList.value.push(meal)
    }

    function removeBookmark(id) {
        bookmarksList.value = bookmarksList.value.filter(item => item.id !== id)
    }

    return { bookmarksList, addBookmark, removeBookmark }
})