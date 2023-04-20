//const _apiUrl = "https://localhost:7237/";
const _apiUrl = "https://api.alkimia.cloud/";

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
            url: _apiUrl + 'Collaborators',
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

    static getEquipments() {
        var config = {
            method: 'get',
            url: _apiUrl + 'Equipments',
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

    static postEquipment(equipment) {
        var config = {
            method: 'post',
            url: _apiUrl + 'Equipments',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            data: equipment
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

    static putEquipment(equipment) {
        var config = {
            method: 'put',
            url: _apiUrl + 'Equipments/' + equipment.id,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            data: equipment
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

    static getPermits() {
        var config = {
            method: 'get',
            url: _apiUrl + 'Permits',
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

    static postPermit(permit) {
        var config = {
            method: 'post',
            url: _apiUrl + 'Permits',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            data: permit
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

    static putPermit(permit) {
        var config = {
            method: 'put',
            url: _apiUrl + 'Permits/' + permit.id,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            data: permit
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