const { setNextStep, setDataSubmit } = require('../fetch');
const messages = require('./messages');

const options = {
    1: async (client, message) => {
        const { from, body } = message;
        const setData = await setDataSubmit(from, "person", "cpf");
        if (setData.error) {
            await client.sendText(from, setData.message.text);
            return console.log("Mensagem enviada");
        }
        await setNextStep('s13', from);
        await client.sendText(from, messages.cpfSubmit());
        return console.log("Mensagem enviada");
    },
    2: async (client, message) => {
        const { from, body } = message;
        const setData = await setDataSubmit(from, "person", "cnpj");
        if (setData.error) {
            await client.sendText(from, setData.message.text);
            return console.log("Mensagem enviada");
        }
        await setNextStep('s14', from);
        await client.sendText(from, messages.cnpjSubmit());
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
        await setNextStep('s12', from);
        await client.sendText(from, messages.invalidOption("*1* e *2*"));
        return console.log("Mensagem enviada");
    }
}