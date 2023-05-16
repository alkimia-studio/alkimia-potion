
import { createStore } from 'framework7';
import API from "./api";

const store = createStore({
    state: {
        username: "",
        password: "",
        jwttoken: "",
        collaborators: [],
        equipments: [],
        permits: [],
        equipmentTypes: [],
        error: null,
    },
    getters: {
        jwttoken({ state }) {
            return state.jwttoken;
        },
        collaborators({ state }) {
            return state.collaborators;
        },
        equipments({ state }) {
            return state.equipments;
        },
        permits({ state }) {
            return state.permits;
        },
        equipmentTypes({ state }) {
            return state.equipmentTypes;
        },
        lastError({ state }) {
            return state.error;
        }
    },
    actions: {
        initData({ state }) {    
            store.dispatch('loadCollaborators');
            store.dispatch('loadEquipments');
            store.dispatch('loadPermits');
        },
        resetJWTToken({ state }) {
            state.jwttoken = "";
            localStorage.setItem('authToken', "");
        },
        postLogin({ state }, login) {
            API.postLogin(login)
                .then(data => {
                    state.jwttoken = data.token;
                    localStorage.setItem('authToken', data.token);
                    store.dispatch('initData');
                })
                .catch(err => console.log(err))
        },
        addCollaborator({ state }, collaborator) {
            state.collaborators = [...state.collaborators, collaborator];
        },
        postCollaborator({ state }, collaborator) {
            API.postCollaborator(collaborator)
                .then(data => {
                    store.dispatch('loadCollaborators');
                })
                .catch(err => console.log(err))
        },
        putCollaborator({ state }, collaborator) {
            API.putCollaborator(collaborator)
                .then(data => {

                })
                .catch(err => console.log(err))
        },
        loadCollaborators({ state }) {
            API.getCollaborators()
                .then(data => {
                    state.collaborators = data;
                })
                .catch(err => {
                    state.error = err;
                });
        },
        deleteCollaborator({ state }, collaboratorId) {
            return API.deleteCollaborator(collaboratorId)
                .then(data => {
                    store.dispatch('loadCollaborators');
                })
                .catch(err => {
                    console.log(err);
                    return Promise.reject(err);
                });
        },
        addEquipment({ state }, equipment) {
            state.equipments = [...state.equipments, equipment];
        },
        postEquipment({ state }, equipment) {
            API.postEquipment(equipment)
                .then(data => {
                    store.dispatch('loadEquipments');
                })
                .catch(err => console.log(err))
        },
        putEquipment({ state }, equipment) {
            API.putEquipment(equipment)
                .then(data => {

                })
                .catch(err => console.log(err))
        },
        loadEquipments({ state }) {
            API.getEquipments()
                .then(data => {
                    state.equipments = data.equipments;
                    state.equipmentTypes = data.equipmentTypes;
                })
                .catch(err => {
                    state.error = err;
                });

        },
        deleteEquipment({ state }, equipmentId) {
            return API.deleteEquipment(equipmentId)
                .then(data => {
                    store.dispatch('loadEquipments');
                })
                .catch(err => {
                    console.log(err);
                    return Promise.reject(err);
                });
        },
        addPermit({ state }, permit) {
            state.permits = [...state.permits, permit];
        },
        postPermit({ state }, permit) {
            API.postPermit(permit)
                .then(data => {
                    store.dispatch('loadPermits');
                })
                .catch(err => console.log(err))
        },
        putPermit({ state }, permit) {
            API.putPermit(permit)
                .then(data => {

                })
                .catch(err => console.log(err))
        },
        loadPermits({ state }) {
            API.getPermits()
                .then(data => {
                    state.permits = data;
                })
                .catch(err => {
                    state.error = err;
                });

        },
        deletePermit({ state }, permitId) {
            return API.deletePermit(permitId)
                .then(data => {
                    store.dispatch('loadPermits');
                })
                .catch(err => {
                    console.log(err);
                    return Promise.reject(err);
                });
        },
        setError({ state }, val) {
            state.error = val;
        },
    },
})
export default store;

