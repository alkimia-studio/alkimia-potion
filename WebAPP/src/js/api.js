import axios from 'axios'

export function getCollaborators() {
    var config = {
        method: 'get',
        url: 'https://localhost:7237/Collaborators',
        headers: {}
    };

    const dataPromise = axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    return dataPromise
}