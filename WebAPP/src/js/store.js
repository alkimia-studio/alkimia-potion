
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
            //TODO
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
