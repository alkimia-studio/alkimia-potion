// Import Vue
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import en from './en.txt';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';


const messages = {
    en: {
        message: {
            hello: 'Localization test'
        }
    },
    it: {
        message: {
            hello: 'test localizzazione'
        }
    }
}

const i18n = createI18n({
    locale: 'it',
    fallbackLocale: 'it',
    messages
})









// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);


// Init App
const app = createApp(App);
app.use(i18n);

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.mount('#app');