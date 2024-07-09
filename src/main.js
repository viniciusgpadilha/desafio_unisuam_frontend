import { createApp } from 'vue';
import DefaultTemplate from './layouts/DefaultTemplate';
import router from './router';
import store from './store';

const app = createApp(DefaultTemplate);

app.use(store);
app.use(router);


app.mount('#app');

