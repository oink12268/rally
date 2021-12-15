import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VMdEditor from "./v-md-editor/index.js";
import VMdPreview from "./v-md-editor/preview/index.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VMdEditor);
app.use(VMdPreview);

app.mount("#app");

app.config.globalProperties.axios=axios   // axios 전역사용
