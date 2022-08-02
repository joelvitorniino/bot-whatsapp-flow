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

    if (body === "1") {
        let number = from.split('@')[0];
        number = number.split('55')[1];
        const setData = await setDataSubmit(from, "phone", number);
        if (setData.error) {
            await client.sendText(from, setData.message.text);
            return console.log("Mensagem enviada");
        }
    } else {
        let number = body.replace(/[^0-9]/g, '');
    
        if (number.startsWith('0')) {
            number = number.substring(1);
        }
        
        if (number.length !== 11 && number.length !== 10) {
            await setNextStep('s5', from);
            await client.sendText(from, messages.phoneInvalid());
            return console.log("Mensagem enviada");
        }
    
        const setData = await setDataSubmit(from, "phone", number);
        if (setData.error) {
            await client.sendText(from, setData.message.text);
            return console.log("Mensagem enviada");
        }
    }
    await client.sendText(from, messages.cepSubmit());
    await setNextStep('s6', from);
    console.log("Mensagem enviada");
}