<template>
    <f7-page name="equipment">
        <f7-navbar :title="equipment.name" back-link="Back">&nbsp;&nbsp;&nbsp;<f7-toggle v-model:checked="editMode"></f7-toggle>&nbsp;<span>Edit</span></f7-navbar> 
        <f7-block>
            <div class="grid grid-cols-2 grid-gap">
                <div>Name</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="equipment.name" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Description</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="equipment.description" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Serial number</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="equipment.serialnumber" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Invoice</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="equipment.invoice" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Purchase date</div>
                <div><f7-input type="date" :disabled="!editMode" v-model:value="equipment.purchasedate" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Type</div>
                <div><f7-input type="int" :disabled="!editMode" v-model:value="equipment.type" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Price</div>
                <div><f7-input type="int" :disabled="!editMode" v-model:value="equipment.price" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Note</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="equipment.note" /></div>
            </div>
        </f7-block>
        <f7-block v-if="editMode">
            <f7-button fill small @click="postEquipment(equipment)">Save Equipment</f7-button>
        </f7-block>
    </f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';
    import store from '../js/store';

    export default {
        props: {
            f7route: Object
        },
        data() {
            return {
                editMode: false
            }
        },
        setup(props) {
            const equipments = useStore('equipments');
            const equipmentId = props.f7route.params.id;
            let currentEquipment;
            equipments.value.forEach(function (equipment) {
                if (equipment.id.toString() === equipmentId) {
                    currentEquipment = equipment;
                }
            });

            const postEquipment = (equipment) => {
                if (equipment.id == 0)
                    store.dispatch('postEquipment', equipment);
                else
                    store.dispatch('putEquipment', equipment);
            };

            return {
                equipment: currentEquipment,
                postEquipment
            };
        },
    };
</script>
