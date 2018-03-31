<template>
    <page-nation :totalItems="totalItems" :defaultCurrPage="page" :perPage="perPage" :totalPages="totalPages"
                    @changeEvent="changeEvent">
        <template slot-scope="data">
            <div class="pageBox">
                <span class="btn_page page_pre" @click="data.prePage"></span>
                <ul class="page_list" v-for="item in data.pageList" :key="item.no">
                    <li :class="{'page_lsit_active' : item.curr }" @click="data.goto(item.no)">{{item.no}}</li>
                    <!-- <li class="page_last">6-10</li> -->
                </ul>
                <span class="btn_page page_next"  @click="data.nextPage"></span>
            </div>
        </template>
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
