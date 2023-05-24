<template>
    <f7-page name="home">
        <f7-block>
            <h2>Alkimia potion</h2>

            <h3>{{ $t("dashboard.chooseLanguage") }}</h3>
            <f7-input type="select"
                      :label="$t('dashboard.chooseLanguage')"
                      :placeholder="$t('dashboard.chooseLanguage')"
                      v-model:value="language"
                      @change="setLanguage()">
                <option value="en">Inglese</option>
                <option value="it">Italiano</option>
            </f7-input>

            <!-- Page content-->
            <f7-block>
                <p>{{ $t("dashboard.text1") }}</p>
                <ul>
                    <li>{{ $t("dashboard.text2") }}</li>
                    <li>{{ $t("dashboard.text3") }}</li>
                    <li>{{ $t("dashboard.text4") }}</li>
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