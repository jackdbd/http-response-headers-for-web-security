<script setup lang="ts">

export interface Props {
  src?: string
}

const props = withDefaults(defineProps<Props>(), {
    src: 'https://www.w3schools.com/images/w3schools_green.jpg'
})

</script>

<style scoped>
.wb {
  word-break: break-all;
}
</style>

<template>
  <code class="wb">&lt;img src="{{ props.src }}"&gt;</code>
  <img :src="src">
</template>
