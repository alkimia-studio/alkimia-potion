
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
        lastError({ state }) {
            return state.error;
        }
    },
    actions: {
        initData({ state }, token) {
            debugger;
            API.updateToken(token).then(_ => {
                state.jwttoken = token;

                localStorage.setItem('authToken', token);
                store.dispatch('loadCollaborators');
                store.dispatch('loadEquipments');
                store.dispatch('loadPermits');
            });
            

        },
        postLogin({ state }, login) {
            API.postLogin(login)
                .then(data => {
                    state.jwttoken = data.token;
                    localStorage.setItem('authToken', data.token);
                    store.dispatch('loadCollaborators');
                    store.dispatch('loadEquipments');
                    store.dispatch('loadPermits');
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
                    debugger;
                    state.error = err;
                });
        },
        deleteCollaborator({ state }, collaboratorId) {
            API.deleteCollaborator(collaboratorId)
                .then(data => {
                    store.dispatch('loadCollaborators');
                })
                .catch(err => console.log(err))
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
                    state.equipments = data;
                })
                .catch(err => {
                    state.error = err;
                });

        },
        deleteEquipment({ state }, equipmentId) {
            API.deleteEquipment(equipmentId)
                .then(data => {
                    store.dispatch('loadEquipments');
                })
                .catch(err => console.log(err))
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
            API.deletePermit(permitId)
                .then(data => {
                    store.dispatch('loadPermits');
                })
                .catch(err => console.log(err))
        }
    },
})
export default store;

