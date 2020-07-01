<template>
    <div>
        <div class="header">
            <div @click="save">保存</div>
            <div @click="createTable">新建</div>
        </div>
        <RouterView />
    </div>
</template>

<script>
export default {
    name: 'EmptyLayout',
    methods: {
        save() {
            if (this.$store.state.index.tableList !== '') {
                this.$api.post('tables/updata_coordinate', {
                    list: JSON.stringify(this.$store.state.index.tableList)
                })
            }
        },
        createTable() {
            this.$store.dispatch('index/setDialog', true)
        }
    }
}
</script>
<style lang='scss' scoped>
.header {
    background: rgb(58, 129, 221);
    height: 40px;
    width: 100%;
    line-height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    div {
        color: white;
        cursor: pointer;
        margin-right: 30px;
    }
}
</style>