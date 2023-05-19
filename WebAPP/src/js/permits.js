import { useStore } from 'framework7-vue';
import store from './store';
import { ref, watch } from 'vue';

export function managePermits(props) {
    const permits = useStore('permits');
    let filteredPermits = ref([]);
    let searchText = ref('');

    watch(permits, (currentPermits, prevPermits) => {
        searchPermits();
    })

    const addPermit = () => {
        store.dispatch('addPermit', {
            "id": 0,
            "collaborator": 0,
            "from": "",
            "to": "",
            "allday": true,
            "note": "",
            "torecover": false,
            "type": "Permit",
        }).then(function () {
            props.f7router.navigate('/permit/0/', {})
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    const searchPermits = () => {
        if (searchText.value == null || searchText.value == "") {
            filteredPermits.value = [...permits.value];
        }
        else {
            filteredPermits.value = permits.value.filter
                (
                    p => (p.collaboratorNavigation.name.toLowerCase().indexOf(searchText.value) != -1 || p.collaboratorNavigation.surname.toLowerCase().indexOf(searchText.value) != -1)
                );
        }
    };

    const permitDetails = (id) => {
        props.f7router.navigate('/permit/' + id + '/', {})
    };

    return {
        permits,
        searchText,
        filteredPermits,
        addPermit,
        permitDetails,
        searchPermits
    };
};

export function managePermit(props) {
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
            permit.timestamp = Date.now();
            debugger;
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
};