const { setNextStep, getAddress } = require('../fetch');
const messages = require('./messages');

const options = {
    1: async (client, message) => {
        const { from } = message;
        const address = await getAddress(from);
        await setNextStep('s7', from);
        await client.sendText(from, messages.confirmAddress(address, parseInt(Math.random() * 60)));
    },
    2: async (client, message) => {
        const { from } = message;
        await setNextStep('s5', from);
        await client.sendText(from, messages.whatElse());
        console.log("Mensagem enviada");
    }
}

module.exports = async (client, message) => {
    const { from, body } = message;

    if (options[body]) {
        await options[body](client, message);
    } else {
        await client.sendText(from, messages.invalidOption());
        await setNextStep('s5', from);
        await client.sendText(from, messages.whatElse());
    }
    return;
}