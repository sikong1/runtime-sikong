<template>
  <view>
    <view v-for="item in items" :key="item.id" :style="[style(item)]">
       <cube-avatar
        v-if="item.type === 'avatar'"
        :ref="item.id"
        :mini-size="item.miniSize"
        :size="item.size"
        @click="handleClick(item)"
      />
      <cube-button
        v-else-if="item.type === 'button'"
        :ref="item.id"
        :text="item.text"
        @click="handleClick(item)"
      />
      <card v-else-if="item.type === 'card'" :ref="item.id" :item="item">
        <!-- #ifndef MP-WEIXIN -->
        <ItemView :key="item.id" :props-items="item.items" />
        <!-- #endif -->
      </card>
    </view>
  </view>
</template>
<script>
// import Config from "../josn"
// import josn from "../josn/index"
import local from "../localstorage";
import Card from './card'
// import { transformStyle } from "../set-style"
export default {
  name: "ItemView",
  components: {
    Card
  },
  props: {
    propsItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      config: eval(`(${local.get('magicDSL')})`)
    }
  },
  computed: {
    that() {
      return this
    },
    items() {
      return this.propsItems.length ? this.propsItems : JSON.parse(JSON.stringify(this.config.items[0].items))
    },
    style() {
      return (item) => {
        return item.style
        // console.log(transformStyle(item.style || {}, "browser"), "itemitem")
        // return transformStyle(item.style || {}, "browser")
      }
    }
  },
  mounted() {
  },
  methods: {
    // 子组件调用其他子组件的动作(点击事件)
    handleClick(item) {
      console.log("点击")
      // 数据源方法调用
      const dataSources = josn.dataSources
      const items = item.events.filter((it) => it.name.includes("click"))
      items.forEach((i) => {
        console.log(i.actions, "i.actionsi.actions")
        i.actions.forEach((j) => {
          if (j.method) {
            // 普通动作调用
            console.log(this.$refs[j.to], [j.method], j.method, "j.method")
            this.$refs[j.to][0][j.method]()
          } else {
            // 数据源方法调用
            const { id, methodName } = j.dataSourceMethod
            const kItem = dataSources.find((k) => k.id === id)
            const content = kItem.methods.find((m) => m.name === methodName)
            content && content(j.params || {})
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
