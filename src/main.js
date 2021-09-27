import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueResizeText from 'vue3-resize-text';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import markdownify from './plugins/markdownify';
import constants from './plugins/constants';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.use(VueResizeText);
app.use(markdownify);
app.use(constants);
app.mount('#app');
