<script setup lang="ts">
import { onMounted, ref } from 'vue'

export interface Props {
  noCors?: boolean,
  src?: string
}

const props = withDefaults(defineProps<Props>(), {
    noCors: false,
    src: 'https://www.w3schools.com/images/w3schools_green.jpg'
})

const container = ref<HTMLDivElement|null>(null)

onMounted(async () => {
    // console.log("props", props)
    if (!container.value) {
      return
    }
    const ol = document.createElement("ol")

    let response: any = undefined
    try {
      response = await fetch(props.src, {
        method: 'GET',
        mode: props.noCors ? 'no-cors' : 'cors'
      })
      // console.log("response", response)
      // console.log("response.type", response.type)
      const li = document.createElement("li")
      li.innerHTML = `<p style="color: green;">image fetched successfully</p>`
      ol.appendChild(li)
    } catch(err) {
      const li = document.createElement("li")
      li.innerHTML = `<p style="color: red;">${err.message}</p>`
      ol.appendChild(li)
      container.value.appendChild(ol)
      return
    }
    
    try {
      const blob = await response.blob()
      // console.log("blob.size", blob.size)
      if (blob.size === 0) {
        throw new Error("blob.size is 0")
      }
      const li = document.createElement("li")
      li.innerHTML = `<p style="color: green;">image data accessed successfully</p>`
      ol.appendChild(li)
      const img = document.createElement("img")
      img.src = URL.createObjectURL(blob)
      container.value.appendChild(img)
      ol.classList.add("success")
    } catch(err) {
      const li = document.createElement("li")
      li.innerHTML = `<p style="color: red;">${err.message}</p>`
      ol.appendChild(li)
    } finally {
      container.value.appendChild(ol)
    }
})

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
  <code v-if="props.noCors" class="shiki shiki-themes vitesse-dark vitesse-light slidev-code language-js">
    const response = await fetch("&ltimg-URL&gt", {
    mode: 'no-cors'
  })
  </code>
  <code v-else class="shiki shiki-themes vitesse-dark vitesse-light slidev-code language-js">
    const response = await fetch("&ltimg-URL&gt", {
    mode: 'cors'
  })
  </code>
  <div ref="container"></div>
</template>
