const path = require('path');
const { setNextStep, checkSubmit, startSubmit } = require('../fetch');
const messages = require('./messages');

const options = {
    1: async (client, message) => {
        const { from } = message;
        await client.sendText(from, messages.SimulatedDiscont());
        
        await setNextStep('s1', from);
        console.log("Mensagem enviada");
    },
    2: async (client, message) => {
        const { from } = message;
        const submitStatus = await checkSubmit(from);
        if (submitStatus.error) {
            const submitRegister = await startSubmit(from);
            if (!submitRegister) {
                await setNextStep('s1', from);
                await client.sendText(from, `Desculpe, não conseguimos cadastrar você. Tente novamente.`);
                return await client.sendText(from, messages.howCanIHelp());
            }
        }
        await client.sendText(from, messages.initSubmit());
        await setNextStep('s3', from);
        await client.sendText(from, messages.nameSubmit());
        console.log("Mensagem enviada");
    },
    3: async (client, message) => {
        const { from } = message;
        const menu = path.resolve(__dirname, '../media/fatura.pdf');
        await client.sendFile(from, menu, "fatura.pdf", "Fatura");
        await client.sendText(from, messages.howCanIHelp());
        await setNextStep('s1', from);
        console.log("Mensagem enviada");
    },
    4: async (client, message) => {
        const { from } = message;
        await client.sendText(from, messages.FAQ());
        await setNextStep('s2', from);
        console.log("Mensagem enviada");
    }
}

module.exports = async (client, message) => {
    const { from, body } = message;

    if (body === '0' || body === '*0*' || body.toLowerCase() === 'voltar') {
        await setNextStep('s1', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    if (options[body]) {
        await options[body](client, message);
    } else {
        await setNextStep('s1', from);
        await client.sendText(from, messages.invalidOption(`*1* a *3*`));
        console.log("Mensagem enviada");
    }
}