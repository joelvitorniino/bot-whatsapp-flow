const path = require('path');
const { setNextStep } = require('../fetch');
const messages = require('./messages');

module.exports = async (client, message) => {
    const { from, body } = message;

    if (body === '0' || body === '*0*' || body.toLowerCase() === 'voltar') {
        await setNextStep('s1', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    const FAQOption = messages.FAQOption(body);
    console.log("FAQOption", FAQOption);
    if (FAQOption) {
        await setNextStep('s2', from);
        await client.sendText(from, FAQOption);
        await client.sendText(from, messages.newFAQOption());
        return console.log("Mensagem enviada");
    } else {
        await setNextStep('s2', from);
        await client.sendText(from, messages.invalidOption(`*1* a *13*`));
        return console.log("Mensagem enviada");
    }
}