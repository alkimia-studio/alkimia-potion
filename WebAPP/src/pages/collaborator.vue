<template>
    <f7-page name="collaborator">

        <div class="page-content-wrapper">
            <div class="display-flex justify-content-space-between">
                <div class="display-flex align-items-center">
                    <f7-button back
                               icon-f7="arrow_left"
                               class="display-inline-block"></f7-button>
                    <h1>{{ $t("collaborators.collaborator") }}</h1>
                </div>
            </div>

            <div class="search-bar bg-custom-color-1 border-radius-12 elevation margin-bottom">
                <div class="row padding-horizontal">
                    <div class="row-cell-50 padding-left">
                        <h1>
                            {{collaborator.name + ' ' + collaborator.surname}}
                        </h1>
                    </div>
                    <div class="row-cell-50">
                        <div class="margin-vertical margin-left display-flex justify-content-flex-end">
                            <f7-button fill
                                       @click="deleteCollaborator(collaborator.id)"
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
                                       @click="postCollaborator(collaborator)"
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
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.name" :label="$t('collaborators.name')">
                            <template #media>
                                <f7-icon f7="person"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.surname" :label="$t('collaborators.surname')">
                            <template #media>
                                <f7-icon f7="person_2"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.address" :label="$t('collaborators.address')">
                            <template #media>
                                <f7-icon f7="house"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.cf" :label="$t('collaborators.cf')">
                            <template #media>
                                <f7-icon f7="doc_text_viewfinder"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.docnumber" :label="$t('collaborators.docnumber')">
                            <template #media>
                                <f7-icon f7="doc_person"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.iban" :label="$t('collaborators.iban')">
                            <template #media>
                                <f7-icon f7="qrcode"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.tel" :label="$t('collaborators.phone')">
                            <template #media>
                                <f7-icon f7="device_phone_portrait"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.email" :label="$t('collaborators.email')">
                            <template #media>
                                <f7-icon f7="envelope_open"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.emailpersonal" :label="$t('collaborators.personaleemail')">
                            <template #media>
                                <f7-icon f7="envelope"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="collaborator.emailpec" :label="$t('collaborators.pec')">
                            <template #media>
                                <f7-icon f7="envelope_badge"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="textarea" :disabled="!editMode" v-model:value="collaborator.note" :label="$t('collaborators.note')">
                            <template #media>
                                <f7-icon f7="text_bubble"></f7-icon>
                            </template>
                        </f7-list-input>
                    </f7-list>
                </div>
            </div>
        </div>
</f7-page>
</template>
<script>
    import { manageCollaborator } from '../js/collaborators';

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
            const { collaborator, postCollaborator, deleteCollaborator } = manageCollaborator(props);

            return {
                collaborator,
                postCollaborator,
                deleteCollaborator
            };
        }
    };
</script>
