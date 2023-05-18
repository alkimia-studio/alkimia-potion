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
