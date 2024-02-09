import "./style.css";

import { createApp } from "vue";
import { createPinia } from 'pinia'

import App from "./App.vue";
import AppButton from "./components/AppButton.vue";
import AppImage from "./components/AppImage.vue";
import AppIcon from "./components/AppIcon.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app
    .component("AppButton", AppButton)
    .component("AppImage", AppImage)
    .component("AppIcon", AppIcon);

app.mount("#app");
