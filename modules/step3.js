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

    const nameRegex = /[^a-zà-ú]/gi;

    const nameValid = nameRegex.test(body);

    if (!nameValid) {
        await setNextStep('s3', from);
        await client.sendText(from, messages.nameInvalid());
        return console.log("Mensagem enviada");
    }

    const setData = await setDataSubmit(from, "name", body);
    if (setData.error) {
        await client.sendText(from, setData.message.text);
        return console.log("Mensagem enviada");
    }
    await client.sendText(from, messages.emailSubmit());
    await setNextStep('s4', from);
    console.log("Mensagem enviada");
}