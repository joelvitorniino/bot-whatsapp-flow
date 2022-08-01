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

    const emailRegex = /\S+@\S+\.\S+/;

    const emailValid = emailRegex.test(body);

    if (!emailValid) {
        await setNextStep('s4', from);
        await client.sendText(from, messages.emailInvalid());
        return console.log("Mensagem enviada");
    }

    const setData = await setDataSubmit(from, "email", body);
    if (setData.error) {
        await client.sendText(from, setData.message.text);
        return console.log("Mensagem enviada");
    }
    await client.sendText(from, messages.phoneSubmit());
    await setNextStep('s5', from);
    console.log("Mensagem enviada");
}