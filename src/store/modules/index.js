
const state = {
    tableList: ''
}

const getters = {}

const actions = {
    setTableList({commit}, data) {
        commit('setTableList', data)
    }
}

const mutations = {
    setTableList(state, data) {
        // 浅拷贝data数据，data数据是引用类型数据，在vuex外修改会报错
        state.tableList = JSON.parse(JSON.stringify(data))
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
