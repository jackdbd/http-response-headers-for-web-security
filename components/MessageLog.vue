<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

export interface Props {
  ignoreSameOriginMessages?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  ignoreSameOriginMessages: false
})

const originsMap = new Map<string, string>()

const randomRGB = () => {
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

const messages = ref<HTMLOListElement|null>(null)

function onMessage(event: MessageEvent) {
  if (!messages.value) {
    return
  }

  if (props.ignoreSameOriginMessages &&  (event.origin === window.origin)) {
    // received same-origin message and ignoring it
    return
  }

  
  const li = document.createElement("li")
  const str = JSON.stringify(event.data, null, 2)
  li.innerHTML = `<b>Origin</b><br><code>${event.origin}</code><br><b>Message</b><br><pre class="slidev-code">${str}</pre>`
  li.style.padding = "1em"
  let rgb = originsMap.get(event.origin)
  if (!rgb) {
    rgb = randomRGB()
    originsMap.set(event.origin, rgb)
  }
  // rgb = originsMap.get(event.origin) || randomRGB()
  // li.style.backgroundColor = "#ffd966"
  li.style.backgroundColor = rgb
  li.style.marginLeft = "0"
  messages.value.appendChild(li)
}

onMounted(async () => {
  // console.log("props", props)
  console.log(`attaching listener for 'message' events on 'window'`)
  window.addEventListener('message', onMessage)
})

onUnmounted(() => {
  console.log(`removing listener for 'message' events from 'window'`)
  window.removeEventListener('message', onMessage)
})
</script>

<style scoped>
.message-log {
  max-height: max(15em, 45vh);
  overflow: auto;
}
</style>

<template>
  <p v-if="props.ignoreSameOriginMessages">same-origin messages will <b>not</b> show up since prop <code>ignore-same-origin-messages={{ props.ignoreSameOriginMessages }}</code></p>
  <p v-else>same-origin and cross-origin messages will show up since prop <code>ignore-same-origin-messages={{ props.ignoreSameOriginMessages }}</code></p>
  <ol class="message-log stack" ref="messages"></ol>
</template>
