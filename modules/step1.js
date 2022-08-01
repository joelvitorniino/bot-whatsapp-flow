const path = require('path');
const { setNextStep, getUserByEmail, alterData } = require('../fetch');
const messages = require('./messages');

const options = {
    1: async (client, message) => {
        const { from } = message;
        await client.sendText(from, messages.SimulatedDiscont());
        await client.sendText(from, messages.howCanIHelp());
        await setNextStep('s1', from);
        console.log("Mensagem enviada");
    },
    2: async (client, message) => {
        const { from } = message;
        const menu = path.resolve(__dirname, '../media/fatura.pdf');
        await client.sendFile(from, menu, "fatura.pdf", "Fatura");
        await client.sendText(from, messages.howCanIHelp());
        await setNextStep('s1', from);
        console.log("Mensagem enviada");
    },
    3: async (client, message) => {
        const { from } = message;
        await client.sendText(from, messages.FAQ());
        await setNextStep('s2', from);
        console.log("Mensagem enviada");
    }
}

module.exports = async (client, message) => {
    const { from, body } = message;

    if (body === '0' || body === '*0*' || body.toLowerCase() === 'voltar') {
        await setNextStep('s1', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    if (options[body]) {
        await options[body](client, message);
    } else {
        await setNextStep('s1', from);
        await client.sendText(from, messages.invalidOption(`*1* a *3*`));
        console.log("Mensagem enviada");
    }
}