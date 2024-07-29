<template>
  <div class="grid" :style="config.style">
    <magic-ui-container class="magic-ui-page" :config="{ items: config.items }">
      <slot></slot>
    </magic-ui-container>
  </div>
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

<style lang="scss" scoped>
.grid {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;

  display: flex;
  justify-content: space-between;

  .grid-item {
    flex: 1;
  }
}
</style>
