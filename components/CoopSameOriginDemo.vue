<script setup lang="ts">
import { onMounted, ref } from 'vue'

export interface Props {
  features?:string
  target?: string
  url?: string
}

const props = withDefaults(defineProps<Props>(), {
  features: undefined,
  // features: 'width=640,height=480',
  target: undefined,
  // target: 'Test Window',
  url: 'https://kitchen-sink-demos.vercel.app/api/coop'
  // url: 'https://giacomodebidda.com/'
})

const container = ref<HTMLDivElement|null>(null)

onclick = (event) => {
  // console.log("clicked", event)
  if (!container.value) {
    return
  }

  let js = ''
  let win: Window|null = null
  if (props.target && props.features) {
    js = `let win = window.open(
  '${props.url}',
  '${props.target}', '${props.features}')`
    win = window.open(props.url, props.target, props.features)
  } else if (props.target) {
    js = `let win = window.open('${props.url}',
  '${props.target}')`
    win = window.open(props.url, props.target)
  } else {
    js = `let win = window.open('${props.url}')`
    win = window.open(props.url)
  }
  console.group(`CoopSameOriginDemo.vue`)
  console.log(`execute JS`)
  console.log(js)

  const div = document.createElement("div")
  div.innerHTML = `<p>Try accessing <code>${props.url}</code> with this JS:</p><pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code language-js">${js}</pre>`
  
  if (!win) {
    const p = document.createElement("p")
    p.innerHTML = `<code>window.open</code> <span>failed</span>`
    p.style.color = "red"
    div.appendChild(p)
    container.value.appendChild(div)
    return
  }

  const p = document.createElement("p")
  p.innerHTML = `<code>window.open</code> <span>succeeded</span>`
  p.style.color = "green"
  div.appendChild(p)
  container.value.appendChild(div)

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/open#same-origin_policy  
  console.log(`access win.origin: ${win.origin}`)
  // win.document.write(`<p>This will be blocked by the COOP policy set by <code>${props.url}</code></p>`)
  // console.log(`call win.close()`)
  // win.close()
  // globalThis.win = win
  // console.log(`win is now globally accessible`)
  console.groupEnd()
}

</script>

<style scoped>
.error {
  background-color: red;
}
.success {
  background-color: green;
}
</style>

<template>
  <div ref="container">
    <button class="bg-teal" type="button">
      <span>Click to open</span> <code>{{ props.url }}</code> <span>in </span>
      <code v-if="props.target">{{ props.target }}</code>
      <span v-else>a new tab</span>
    </button>
  </div>
</template>
