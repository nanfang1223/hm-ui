import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import hmUi from "../packages/index";
createApp(App).use(store).use(router).use(hmUi).mount("#app");
