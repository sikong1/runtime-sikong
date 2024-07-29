<template>
  <p ref="pRef" :style="{ opacity: visible ? '1' : '0', ...config.style }">{{ config.text }}</p>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from 'vue';

import type { MComponent, MContainer, MNode, MPage } from '@tmagic/schema';
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

const pRef = ref<HTMLElement | null>(null);
const visible = ref(false);
const show = () => {
  visible.value = true;
};

const hide = () => {
  visible.value = false;
};

const { app } = useApp({
  config: props.config,
  methods: {
    showText: () => {
      // 1s钟，改变透明色从1到0
      show();
      const p = pRef.value as HTMLElement;
      p.style.transition = 'opacity 2s';
      setTimeout(() => {
        hide();
      }, 2000);
    },
  },
});

// 已选组件选择隐藏的组件时，要展示出来
const editorSelectHandler = (
  info: {
    node: MNode;
    page: MPage;
    parent: MContainer;
  },
  path: MNode[],
) => {
  if (path.find((node: MNode) => node.id === props.config.id)) {
    show();
  } else {
    hide();
  }
};

app?.page?.on('editor:select', editorSelectHandler);

onBeforeUnmount(() => {
  app?.page?.off('editor:select', editorSelectHandler);
});
</script>
