<template>
    <f7-page name="home">
        <f7-block>
            <h2>Alkimia potion</h2>
            <!-- Page content-->
            <f7-block>
                <p>Small management app of the Alkimia activities:</p>
                <ul>
                    <li>management of collaborators</li>
                    <li>management of permits and holidays</li>
                    <li>management of business equipments</li>
                </ul>
            </f7-block>
            <f7-button v-if="jwttoken == ''" fill login-screen-open="#my-login-screen">Login Screen</f7-button>
      
        </f7-block>
</f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';

    export default {
        props: {
            f7route: Object,
            f7router: Object,
        },
        data() {
            return {
                
            }
        },
        setup(props) {
            const jwttoken = useStore('jwttoken');
            return {
                jwttoken
            };
        }
    };
</script>