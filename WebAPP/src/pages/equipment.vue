<template>
    <f7-page name="equipment">
        <div class="page-content-wrapper">
            <div class="display-flex justify-content-space-between">
                <div class="display-flex align-items-center">
                    <f7-button back
                               icon-f7="arrow_left"
                               class="display-inline-block"></f7-button>
                    <h1>Asset</h1>
                </div>
            </div>

            <div class="search-bar bg-custom-color-1 border-radius-12 elevation margin-bottom">
                <div class="row padding-horizontal">
                    <div class="row-cell-50 padding-left">
                        <h1>
                            {{equipment.name}}
                        </h1>
                    </div>
                    <div class="row-cell-50">
                        <div class="margin-vertical margin-left display-flex justify-content-flex-end">
                            <f7-button fill
                                       @click="deleteEquipment(equipment.id)"
                                       color="white"
                                       class="display-inline-block padding-horizontal margin-right">
                                <f7-icon f7="trash" color="red"></f7-icon>
                                <strong class="display-inline-block padding-left-half">
                                    Delete
                                </strong>
                            </f7-button>
                            <f7-button v-if="editMode"
                                       fill
                                       color="white"
                                       @click="postEquipment(equipment)"
                                       class="display-inline-block padding-horizontal">
                                <f7-icon f7="floppy_disk" color="primary"></f7-icon>
                                <strong class="display-inline-block padding-left-half">
                                    Save
                                </strong>
                            </f7-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-custom-color-1 border-radius-12 elevation margin-bottom">
                <div class="row padding border-bottom-solid-2">
                    <f7-list class="width-100 no-margin-top">
                        <f7-list-input type="select" :disabled="!editMode" placeholder="Please choose collaborator..." v-model:value="equipment.collaborator" label="Collaborator">
                            <option v-for="(col, index) in collaborators" :value="col.id">{{col.name + " " + col.surname}}</option>
                            <template #media>
                                <f7-icon f7="person_2"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.name" label="Name">
                            <template #media>
                                <f7-icon f7="person_2"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.description" label="Description">
                            <template #media>
                                <f7-icon f7="house"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.serialnumber" label="Serial number">
                            <template #media>
                                <f7-icon f7="doc_text_viewfinder"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.invoice" label="Invoice">
                            <template #media>
                                <f7-icon f7="doc_person"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input input type="date" :disabled="!editMode" v-model:value="equipment.purchasedate" label="Purchase date">
                            <template #media>
                                <f7-icon f7="qrcode"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="int" :disabled="!editMode" v-model:value="equipment.type" label="Type">
                            <template #media>
                                <f7-icon f7="device_phone_portrait"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="int" :disabled="!editMode" v-model:value="equipment.price"  label="Price">
                            <template #media>
                                <f7-icon f7="device_phone_portrait"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.note" label="Note">
                            <template #media>
                                <f7-icon f7="device_phone_portrait"></f7-icon>
                            </template>
                        </f7-list-input>
                    </f7-list>
                </div>
            </div>
        </div>
    </f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';
    import store from '../js/store';

    export default {
        props: {
            f7route: Object,
            f7router: Object,
        },
        data() {
            return {
                editMode: true
            }
        },
        setup(props) {
            const equipments = useStore('equipments');
            const collaborators = useStore('collaborators');

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

            const deleteEquipment = (equipmentId) => {
                if (confirm('Are you sure?')) {
                    store.dispatch('deleteEquipment', equipmentId);
                    props.f7router.navigate('/Equipments/');
                }
            };

            return {
                equipment: currentEquipment,
                collaborators,
                postEquipment,
                deleteEquipment
            };
        },
    };
</script>
