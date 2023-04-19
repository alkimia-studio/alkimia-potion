<template>
    <f7-page name="collaborators">
        <f7-navbar title="Collaborators"></f7-navbar>
        <f7-list strong dividers-ios outline-ios inset-md>
            <f7-list-item v-for="collaborator in collaborators"
                          :key="collaborator.id"
                          :title="collaborator.name + ' ' + collaborator.surname"
                          :link="`/collaborator/${collaborator.id}/`"></f7-list-item>
        </f7-list>
        <f7-block>
            <f7-button fill small @click="addCollaborator">Add Collaborator</f7-button>
        </f7-block>
    </f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';
    import store from '../js/store';

    export default {
        setup() {
            const collaborators = useStore('collaborators');

            const addCollaborator = () => {
                store.dispatch('addCollaborator', {
                    "id": 0,
                    "name": "Mario",
                    "surname": "Rossi",
                    "email": "",
                    "emailpersonal": "",
                    "emailpec": "",
                    "tel": "",
                    "cf": "",
                    "docnumber": "",
                    "address": "",
                    "iban": "",
                    "note": ""
                });
            };

            return {
                collaborators,
                addCollaborator
            };
        }
    };
</script>
