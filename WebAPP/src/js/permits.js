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