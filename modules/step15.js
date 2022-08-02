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

    const instalationNumber = body.replace(/[^0-9]/g, '');

    if (!instalationNumber) {
        await setNextStep('s15', from);
        await client.sendText(from, messages.instalationNumberInvalid());
        return console.log("Mensagem enviada");
    }

    const setData = await setDataSubmit(from, "instalationNumber", instalationNumber);
    if (setData.error) {
        await client.sendText(from, setData.message.text);
        return console.log("Mensagem enviada");
    }
    await client.sendText(from, messages.energyDistributor());
    await setNextStep('s16', from);
    console.log("Mensagem enviada");
}