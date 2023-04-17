<template>
    <f7-app v-bind="f7params">

        <!-- Views/Tabs container -->
        <f7-views tabs class="safe-areas">
            <!-- Tabbar for switching views-tabs -->
            <f7-toolbar tabbar icons bottom>
                <f7-link tab-link="#view-home" tab-link-active icon-ios="f7:house_fill" icon-md="material:home" text="Home"></f7-link>
                <f7-link tab-link="#view-collaborators" icon-ios="f7:square_list_fill" icon-md="material:view_list" text="Collaboratos"></f7-link>
                <f7-link tab-link="#view-equipments" icon-ios="f7:gear" icon-md="material:view_list" text="Equipments"></f7-link>
                <f7-link tab-link="#view-permits" icon-ios="f7:gear" icon-md="material:view_list" text="Permits"></f7-link>
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
    </f7-app>
</template>
<script>
    import { ref, onMounted } from 'vue';
    import { f7, f7ready } from 'framework7-vue';


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
                f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
                    f7.loginScreen.close();
                });
            }
            onMounted(() => {
                f7ready(() => {


                    // Call F7 APIs here
                });
            });

            return {
                f7params,
                username,
                password,
                alertLoginData
            }
        }
    }
</script>