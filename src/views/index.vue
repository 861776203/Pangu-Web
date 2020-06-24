<template>
    <div>
        <div v-for="(item,index) in tableList" :key="index" class="table_box" :style="{'left': item.x+'px', 'top': item.y+'px'}" @dblclick="showInfo(item)">
            <div class="table_name" @mousedown="moveStart($event,item)" @mouseup="moveEnd">{{ item.table_name }}</div>
            <SortableList v-model="item.info" axis="y" lock-axis="y" @sort-end="onSortEnd($event, item)">
                <SortableItem v-for="(item2,index2) in item.info" :key="index2" :index="index2" :item="item2" />
            </SortableList>
        </div>
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
        this.$api.get('tables/info', {
            params: {
                name: 'node_demo'
            }
        }).then(res => {
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
        onSortEnd(e, item) {
            console.log(e, item)
            // this.$api.get('tables/change_tablesort', {
            //     params: {
            //         table_name: item.table_name

            //     }
            // })
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/scss/index';
</style>
