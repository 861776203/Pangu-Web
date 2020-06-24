import {
    api
} from '@/api'

const state = {
    banner: [],
    count: 6
}

const getters = {
    bannerCount: state => {
        return state.banner.length
    },
    count: state => {
        return state.count
    } 
}

const actions = {
    getBanner({
        commit
    }) {
        api.get('banner/list', {
            params: {
                categoryid: 1
            }
        }).then(res => {
            commit('setBanner', res.data.banner)
        })
    },
    addCount({
        commit
    }) {
        commit('addCount', state)
    }
}

const mutations = {
    setBanner(state, banner) {
        state.banner = banner
    },
    removeLast(state) {
        state.banner.splice(state.banner.length - 1, 1)
    },
    addCount(state) {
        state.count += 1
        console.log(state.count)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}