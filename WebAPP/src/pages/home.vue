<template>
    <f7-page name="home">
        <f7-block>
            <h2>Alkimia potion</h2>

            <h3>Scegli la lingua</h3>
            <f7-input type="select"
                      label="Scegli la lingua"
                      placeholder="please choose"
                      v-model:value="language"
                      @change="setLanguage()">
                <option value="en">Inglese</option>
                <option value="it">Italiano</option>
            </f7-input>



            <!-- Page content-->
            <f7-block>
                <p>Small management app of the Alkimia activities:</p>
                <ul>
                    <li>management of collaborators</li>
                    <li>management of permits and holidays</li>
                    <li>management of business equipments</li>
                </ul>
            </f7-block>


        </f7-block>
</f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';

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
            const language = ref('en');
            const { t, locale } = useI18n();

            const setLanguage = () => {
                
                debugger
                locale.value = language.value; // Imposta la lingua italiana
            };

            return {
                jwttoken,
                language,
                setLanguage
            };
        }
    };
</script>