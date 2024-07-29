import Render from "./src/render/index.vue"

const install = (Vue) => {
  Vue.component("my-component", Render)
}

export default {
  install
}
