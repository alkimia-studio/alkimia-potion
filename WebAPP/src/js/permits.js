import { useStore } from 'framework7-vue';
import store from './store';

export function managePermits(props) {
    const permits = useStore('permits');

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

    const searchPermits = (text) => {
        alert("Search: " + text);
    };

    const permitDetails = (id) => {
        props.f7router.navigate('/permit/' + id + '/', {})
    };

    return {
        permits,
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