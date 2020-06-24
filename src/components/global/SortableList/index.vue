<template>
    <div>
        <slot />
    </div>
</template>

<script>
import { ContainerMixin } from 'vue-slicksort'
export default {
    name: 'SortableList',
    mixins: [ContainerMixin],
    methods: {
    }
}
</script>
