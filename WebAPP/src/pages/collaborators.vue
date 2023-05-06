<template>
    <f7-page name="collaborators">

        <div class="page-content-wrapper">
            <div class="display-flex justify-content-space-between">
                <h1>Collaborators</h1>
                <div class="margin-vertical margin-left">
                    <f7-button fill @click="addCollaborator" color="white">
                        <f7-icon f7="plus_circle" color="teal"></f7-icon>
                        <strong class="display-inline-block padding-left-half">
                            Add Collaborator
                        </strong>
                    </f7-button>
                </div>
            </div>

            <div class="search-bar bg-custom-color-1 border-radius-12 elevation margin-bottom">
                <div class="row padding border-bottom-solid-2">
                    <div class="row-cell-80 display-flex align-items-center">
                        <div class="navigator-item-icon margin-right bg-custom-color-1">
                            <f7-icon f7="search" />
                        </div>
                        <div style="width:70%">
                            <f7-input type="text"
                                      placeholder="Search for Name, Surname, Email and Phone number"
                                      class="input-blank"
                                      clear-button />
                        </div>
                    </div>
                    <div class="row-cell-20 text-align-right">
                        <f7-button fill @click="addCollaborator" class="padding-horizontal display-inline-block">
                            <strong class="display-inline-block">
                                Search
                            </strong>
                        </f7-button>
                    </div>
                </div>
            </div>

            <div class="bg-custom-color-1 border-radius-12 elevation">
                    <div class="row padding border-bottom-solid-2 row-hover"
                         v-for="collaborator in collaborators"
                         :key="collaborator.id"
                         @click="collaboratorDetails(collaborator.id)">
                        <div class="row-cell-30 display-flex align-items-center">
                            <div class="navigator-item-icon margin-right bg-custom-color-2">
                                <f7-icon f7="person" />
                            </div>
                            <strong>
                                {{collaborator.name + ' ' + collaborator.surname}}
                            </strong>
                        </div>
                        <div class="row-cell-30">
                            <f7-link :href="'mailto:'+collaborator.email">
                                {{collaborator.email}}
                            </f7-link>
                        </div>
                        <div class="row-cell-30">
                            {{collaborator.tel}}
                        </div>
                        <div class="row-cell-10 text-align-right">
                            <f7-icon f7="chevron_right" color="gray"></f7-icon>
                        </div>
                    </div>
                <div class="row padding">
                    <div class="row-cell-30">
                        Items per page 
                        <strong>25</strong>
                    </div>
                    <div class="row-cell-70 display-flex justify-content-flex-end align-items-center">
                        <div class="page-number-item padding-horizontal padding-vertical-half">
                            <f7-link icon-f7="chevron_left"></f7-link>
                        </div>
                        <div v-for="n in 5" class="page-number-item padding-horizontal padding-vertical-half">
                            {{n}}
                        </div>
                        <div class="padding-left padding-vertical-half">
                            <f7-link icon-f7="chevron_right"></f7-link>
                        </div>
                    </div>
                </div>
            </div>

            <!--<f7-list strong dividers-ios outline-ios inset-md>
                <f7-list-item v-for="collaborator in collaborators"
                              :key="collaborator.id"
                              :title="collaborator.name + ' ' + collaborator.surname"
                              :link="`/collaborator/${collaborator.id}/`"></f7-list-item>
            </f7-list>-->
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
        methods:
        {
            collaboratorDetails(id) {
                this.f7router.navigate('/collaborator/'+id+'/', {
                    //props: {
                    //    foo: 'bar',
                    //    bar: true,
                    //}
                })
            }
            },
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
