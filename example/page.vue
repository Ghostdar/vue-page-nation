<template>
    <page-nation 
        :totalItems="totalItems" 
        :defaultCurrPage="page" 
        :perPage="perPage" 
        :totalPages="totalPages"
        @changeEvent="changeEvent"
    >
    </page-nation>
</template>
<script>
    export default {
        name: 'page',
        data() {
            return {
                totalItems: 20,
                page: 1,
                perPage: 4,
                totalPages: 5,
            }
        },
        methods: {
            changeEvent(){
                console.log('this change ...')
            }
        },
    }
</script>
<style scoped>

</style>
