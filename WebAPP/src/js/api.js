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

    static postCollaborator(collaborator) {
        var config = {
            method: 'post',
            url: _apiUrl + 'Collaborator',
            headers: {},
            body: collaborator
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

    static putCollaborator(collaborator) {
        var config = {
            method: 'put',
            url: _apiUrl + 'Collaborators/' + collaborator.id,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            data: collaborator
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