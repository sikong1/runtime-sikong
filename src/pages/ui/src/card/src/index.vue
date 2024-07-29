<template>
  <magic-ui-container class="magic-ui-page" :config="{ items: config.items }">
    <slot></slot>
  </magic-ui-container>
</template>

<script lang="ts" setup>
import { type MComponent } from '@tmagic/schema';
import { useApp } from '@tmagic/vue-runtime-help';

const props = withDefaults(
  defineProps<{
    config: MComponent;
    model?: any;
  }>(),
  {
    model: () => ({}),
  },
);

useApp({
  config: props.config,
  methods: {},
});
</script>

<style scoped>
.in-editor .magic-ui-page {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-color: transparent;
}
</style>
