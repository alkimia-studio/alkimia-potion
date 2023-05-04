<template>
    <f7-app v-bind="f7params">

        <!-- Views/Tabs container -->
        <f7-views tabs class="safe-areas">
            <!-- Tabbar for switching views-tabs -->
            <f7-toolbar tabbar icons bottom>
                <f7-link tab-link="#view-home" tab-link-active icon-ios="f7:house_fill" icon-md="material:home" text="Home"></f7-link>
                <f7-link v-if="jwttoken!=''" tab-link="#view-collaborators" icon-ios="f7:square_list_fill" icon-md="material:view_list" text="Collaboratos"></f7-link>
                <f7-link v-if="jwttoken!=''" tab-link="#view-equipments" icon-ios="f7:gear" icon-md="material:view_list" text="Equipments"></f7-link>
                <f7-link v-if="jwttoken!=''" tab-link="#view-permits" icon-ios="f7:gear" icon-md="material:view_list" text="Permits"></f7-link>
            </f7-toolbar>

            <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
            <f7-view id="view-home" main tab tab-active url="/"></f7-view>

            <!-- Collaborators View -->
            <f7-view id="view-collaborators" name="collaborators" tab url="/collaborators/"></f7-view>

            <!-- Equipments View -->
            <f7-view id="view-equipments" name="equipments" tab url="/equipments/"></f7-view>

            <!-- Permits View -->
            <f7-view id="view-permits" name="permits" tab url="/permits/"></f7-view>

        </f7-views>

        <f7-login-screen id="my-login-screen">
            <f7-view>
                <f7-page login-screen>
                    <f7-login-screen-title>Login</f7-login-screen-title>
                    <f7-list form>
                        <f7-list-input type="text"
                                       name="username"
                                       placeholder="Your username"
                                       v-model:value="username"></f7-list-input>
                        <f7-list-input type="password"
                                       name="password"
                                       placeholder="Your password"
                                       v-model:value="password"></f7-list-input>
                    </f7-list>
                    <f7-list>
                        <f7-list-button title="Sign In" @click="alertLoginData"></f7-list-button>
                        <f7-block-footer>
                            Some text about login information.<br>Click "Sign In" to close Login Screen
                        </f7-block-footer>
                    </f7-list>
                </f7-page>
            </f7-view>
        </f7-login-screen>
    </f7-app>
</template>
<script>
    import { ref, onMounted } from 'vue';
    import { f7, f7ready, useStore } from 'framework7-vue';

    import routes from '../js/routes.js';
    import store from '../js/store';

    export default {
        setup() {
            // Framework7 Parameters
            const f7params = {
                name: 'Alkimia Potion', // App name
                theme: 'auto', // Automatic theme detection

                // App store
                store: store,
                // App routes
                routes: routes,

                // Register service worker (only on production build)
                serviceWorker: process.env.NODE_ENV === 'production' ? {
                    path: '/service-worker.js',
                } : {},
            };

            // Login screen data
            const username = ref('');
            const password = ref('');
            const alertLoginData = () => {
                store.dispatch('postLogin', { "username": username.value, "password": password.value })
                    .then(() => {
                        f7.loginScreen.close();
                    })
            }
            var jwttoken = useStore(store, 'jwttoken');
            onMounted(() => {
                f7ready(() => {

                });
            }); 

            return {
                f7params,
                username,
                password,
                jwttoken,
                alertLoginData
            }
        }
    }
</script>