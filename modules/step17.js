const { decryptMedia } = require('@open-wa/wa-decrypt');
const { setNextStep, setDataSubmit } = require('../fetch');
const messages = require('./messages');

module.exports = async (client, message) => {
    const { from, body, type, mimetype } = message;
    const uaOverride = 'WhatsApp/2.2147.16 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36';

    if (body === "0" || body === "*0*" || body.toLowerCase() === "voltar") {
        await client.sendText(from, messages.reinitSubmit());
        await setNextStep('s1', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    if (type === "document" || type === "image") {
        const mediaData = await decryptMedia(message, uaOverride);
        const base64 = `data:${mimetype};base64,${mediaData.toString('base64')}`;
        await client.sendFile(from, base64, `fatura.${mimetype}`, "Confirmação de recebimento");
        await setNextStep('s18', from);
        await client.sendText(from, messages.termsSubmit());
        return console.log("Mensagem enviada");
    } else {
        await setNextStep('s17', from);
        await client.sendText(from, messages.energyBillInvalid());
        return console.log("Mensagem enviada");
    }
}