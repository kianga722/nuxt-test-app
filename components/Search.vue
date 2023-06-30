<script setup>
    const loading = useLoading()
    const hasSearched = useHasSearched()
    const searchInput = useSearchInput()
    const searchTerm = useSearchTerm()
    const results = useResults()

    async function handleSubmit(term) {
        // Display loading
        loading.value = true
   
        try {
            // Fetch results
            const { data } = await useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)

            console.log("response data", data)

            // Set search term
            searchTerm.value = term

            // Set results
            if (data.value && data.value["meals"]) {
                results.value = data.value["meals"]
            } else {
                results.value = []
            }
        } catch (err) {
            console.log(err)
        }

        // Remove loading
        loading.value = false
        // Remember we have done first search already
        if (!hasSearched.value) {
            hasSearched.value = true
        }
        // Clear search input
        searchInput.value = ""
    }
</script>

<template>
    <SearchForm 
        v-model="searchInput"
        :handleSubmit="handleSubmit"
        placeholder="Enter a term like Beef"
    />

    <Loader 
        v-if="loading" 
    />

    <NoResults 
        v-if="!loading && hasSearched && results.length === 0"
        :searchTerm="searchTerm"
    />

    <Results 
        v-if="!loading && hasSearched && results.length"
        :searchTerm="searchTerm"
        :results="results"
    />
</template>