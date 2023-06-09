import { useStore } from 'framework7-vue';
import store from './store';
import { ref, watch, onMounted } from 'vue';

export function manageEquipments(props) {
    const equipments = useStore('equipments');
    let filteredEquipments = ref([]);
    let searchText = ref('');
    let pagedEquipments = ref([]);
    const quantityForPage = 15;
    let currentPage = ref(0);

    watch(filteredEquipments, (currentFilteredEquipments, prevFilteredEquipments) => {
        paginateEquipments(1);
    })

    watch(equipments, (currentEquipments, prevEquipments) => {
        searchEquipments();
    });

    onMounted(() => {
        searchEquipments();
    });

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

    const searchEquipments = () => {
        if (searchText.value == null || searchText.value == "") {
            filteredEquipments.value = [...equipments.value];
        }
        else {
            filteredEquipments.value = equipments.value.filter
                (
                    e => (e.name.toLowerCase().indexOf(searchText.value) != -1 || e.description.toLowerCase().indexOf(searchText.value) != -1 ||
                        e.serialnumber.toLowerCase().indexOf(searchText.value) != -1)
                );
        }
    };

    const paginateEquipments = (pageNumber) => {
        currentPage.value = pageNumber;
        const start = (pageNumber - 1) * quantityForPage;
        const end = start + quantityForPage;
        pagedEquipments.value = filteredEquipments.value.slice(start, end);

    };

    const getEquipmentsTotalPage = () => {
        let number = Math.ceil(filteredEquipments.value.length / quantityForPage);
        return number;
    };

    return {
        searchText,
        equipments,
        filteredEquipments,
        addEquipment,
        equipmentDetails,
        searchEquipments,
        getEquipmentsTotalPage,
        paginateEquipments,
        pagedEquipments,
        currentPage
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