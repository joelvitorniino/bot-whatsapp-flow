const { setNextStep, setDataSubmit } = require('../fetch');
const messages = require('./messages');

module.exports = async (client, message) => {
    const { from, body } = message;

    if (body === "0" || body === "*0*" || body.toLowerCase() === "voltar") {
        await client.sendText(from, messages.reinitSubmit());
        await setNextStep('s1', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    if (!body) {
        await setNextStep('s10', from);
        await client.sendText(from, messages.neighborhoodInvalid());
        return console.log("Mensagem enviada");
    }

    const setData = await setDataSubmit(from, "neighborhood", body);
    if (setData.error) {
        await client.sendText(from, setData.message.text);
        return console.log("Mensagem enviada");
    }
    await client.sendText(from, messages.streetSubmit());
    await setNextStep('s11', from);
    console.log("Mensagem enviada");
}