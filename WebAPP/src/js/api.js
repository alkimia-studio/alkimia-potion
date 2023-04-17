const _apiUrl = "https://localhost:7237/";

import axios from 'axios'

export default class API { 
    static getCollaborators() {
        var config = {
            method: 'get',
            url: _apiUrl + 'Collaborators',
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
}