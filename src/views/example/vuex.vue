<template>
    <div>
        <button type="button" @click="getInfo">获取数据</button>
        <button type="button" @click="removeLast">删除最后一条数据</button>
        <button type="button" @click="getLength">获取数据长度</button>
        <img v-for="(item, index) in banner" :key="index" :src="item.image">
        <button type="button" @click="addcount">添加{{ count }}</button>
        <div v-if="bannerCount">现在你可以切换路由，你会发现，切换回来后，数据还在。</div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            banner: state => state.example.banner,
            count: state => state.example.count
        }),
        ...mapGetters({
            bannerCount: 'example/bannerCount'
        })
    },
    created() {
        console.log(this.$store.state.example.count)
    },
    methods: {
        ...mapActions({
            getInfo: 'example/getBanner'
        }),
        ...mapMutations({
            removeLast: 'example/removeLast'
        }),
        getLength() {
            alert(this.bannerCount)
        },
        ...mapActions({
            addcount: 'example/addCount'
        })
    }
}
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 300px;
}
</style>
