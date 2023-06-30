<script setup>
    defineProps([
        'id',
        'image', 
        'title', 
        'subtitle',
        'bookmark'
    ])

    import { useBookmarksStore } from '~/stores/bookmarks'

    const bookmarksStore = useBookmarksStore()
    const { addBookmark, removeBookmark } = bookmarksStore
</script>

<template>
    <li>
        <img :src="image" />

        <Button
            v-if="bookmark"
            text="&#11088;"
            :handleClick="() => removeBookmark(id)"
        />

        <Button
            v-else
            text="Bookmark!"
            :handleClick="() => addBookmark({id, image, title, subtitle})"
        />

        <p class='title'>{{title}}</p>

        <p class='subtitle'>{{subtitle}}</p>
    </li>
</template>