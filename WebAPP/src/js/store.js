
import { createStore } from 'framework7/lite';
import API  from "./api";

const store = createStore({
    state: {
        collaborators: [],
        equipments: [],
        permits: []
    },
    getters: {
        collaborators({ state }) {
            return state.collaborators;
        }
    },
    actions: {
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
                .catch(err => console.log(err))

        }
    },
})
export default store;

store.dispatch('loadCollaborators');
