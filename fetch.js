require('dotenv').config();
const axios = require("axios");

const baseUrlBotInfors = process.env.BASEURL_BOTINFORS;

const handleToBRL = (n) => {
    return n.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).trim();
}

function handleError(error) {
    console.log("ERROR 	===>", error);
    return {
        error: true,
        message: {
            code: error.response?.status || error,
            text: error.response?.statusText || ''
        }
    }
}

async function setNextStep(step, id) {
    return axios.patch(`${baseUrlBotInfors}/users/${id}`, { step: step }).then((res) => {
        console.log(`data saved: step -> ${step}`);
        return true;
    }).catch((err) => {
        return handleError(err);
    });
} exports.setNextStep = setNextStep;

async function submitNewUser(id, name) {
    const user = {
        id: id,
        name: name,
        step: 's0'
    }
    return axios.post(`${baseUrlBotInfors}/users`, user).then((res) => {
        console.log(`new user: id -> ${id}`);
        return true;
    }).catch((err) => {
        return handleError(err);
    });
} exports.submitNewUser = submitNewUser;

async function getUser(id) {
    return axios.get(`${baseUrlBotInfors}/users/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        if (err.response?.status === 404) {
            return false;
        } else {
            return handleError(err);
        }
    });
} exports.getUser = getUser;

async function checkSubmit(id) {
    return axios.get(`${baseUrlBotInfors}/submit/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return handleError(err);
    });
} exports.checkSubmit = checkSubmit;

async function startSubmit(id) {
    const submit = {
        id: id,
        name: null,
        email: null,
        phone: null,
        cep: null,
        uf: null,
        city: null,
        neighborhood: null,
        street: null,
        person: null,
        document: null,
        instalationNumber: null,
        energyDistributor: null,
        electricityBillPath: null
    }
    return axios.post(`${baseUrlBotInfors}/submit`, submit).then((res) => {
        console.log(`start: id -> ${id}`);
        return true;
    }).catch((err) => {
        return handleError(err);
    });
} exports.startSubmit = startSubmit;

async function setDataSubmit(id, data, value) {
    return axios.patch(`${baseUrlBotInfors}/submit/${id}`, { [data]: value }).then((res) => {
        console.log(`data saved: ${data} -> ${value}`);
        return true;
    }).catch((err) => {
        return handleError(err);
    });
} exports.setDataSubmit = setDataSubmit;

async function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        return res.data;
    }).catch((err) => {
        return handleError(err);
    });
} exports.getCep = getCep;