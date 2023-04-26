<template>
    <f7-page name="collaborator">
        <f7-navbar :title="collaborator.name + ' ' + collaborator.surname" back-link="Back">&nbsp;&nbsp;&nbsp;<f7-toggle v-model:checked="editMode"></f7-toggle>&nbsp;<span>Edit</span>&nbsp;<f7-button small fill color="red" @click="deleteCollaborator(collaborator.id)">Delete</f7-button></f7-navbar> 
        <f7-block>
            <div class="grid grid-cols-2 grid-gap">
                <div>Name</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.name" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Surname</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.surname" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Address</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.address" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>CF</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.cf" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Doc. number</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.docnumber" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>IBAN</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.iban" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Telephone</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.tel" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Business email</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.email" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Personal email</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.emailpersonal" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>PEC Email</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.emailpec" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Note</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="collaborator.note" /></div>
            </div>
        </f7-block>
        <f7-block v-if="editMode">
            <f7-button fill small @click="postCollaborator(collaborator)">Save Collaborator</f7-button>
        </f7-block>
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
                editMode: false
            }
        },
        setup(props) {
            const collaborators = useStore('collaborators');
            const collaboratorId = props.f7route.params.id;
            let currentCollaborator;
            collaborators.value.forEach(function (collaborator) {
                if (collaborator.id.toString() === collaboratorId) {
                    currentCollaborator = collaborator;
                }
            });

            const postCollaborator = (collaborator) => {
                if(collaborator.id == 0)
                    store.dispatch('postCollaborator', collaborator);
                else
                    store.dispatch('putCollaborator', collaborator);
            };

            const deleteCollaborator = (collaboratorId) => {
                if (confirm('Are you sure?')) {
                    store.dispatch('deleteCollaborator', collaboratorId);
                    props.f7router.navigate('/Collaborators/');
                }
            };

            return {
                collaborator: currentCollaborator,
                postCollaborator,
                deleteCollaborator
            };
        },
    };
</script>
