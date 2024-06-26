<script setup lang="ts">
import { ref, computed } from 'vue'
import { isGitHub, isReddit, isTwitter, isYouTube } from "./utils.js"

export interface Props {
  alt?: string
  href: string
  text: string
}

const props = withDefaults(defineProps<Props>(), {
    alt: 'Link alt text'
})

const alt = ref(props.alt)
const href = ref(props.href)

let icon_type = ''
if (isGitHub(href.value)) {
  icon_type = 'github'
} else if (isReddit(href.value)) {
  icon_type = 'reddit'
} else if (isTwitter(href.value)) {
  icon_type = 'twitter'
} else if (isYouTube(href.value)) {
  icon_type = 'youtube'
} else {
  icon_type = 'default'
}

const classObject = computed(() => ({
  github: isGitHub(href.value),
  link: true,
  reddit: isReddit(href.value),
  twitter: isTwitter(href.value),
  youtube: isYouTube(href.value),
}))
</script>

<style scoped>
.link {
  border-width: 0;
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
  text-decoration-style: dashed;
  text-underline-offset: 0.35em;
}

.link:hover {
  color: var(--primary-color);
  text-decoration-style: solid;
}

.link svg {
  color: var(--primary-color);
  display: inline;
}
</style>

<template>
  <a :href="href" target="_blank" rel="noopener" :alt="alt"
     :class="classObject">
    {{ text }} 
    <carbon:logo-github v-if="icon_type === 'github'" />
    <uim-reddit-alien-alt v-else-if="icon_type === 'reddit'" />
    <carbon:logo-twitter v-else-if="icon_type === 'twitter'" />
    <carbon:logo-youtube v-else-if="icon_type === 'youtube'" />
    <carbon:link v-else />
  </a>
</template>