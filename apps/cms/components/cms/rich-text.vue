<script setup lang="ts">
import type { RichTextInput } from '../../types/cms';

defineProps<{
  content: RichTextInput
}>()

function tag(config: RichTextInput[number]) {
  switch (config.type) {
    case 'paragraph': return 'p'
    case 'heading': return `h${config.level}`
    case 'list': return config.format === 'ordered' ? 'ol' : 'ul'
    case 'list-item': return 'li'
    case 'quote': return 'q'
    case 'text': return 'span'
  }
}
</script>

<template>
  <template v-for="section, i in content" :key="i">
    <span v-if="section.type === 'text'">
      {{ section.text }}
    </span>
    <ULink v-else-if="section.type === 'link'" :to="section.url">
      <CmsRichText :content="section.children"/>
    </ULink>
    <CmsImage  v-else-if="section.type === 'image'" v-bind="section.image"/>
    <component v-else :is="tag(section)">
      <CmsRichText :content="section.children"/>
    </component>
  </template>
</template>
