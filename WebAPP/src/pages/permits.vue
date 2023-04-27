<template>
    <f7-page name="permits">
        <f7-navbar title="Permits"></f7-navbar>
        <f7-list strong dividers-ios outline-ios inset-md>
            <f7-list-item v-for="permit in permits"
                          :key="permit.id"
                          :title="permit.type"
                          :link="`/permit/${permit.id}/`"></f7-list-item>
        </f7-list>
        <f7-block>
            <f7-button fill small @click="addPermit">Add Permit</f7-button>
        </f7-block>
    </f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';
    import store from '../js/store';

    export default {
        setup() {
            const permits = useStore('permits');

            const addPermit = () => {
                store.dispatch('addPermit', {
                    "id": 0,
                    "collaborator": 0,
                    "from": "",
                    "to": "",
                    "allday": true,
                    "timestamp": "",
                    "note": "",
                    "torecover": false,
                    "type": "Permit",
                });
            };

            return {
                permits,
                addPermit
            };
        }
    };
</script>
