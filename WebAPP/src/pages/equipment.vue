<template>
    <f7-page name="equipment">
        <div class="page-content-wrapper">
            <div class="display-flex justify-content-space-between">
                <div class="display-flex align-items-center">
                    <f7-button back
                               icon-f7="arrow_left"
                               class="display-inline-block"></f7-button>
                    <h1>{{ $t("assets.asset") }}</h1>
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
                                    {{ $t("generic.delete") }}
                                </strong>
                            </f7-button>
                            <f7-button v-if="editMode"
                                       fill
                                       color="white"
                                       @click="postEquipment(equipment)"
                                       class="display-inline-block padding-horizontal">
                                <f7-icon f7="floppy_disk" color="primary"></f7-icon>
                                <strong class="display-inline-block padding-left-half">
                                    {{ $t("generic.save") }}
                                </strong>
                            </f7-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-custom-color-1 border-radius-12 elevation margin-bottom">
                <div class="row padding border-bottom-solid-2">
                    <f7-list class="width-100 no-margin-top">
                        <f7-list-input type="select" :disabled="!editMode" placeholder="Please choose collaborator..." v-model:value="equipment.collaborator" :label="$t('assets.collaborator')">
                            <option v-for="(col, index) in collaborators" :value="col.id">{{col.name + " " + col.surname}}</option>
                            <template #media>
                                <f7-icon f7="person_2"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.name" :label="$t('assets.name')">
                            <template #media>
                                <f7-icon f7="person_2"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.description" :label="$t('assets.description')">
                            <template #media>
                                <f7-icon f7="house"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.serialnumber" :label="$t('assets.sn')">
                            <template #media>
                                <f7-icon f7="doc_text_viewfinder"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.invoice" :label="$t('assets.invoice')">
                            <template #media>
                                <f7-icon f7="doc_person"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input input type="datetime-local" :disabled="!editMode" v-model:value="equipment.purchasedate" :label="$t('assets.purchaseDate')">
                            <template #media>
                                <f7-icon f7="qrcode"></f7-icon>
                            </template>
                        </f7-list-input>

                        <f7-list-input type="select" :disabled="!editMode" v-model:value="equipment.type" :label="$t('assets.type')">
                            
                            <option v-for="(type, index) in equipmentTypes" :value="type.id">{{type.name + " - " + type.description}}</option>
                            <template #media>
                                <f7-icon f7="device_phone_portrait"></f7-icon>
                            </template>
                        </f7-list-input>

                        <f7-list-input type="int" :disabled="!editMode" v-model:value="equipment.price"  :label="$t('assets.price')">
                            <template #media>
                                <f7-icon f7="device_phone_portrait"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="equipment.note" :label="$t('assets.note')">
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
    import { manageEquipment } from '../js/equipments';

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
            const { equipment, collaborators, postEquipment, deleteEquipment, equipmentTypes } = manageEquipment(props);

            return {
                equipment,
                collaborators,
                postEquipment,
                deleteEquipment,
                equipmentTypes
            };
        },
    };
</script>
