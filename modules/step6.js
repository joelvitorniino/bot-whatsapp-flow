const { setNextStep, setDataSubmit, getCep } = require('../fetch');
const messages = require('./messages');

module.exports = async (client, message) => {
    const { from, body } = message;

    if (body === "0" || body === "*0*" || body.toLowerCase() === "voltar") {
        await client.sendText(from, messages.reinitSubmit());
        await setNextStep('s1', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    const cepNumbers = body.replace(/[^0-9]/g, '');

    if (cepNumbers.length !== 8) {
        await setNextStep('s6', from);
        await client.sendText(from, messages.cepInvalid());
        return console.log("Mensagem enviada");
    }

    const cep = await getCep(cepNumbers);

    if (cep.erro) {
        await setNextStep('s6', from);
        await client.sendText(from, messages.cepInvalid());
        return console.log("Mensagem enviada");
    }

    const setData = await setDataSubmit(from, "cep", body);
    if (setData.error) {
        await client.sendText(from, setData.message.text);
        return console.log("Mensagem enviada");
    }

    const uf = cep.uf;
    const city = cep.localidade
    const neighborhood = cep.bairro
    const street = cep.logradouro

    let stringToSend = '';

    if (uf !== '') {
        stringToSend += `Estado: ${uf}\n`;
        await setDataSubmit(from, "uf", uf);
    }
    if (city !== '') {
        stringToSend += `Cidade: ${city}\n`;
        await setDataSubmit(from, "city", city);
    }
    if (neighborhood !== '') {
        stringToSend += `Bairro: ${neighborhood}\n`;
        await setDataSubmit(from, "neighborhood", neighborhood);
    }
    if (street !== '') {
        stringToSend += `Rua: ${street}\n`;
        await setDataSubmit(from, "street", street);
    }

    await client.sendText(from, messages.showWithCep(stringToSend));
    await setNextStep('s7', from);
    console.log("Mensagem enviada");
}