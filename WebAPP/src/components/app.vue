<template>
    <f7-app v-bind="f7params">

        <div style="width:100%" class="display-flex">
            <div class="section-left bg-custom-color-1">

                <div class="navigator-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="237.751" height="42.368" viewBox="0 0 237.751 42.368">
                        <defs>
                            <clipPath id="clip-path">
                                <rect id="Rettangolo_30" data-name="Rettangolo 30" width="171.502" height="31.976" transform="translate(0 0)" fill="#eee" />
                            </clipPath>
                        </defs>
                        <g id="Raggruppa_28" data-name="Raggruppa 28" transform="translate(-27.001 -46)">
                            <g id="Raggruppa_13" data-name="Raggruppa 13" transform="translate(-14 21.828)">
                                <path id="Tracciato_24" data-name="Tracciato 24" d="M25,0,0,42.368H50Z" transform="translate(41 24.172)" />
                                <path id="Tracciato_29" data-name="Tracciato 29" d="M13.16,10.352A2.959,2.959,0,1,1,10.2,7.394a2.958,2.958,0,0,1,2.958,2.958" transform="translate(55.799 39.577)" fill="#fff" />
                            </g>
                            <g id="Raggruppa_19" data-name="Raggruppa 19" transform="translate(93.25 52.196)">
                                <g id="Raggruppa_18" data-name="Raggruppa 18" clip-path="url(#clip-path)">
                                    <path id="Tracciato_30" data-name="Tracciato 30" d="M26.618,13.2a12.174,12.174,0,0,1-12.13,12.13v5.7H0v-30H14.359A12.211,12.211,0,0,1,26.618,13.2" fill="#eee" />
                                    <path id="Tracciato_31" data-name="Tracciato 31" d="M59.581,15.987A15.988,15.988,0,1,1,43.593,0,15.988,15.988,0,0,1,59.581,15.987" fill="#eee" />
                                    <path id="Tracciato_32" data-name="Tracciato 32" d="M82.3,31.075h-15v-15H61.084V1.029H88.13V16.073H82.3Z" fill="#eee" />
                                    <rect id="Rettangolo_29" data-name="Rettangolo 29" width="15.602" height="30.003" transform="translate(90.275 1.03)" fill="#eee" />
                                    <path id="Tracciato_33" data-name="Tracciato 33" d="M139.567,15.987A15.987,15.987,0,1,1,123.58,0a15.988,15.988,0,0,1,15.987,15.987" fill="#eee" />
                                    <path id="Tracciato_34" data-name="Tracciato 34" d="M156.586,12.087V1.029H171.5v30h-30V.3Z" fill="#eee" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

                <!--<f7-list>
                    <f7-list-item>
                        <template #media>
                            <div class="navigator-item-icon active">
                                <f7-icon f7="square_grid_2x2" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link active" tab-link="#view-home" tab-link-active text="Dashboard"></f7-link>
                        </template>
                    </f7-list-item>
                    <f7-list-item v-if="jwttoken!=''">
                        <template #media>
                            <div class="navigator-item-icon">
                                <f7-icon f7="square_arrow_left" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link" tab-link="#view-permits" tab-link-active text="Permits"></f7-link>
                        </template>
                    </f7-list-item>
                    <f7-list-item v-if="jwttoken!=''">
                        <template #media>
                            <div class="navigator-item-icon">
                                <f7-icon f7="device_laptop" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link" tab-link="#view-equipments" tab-link-active text="Assets"></f7-link>
                        </template>
                    </f7-list-item>
                    <f7-list-item v-if="jwttoken!=''">
                        <template #media>
                            <div class="navigator-item-icon">
                                <f7-icon f7="person_2" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link" tab-link="#view-collaborators" tab-link-active text="Collaborators"></f7-link>
                        </template>
                    </f7-list-item>
                </f7-list>-->


                <f7-list>
                    <f7-list-item>
                        <template #media>
                            <div class="navigator-item-icon active">
                                <f7-icon f7="square_grid_2x2" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link active" tab-link="#view-home" tab-link-active text="Dashboard"></f7-link>
                        </template>
                    </f7-list-item>
                    <f7-list-item>
                        <template #media>
                            <div class="navigator-item-icon">
                                <f7-icon f7="square_arrow_left" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link" tab-link="#view-permits" tab-link-active text="Permits"></f7-link>
                        </template>
                    </f7-list-item>
                    <f7-list-item>
                        <template #media>
                            <div class="navigator-item-icon">
                                <f7-icon f7="device_laptop" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link" tab-link="#view-equipments" tab-link-active text="Assets"></f7-link>
                        </template>
                    </f7-list-item>
                    <f7-list-item>
                        <template #media>
                            <div class="navigator-item-icon">
                                <f7-icon f7="person_2" />
                            </div>
                        </template>
                        <template #title>
                            <f7-link class="navigator-item-link" tab-link="#view-collaborators" tab-link-active text="Collaborators"></f7-link>
                        </template>
                    </f7-list-item>

                    

                    <f7-button fill @click="Logout">Logout</f7-button>
                </f7-list>



            </div>
            <div class="section-right bg-custom-color-2">
                <!-- Views/Tabs container -->
                <f7-views tabs class="safe-areas">
                    <!-- Tabbar for switching views-tabs -->
                    <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
                    <f7-view id="view-home" main tab tab-active url="/"></f7-view>

                    <!-- Collaborators View -->
                    <f7-view id="view-collaborators" name="collaborators" tab url="/collaborators/"></f7-view>

                    <!-- Equipments View -->
                    <f7-view id="view-equipments" name="equipments" tab url="/equipments/"></f7-view>

                    <!-- Permits View -->
                    <f7-view id="view-permits" name="permits" tab url="/permits/"></f7-view>



                    

                </f7-views>



            </div>



        </div>

        <!-- Login Screen -->
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
                        <f7-list-button title="Sign In" @click="Login"></f7-list-button>
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

    import { initializeApp } from "firebase/app";
    import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

    const firebaseConfig = {
        apiKey: "AIzaSyD-NXDLQjaJHmPYYhWaVmmBJtj5mOUO8_Y",
        authDomain: "f7-auth-d18b0.firebaseapp.com",
        projectId: "f7-auth-d18b0",
        storageBucket: "f7-auth-d18b0.appspot.com",
        messagingSenderId: "475220626734",
        appId: "1:475220626734:web:7d70ea1cab006e45257ebf"
    };
    // Initialize Firebase
    const appFirebase = initializeApp(firebaseConfig);
    //initialize firebase auth
    const auth = getAuth(appFirebase);



    export default {
        setup() {
            // Framework7 Parameters
            const f7params = {
                name: 'Alkimia Potion', // App name
                theme: 'auto', // Automatic theme detection
                colors: {
                    // specify primary color theme
                    primary: '#419DA4'
                },

                // App store
                store: store,
                // App routes
                routes: routes,
                auth,

                // Register service worker (only on production build)
                serviceWorker: process.env.NODE_ENV === 'production' ? {
                    path: '/service-worker.js',
                } : {},
            };

            // Login screen data
            const username = ref('');
            const password = ref('');
            const Login = () => {
                try {
                    signInWithEmailAndPassword(auth, username.value, password.value)
                        .then(response => {
                            if (response) {
                                const element = document.querySelector("#my-login-screen");
                                f7.loginScreen.close(element);

                                store.dispatch('postLogin', { "username": username.value, password: password.value });

                            } else {
                                alert('login failed')
                            }
                        })
                        .catch(err => alert(err))

                }

                catch (err) {
                    alert('login failed' + err.message)
                    error.value = err.message
                }
            }

            const Logout = async () => {
                try {

                    auth.signOut()
                        .then(response => {
                       
                                const element = document.querySelector("#my-login-screen");
                                f7.loginScreen.open(element);
                            
                        })
                        .catch(err => alert(err))
                }
                catch (err) {
                    alert('logout failed')
                }
            }



            var jwttoken = useStore(store, 'jwttoken');
            onMounted(() => {
                f7ready(() => {

                    auth.onAuthStateChanged(user => {
                        if (user) {
                            // User is signed in, see docs for a list of available properties
                            // https://firebase.google.com/docs/reference/js/firebase.User
                            const uid = user.uid;

                            // ...
                        } else {
                            const element = document.querySelector("#my-login-screen");
                            f7.loginScreen.open(element);
                        }
                    });

                });
            });

            return {
                f7params,
                username,
                password,
                jwttoken,
                Login,
                Logout
            }
        }
    }
</script>