import { useStore } from 'framework7-vue';
import store from './store';

export function manageCollaborators(props) {
    const collaborators = useStore('collaborators');
    const addCollaborator = () => {
        store.dispatch('addCollaborator', {
            "id": 0,
            "name": "",
            "surname": "",
            "email": "",
            "emailpersonal": "",
            "emailpec": "",
            "tel": "",
            "cf": "",
            "docnumber": "",
            "address": "",
            "iban": "",
            "note": ""
        }).then(function () {
            props.f7router.navigate('/collaborator/0/', {})
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    const collaboratorDetails = (id) => {
        props.f7router.navigate('/collaborator/' + id + '/', {})
    };

    const searchCollaborators = (text) => {
        alert("Search: " + text);
        filteredItems = store.state.collaborators.filter(item => {
            return item.name != ''
        })
    };

    return {
        collaborators,
        addCollaborator,
        collaboratorDetails,
        searchCollaborators
    };
}

export function manageCollaborator(props) {
    const collaborators = useStore('collaborators');
    const collaboratorId = props.f7route.params.id;
    let currentCollaborator;
    collaborators.value.forEach(function (collaborator) {
        if (collaborator.id.toString() === collaboratorId) {
            currentCollaborator = collaborator;
        }
    });
    const postCollaborator = (collaborator) => {
        if (collaborator.id == 0) {
            store.dispatch('postCollaborator', collaborator).then(function () {
                props.f7router.navigate('/Collaborators/');
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            store.dispatch('putCollaborator', collaborator).then(function () {
                props.f7router.navigate('/Collaborators/');
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    const deleteCollaborator = (collaboratorId) => {
        if (confirm('Are you sure?')) {
            store.dispatch('deleteCollaborator', collaboratorId)
                .then(function () {
                    alert("Done!");
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Fail!");
                });
            props.f7router.navigate('/Collaborators/');
        }
    }
    return {
        collaborator: currentCollaborator,
        postCollaborator,
        deleteCollaborator
    };
};
