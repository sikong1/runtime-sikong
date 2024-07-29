<template>
  <view>
    <slot>
      <!-- #ifdef MP-WEIXIN -->
      <render :props-items="item.items" />
      <!-- #endif -->
    </slot>
  </view>
</template>

<script>
import { transformStyle } from "../set-style.ts"
// #ifdef MP-WEIXIN
import Render from "./index"
// #endif
export default {
  name: "CubeCard",
  // #ifdef MP-WEIXIN
  components: {
    Render
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
