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

export function manageEquipment(props) {
    const equipments = useStore('equipments');
    const collaborators = useStore('collaborators');
    const equipmentTypes = useStore('equipmentTypes');

    const equipmentId = props.f7route.params.id;
    let currentEquipment;
    equipments.value.forEach(function (equipment) {
        if (equipment.id.toString() === equipmentId) {
            currentEquipment = equipment;
        }
    });

    const postEquipment = (equipment) => {
        if (equipment.id == 0) {
            store.dispatch('postEquipment', equipment).then(function () {
                props.f7router.navigate('/Equipments/');
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            store.dispatch('putEquipment', equipment).then(function () {
                props.f7router.navigate('/Equipments/');
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    const deleteEquipment = (equipmentId) => {
        if (confirm('Are you sure?')) {
            store.dispatch('deleteEquipment', equipmentId).then(function () {
                alert("Done!");
            })
                .catch(function (error) {
                    console.log(error);
                    alert("Fail!");
                });
            props.f7router.navigate('/Equipments/');
        }
    };

    return {
        equipment: currentEquipment,
        collaborators,
        postEquipment,
        deleteEquipment,
        equipmentTypes
    };
};