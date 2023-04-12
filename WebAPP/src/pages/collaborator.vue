<template>
    <f7-page name="collaborator">
        <f7-navbar :title="collaborator.name" back-link="Back"></f7-navbar>
        <f7-block-title>About {{ collaborator.name + ' ' + collaborator.surname }}</f7-block-title>
        <f7-block>
            {{ collaborator.email }}
        </f7-block>
    </f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';

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
            return {
                collaborator: currentCollaborator,
            };
        },
    };
</script>
