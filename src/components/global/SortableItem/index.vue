<template>
    <div class="table_name_box">
        <div>{{ item.name }}</div>
        <div>{{ item.notes }}</div>
    </div>
</template>

<script>
import { ElementMixin } from 'vue-slicksort'
export default {
    name: 'SortableItem',
    mixins: [ElementMixin],
    props: {
        item: {
            type: null
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.table_name_box {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
}
</style>