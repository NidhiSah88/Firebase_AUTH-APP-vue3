import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './routes/index';
import store from "./store";

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);

app.provide('store', store);

app.mount('#app');
