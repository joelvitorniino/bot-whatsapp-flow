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

    const cpfNumbers = body.replace(/[^0-9]/g, '');

    if (cpfNumbers.length !== 11) {
        await setNextStep('s13', from);
        await client.sendText(from, messages.cpfInvalid());
        return console.log("Mensagem enviada");
    }
    
    const setData = await setDataSubmit(from, "document", cpfNumbers);
    if (setData.error) {
        await client.sendText(from, setData.message.text);
        return console.log("Mensagem enviada");
    }
    await client.sendText(from, messages.instalationNumber());
    await setNextStep('s15', from);
    console.log("Mensagem enviada");
}