<script setup lang="ts">

export interface Props {
  width?: number
  height?: number
  src?: string
}

const props = withDefaults(defineProps<Props>(), {
    width: 320,
    height: 240,
    // https://tools.woolyss.com/html5-audio-video-tester/
    src: 'https://woolyss.com/f/vp9-vorbis-spring.webm'
})

</script>

<style scoped>
.wb {
  word-break: break-all;
}
</style>

<template>
  <code class="wb">&lt;source src="{{ props.src }}"&gt;</code>
  <video :width="width" :height="height" autoplay loop muted>
    <source :src="src" type="video/webm" />
    Video not supported.
  </video>
</template>
