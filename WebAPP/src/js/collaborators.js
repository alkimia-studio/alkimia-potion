import { useStore } from 'framework7-vue';
import store from './store';
import { ref, watch} from 'vue';

export function manageCollaborators(props) {
    const collaborators = useStore('collaborators');
    let filteredCollaborators = ref([]);
    let pagedCollaborators = ref([]);
    let searchText = ref('');

    watch(collaborators, (currentCollaborators, prevCollaborators) => {
        searchCollaborators();
    })

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

    const searchCollaborators = () => {
        if (searchText.value == null || searchText.value == "") {
            filteredCollaborators.value = [...collaborators.value];
        }
        else {
            filteredCollaborators.value = collaborators.value.filter
                (
                c => (c.surname.toLowerCase().indexOf(searchText.value) != -1 || c.name.toLowerCase().indexOf(searchText.value) != -1 ||
                c.email.toLowerCase().indexOf(searchText.value) != -1 ||
                c.tel.toLowerCase().indexOf(searchText.value) != -1)
            );
        }
    };

    const pageCollaborators = (pageNumber, quantityForPage) => {
        let index = pageNumber * quantityForPage;
        pagedCollaborators = filteredCollaborators.slice(index, quantityForPage)
    };

    return {
        searchText,
        filteredCollaborators,
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
