import { useStore } from 'framework7-vue';
import store from './store';

export function manageEquipments(props) {
    const equipments = useStore('equipments');

    const addEquipment = () => {
        store.dispatch('addEquipment', {
            "id": 0,
            "collaborator": 0,
            "name": "Equipment",
            "description": "",
            "serialnumber": "",
            "purchasedate": "",
            "type": 0,
            "price": 0,
            "invoice": "",
            "note": ""
        }).then(function () {
            props.f7router.navigate('/equipment/0/', {})
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    const equipmentDetails = (id) => {
        props.f7router.navigate('/equipment/' + id + '/', {})
    };

    const searchEquipments = (text) => {
        alert("Search: " + text);
    };

    return {
        equipments,
        addEquipment,
        equipmentDetails,
        searchEquipments
    };
};