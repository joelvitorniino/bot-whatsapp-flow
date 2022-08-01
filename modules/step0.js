const { setNextStep } = require('../fetch');
const messages = require('./messages');

module.exports = async (client, message) => {
    const { from } = message;

    const stamp = new Date();
    const hours = stamp.getHours();
    let time;
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }

    await client.sendText(from, messages.hi(time));
    await setNextStep('s1', from);
    console.log("Mensagem enviada");
}