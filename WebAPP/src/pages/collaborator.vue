<template>
    <f7-page name="collaborator">
        <f7-navbar :title="collaborator.name + ' ' + collaborator.surname" back-link="Back"></f7-navbar>
        <f7-block>
            <div class="grid grid-cols-2 grid-gap">
                <div>Name</div>
                <div>{{ collaborator.name }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Surname</div>
                <div>{{ collaborator.surname }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Address</div>
                <div>{{ collaborator.address }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>CF</div>
                <div>{{ collaborator.cf }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Doc. number</div>
                <div>{{ collaborator.docnumber }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>IBAN</div>
                <div>{{ collaborator.iban }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Telephone</div>
                <div>{{ collaborator.tel }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Business email</div>
                <div>{{ collaborator.email }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Personal email</div>
                <div>{{ collaborator.emailpersonal }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>PEC Email</div>
                <div>{{ collaborator.emailpec }}</div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Note</div>
                <div>{{ collaborator.note }}</div>
            </div>
        </f7-block>
        <f7-block>
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

            return {
                collaborator: currentCollaborator,
                postCollaborator
            };
        },
    };
</script>
