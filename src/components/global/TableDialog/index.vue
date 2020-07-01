<template>
    <div>
        <el-dialog
            title="新建"
            :visible.sync="showDialog"
            width="70%"
        >
            <el-table :data="data">
                <el-table-column prop="table_name" label="表名" />
                <el-table-column prop="type" label="数据类型" />
                <el-table-column prop="notes" label="备注" />
            </el-table>
            <div class="input_box">
                <el-input
                    placeholder="请输入表名"
                    clearable
                />
                <el-select v-model="columnValue" placeholder="请选择字段类型">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
                <el-input
                    placeholder="请输入长度"
                    clearable
                    type="tel"
                />
                <el-input
                    placeholder="请输入备注"
                    clearable
                />
                <el-button type="primary" plain>确 定</el-button>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="showDialog = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'TableDialog',
    data() {
        return {
            options: [
                {value: 1, label: 'int'},
                {value: 2, label: 'char'},
                {value: 3, label: 'varchar'},
                {value: 4, label: 'double'},
                {value: 5, label: 'date'},
                {value: 6, label: 'timestamp'},
                {value: 7, label: 'datetime'}
            ],
            columnValue: '',
            data: [
                {table_name: 'testname', type: 'varchar(30)', notes: '测试啊'}
            ]
        }
    },
    computed: {
        showDialog() {
            return this.$store.state.index.showDialog
        }
    },
    methods: {
        closeDialog() {
            this.$store.dispatch('index/setDialog', false)
        }
    }
}
</script>

<style lang='scss' scoped>
.input_box {
    display: flex;
    .el-input {
        width: 200px;
        margin-right: 30px;
    }
    .el-select {
        margin-right: 30px;
    }
}
</style>