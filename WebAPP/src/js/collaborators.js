import { useStore } from 'framework7-vue';
import store from './store';
import { ref, watch} from 'vue';

export function manageCollaborators(props) {
    const collaborators = useStore('collaborators');
    let filteredCollaborators = ref([]);
    let pagedCollaborators = ref([]);
    let searchText = ref('');

    const quantityForPage = 2;
    let currentPage = ref(0);

    watch(collaborators, (currentCollaborators, prevCollaborators) => {
        searchCollaborators();
    })

    watch(filteredCollaborators, (currentFilteredCollaborators, prevFilteredCollaborators) => {
        paginateCollaborators(1);
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

    const paginateCollaborators = (pageNumber) => {
        currentPage.value = pageNumber;
        const start = (pageNumber - 1) * quantityForPage;
        const end = start + quantityForPage;
        pagedCollaborators.value = filteredCollaborators.value.slice(start, end);
        
    };

    const getCollaboratorsTotalPage = () => {
        let number = Math.ceil(filteredCollaborators.value.length / quantityForPage);
        return number;
    };

    

    return {
        searchText,
        filteredCollaborators,
        collaborators,
        addCollaborator,
        collaboratorDetails,
        searchCollaborators,
        paginateCollaborators,
        pagedCollaborators,
        getCollaboratorsTotalPage,
        currentPage
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
