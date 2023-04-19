<template>
    <f7-page name="equipments">
        <f7-navbar title="Equipments"></f7-navbar>
        <f7-list strong dividers-ios outline-ios inset-md>
            <f7-list-item v-for="equipment in equipments"
                          :key="equipment.id"
                          :title="equipment.name"
                          :link="`/equipment/${equipment.id}/`"></f7-list-item>
        </f7-list>
        <f7-block>
            <f7-button fill small @click="addEquipment">Add Equipment</f7-button>
        </f7-block>
    </f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';
    import store from '../js/store';

    export default {
        setup() {
            const equipments = useStore('equipments');

            const addEquipment = () => {
                store.dispatch('addEquipment', {
                    "id": 0,
                    "collaborator": 1,
                    "name": "Equipment",
                    "description": "",
                    "serialnumber": "",
                    "purchasedate": "",
                    "type": 0,
                    "price": 0,
                    "invoice": "",
                    "note": ""
                });
            };

            return {
                equipments,
                addEquipment
            };
        }
    };
</script>
