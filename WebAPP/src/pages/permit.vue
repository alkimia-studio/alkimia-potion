<template>
    <f7-page name="permit">

        <div class="page-content-wrapper">
            <div class="display-flex justify-content-space-between">
                <div class="display-flex align-items-center">
                    <f7-button back
                               icon-f7="arrow_left"
                               class="display-inline-block"></f7-button>
                    <h1>Permit</h1>
                </div>
            </div>

            <div class="search-bar bg-custom-color-1 border-radius-12 elevation margin-bottom">
                <div class="row padding-horizontal">
                    <div class="row-cell-50 padding-left">
                        <h1>
                            {{permit.type}}
                        </h1>
                    </div>
                    <div class="row-cell-50">
                        <div class="margin-vertical margin-left display-flex justify-content-flex-end">
                            <f7-button fill
                                       @click="deletePermit(permit.id)"
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
                                       @click="postPermit(permit)"
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
                        <f7-list-input type="select" :disabled="!editMode" placeholder="Please choose collaborator..." v-model:value="permit.collaborator" label="Collaborator">
                            <option v-for="(col, index) in collaborators" :value="col.id">{{col.name + " " + col.surname}}</option>
                            <template #media>
                                <f7-icon f7="person_2"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="permit.type" label="Type">
                            <template #media>
                                <f7-icon f7="person_2"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="datetime-local" :disabled="!editMode" v-model:value="permit.from" label="From">
                            <template #media>
                                <f7-icon f7="house"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="datetime-local" :disabled="!editMode" v-model:value="permit.to" label="To">
                            <template #media>
                                <f7-icon f7="doc_text_viewfinder"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="checkbox" :disabled="!editMode" v-model:checked="permit.allday" label="All day">
                            <template #media>
                                <f7-icon f7="doc_person"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="checkbox" :disabled="!editMode" v-model:checked="permit.torecover" label="To recover">
                            <template #media>
                                <f7-icon f7="qrcode"></f7-icon>
                            </template>
                        </f7-list-input>
                        <f7-list-input type="text" :disabled="!editMode" v-model:value="permit.note" label="Note">
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
            const permits = useStore('permits');
            const collaborators = useStore('collaborators');
            const permitId = props.f7route.params.id;
            let currentPermit;
            permits.value.forEach(function (permit) {
                if (permit.id.toString() === permitId) {
                    currentPermit = permit;
                }
            });

            const postPermit = (permit) => {
                if (permit.id == 0) {
                    store.dispatch('postPermit', permit).then(function () {
                        props.f7router.navigate('/Permits/');
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
                else {
                    store.dispatch('putPermit', permit).then(function () {
                        props.f7router.navigate('/Permits/');
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
            };

            const deletePermit = (permitId) => {
                if (confirm('Are you sure?')) {
                    store.dispatch('deletePermit', permitId).then(function () {
                        alert("Done!");
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("Fail!");
                    });
                    props.f7router.navigate('/Permits/');
                }
            };

            return {
                permit: currentPermit,
                collaborators,
                postPermit,
                deletePermit
            };
        },
    };
</script>
