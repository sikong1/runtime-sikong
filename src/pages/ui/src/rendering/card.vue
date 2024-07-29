<template>
  <view>
    <slot>
      <!-- #ifdef MP-WEIXIN -->
      <rendering :props-items="item.items" />
      <!-- #endif -->
    </slot>
  </view>
</template>

<script>
import { transformStyle } from "../set-style.ts"
// #ifdef MP-WEIXIN
import Rendering from "./index"
// #endif
export default {
  name: "CubeCard",
  // #ifdef MP-WEIXIN
  components: {
    Rendering
  },
  // #endif
  props: {
    text: {
      type: String,
      default: ""
    },
    model: {
      type: Object,
      default: () => ({})
    },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    style() {
      return transformStyle(this.item.style || {}, "browser")
    }
  }
}
</script>

<style scoped>
.magic-ui-page {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-color: transparent;
}
</style>
