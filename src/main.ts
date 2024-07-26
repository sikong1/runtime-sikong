import { createSSRApp } from "vue";
import App from "./App.vue";

import type { Magic } from '@tmagic/stage';

declare global {
  interface Window {
    magic?: Magic;
  }
}
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
