const { setNextStep, setDataSubmit } = require('../fetch');
const messages = require('./messages');

const options = {
    1: async (client, message) => {
        const { from, body } = message;
        await setNextStep('s1', from);
        await client.sendText(from, messages.termsAccepted());
        await client.sendText(from, messages.success());
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    },
    2: async (client, message) => {
        const { from, body } = message;
        await setNextStep('s1', from);
        await client.sendText(from, messages.termsRejected());
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }
}

module.exports = async (client, message) => {
    const { from, body } = message;

    if (body === "0" || body === "*0*" || body.toLowerCase() === "voltar") {
        await client.sendText(from, messages.reinitSubmit());
        await setNextStep('s1', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    if (options[body]) {
        await options[body](client, message);
    } else {
        await setNextStep('s18', from);
        await client.sendText(from, messages.invalidOption("*1* e *2*"));
        return console.log("Mensagem enviada");
    }
}