const { setNextStep, removeLastItemToCart, getCartList, dropCart, getCart, getUser } = require('../fetch');
const messages = require('./messages');

const options = {
    1: async (client, message) => {
        const { from } = message;
        await removeLastItemToCart(from);
        await setNextStep('s3', from);
        await client.sendText(from, messages.whatIsproductId());
        console.log("Mensagem enviada");
    },
    2: async (client, message) => {
        const { from } = message;
        const cart = await getCartList(from);
        await client.sendText(from, cart);
        await setNextStep('s5', from);
        await client.sendText(from, messages.whatElse());
        console.log("Mensagem enviada");
    },
    3: async (client, message) => {
        const { from } = message;
        const cart = await dropCart(from);
        await client.sendText(from, messages.dropedCart());
        await setNextStep('s5', from);
        await client.sendText(from, messages.whatElse());
        console.log("Mensagem enviada");
    },
    4: async (client, message) => {
        const { from } = message;
        const cartItens = await getCart(from);
        const user = await getUser(from);
        if (!user?.email) {
            await setNextStep('s1', from);
            await client.sendText(from, messages.whatIsYourEmail());
            console.log("Mensagem enviada");
            return;
        }
        if (cartItens.length > 0) {
            const cart = await getCartList(from);
            await client.sendText(from, cart);
            await setNextStep('s6', from);
            await client.sendText(from, messages.confirmFinish());
            console.log("Mensagem enviada");
        } else {
            await client.sendText(from, messages.emptyCart());
            await setNextStep('s2', from);
            await client.sendText(from, messages.howCanIHelp());
            console.log("Mensagem enviada");
        }
    },
    5: async (client, message) => {
        const { from } = message;
        await setNextStep('s0', from);
        await client.sendText(from, messages.clt());
        console.log("Mensagem enviada");
    },
}

module.exports = async (client, message) => {
    const { from, body } = message;

    if (options[body]) {
        await options[body](client, message);
    } else {
        await client.sendText(from, messages.invalidOption());
        await setNextStep('s5', from);
        await client.sendText(from, messages.whatElse());
    }
    return;
}