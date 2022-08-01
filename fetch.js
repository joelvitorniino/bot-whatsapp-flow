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