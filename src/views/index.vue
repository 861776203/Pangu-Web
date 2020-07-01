<template>
    <div>
        <div v-for="(item,index) in tableList" :key="index" class="table_box" :style="{'left': item.x+'px', 'top': item.y+'px'}">
            <div class="table_name" @mousedown="moveStart($event,item)" @mouseup="moveEnd" @dblclick="showInfo(item)">{{ item.name }}</div>
            <SortableList v-model="item.table_list" axis="y" lock-axis="y" @input="onChange(index)">
                <SortableItem v-for="(item2,index2) in item.table_list" :key="index2" :index="index2" :item="item2" />
            </SortableList>
        </div>
        <TableDialog />
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableList: []
        }
    },
    created() {
        this.$api.get('tables/info').then(res => {
            this.tableList = res.data
        })
    },
    methods: {
        moveStart(e, item) {
            document.onmousemove = (event => {
                item.x = event.clientX - e.layerX
                item.y = event.clientY - e.layerY
                if (item.x < 0) {
                    item.x = 0
                }
                if (item.y < 40) {
                    item.y = 40
                }
            })
        },
        moveEnd() {
            document.onmousemove = null
            this.$store.dispatch('index/setTableList', this.tableList)
        },
        showInfo(item) {
            console.log(item)
        },
        onChange(index) {
            this.$api.post('tables/move_column', {
                table_name: this.tableList[index].name,
                table_list: JSON.stringify(this.tableList[index].table_list)
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/scss/index';
</style>
