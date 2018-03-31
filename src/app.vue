<template>
    <div>
        <page></page>
        <page-template></page-template>
    </div>
</template>
<script>
 import page from '../example/page.vue'
 import pageTemplate from '../example/page-template.vue'
    export default {
        name: 'app',
        data() {
            return {

            }
        },
        components: { 
            page , 
            pageTemplate 
        },
        methods: {

        },
    }
</script>
<style scoped>

</style>
