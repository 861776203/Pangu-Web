<template>
    <div>
        <el-dialog
            title="新建"
            :visible.sync="showDialog"
            width="70%"
            @close="closeDialog"
        >
            <el-table :data="data">
                <el-table-column prop="column_name" label="表名" />
                <el-table-column prop="type" label="数据类型" />
                <el-table-column prop="notes" label="备注" />
            </el-table>
            <div class="input_box">
                <el-input
                    v-model="columnName"
                    placeholder="请输入表名"
                    clearable
                />
                <el-select v-model="columnType" placeholder="请选择字段类型">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label"
                    />
                </el-select>
                <el-input
                    v-model="table_length"
                    :disabled="disabledInput"
                    placeholder="请输入长度"
                    clearable
                    type="tel"
                />
                <el-input
                    v-model="table_notes"
                    placeholder="请输入备注"
                    clearable
                />
                <el-button type="primary" plain @click="addColumns">确 定</el-button>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="addTables">确 定</el-button>
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
            data: [
                {column_name: 'testname', type: 'varchar(30)', notes: '测试啊'}
            ],
            table_name: 'aaoo',
            table_length: '',
            table_notes: '',
            columnType: '',
            columnName: '',
            disabledInput: false
        }
    },
    computed: {
        showDialog() {
            return this.$store.state.index.showDialog
        }
    },
    watch: {
        columnType(val) {
            if (val === 'int' || val === 'char' || val === 'varchar') {
                this.disabledInput = false
            } else {
                this.disabledInput = true
            }
        }
    },
    methods: {
        closeDialog() {
            this.$store.dispatch('index/setDialog', false)
        },
        addColumns() {
            this.data.push({column_name: this.columnName, type: this.columnType + '(' + this.table_length + ')', notes: this.table_notes})
            this.columnName = ''
            this.columnType = ''
            this.table_length = ''
            this.table_notes = ''
        },
        addTables() {
            this.$api.post('create/createtables', {
                table_name: this.table_name,
                columnList: JSON.stringify(this.data)
            }).then(res => {
                if (res.success) {
                    this.$message.success('创建表成功')
                    this.$parent.getTableInfo()
                    this.$store.dispatch('index/setDialog', false)
                } else {
                    this.$message.error('创建表失败')
                }      
            })
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