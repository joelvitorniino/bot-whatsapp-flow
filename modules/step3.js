const { setNextStep, getProduct, addToCart } = require('../fetch');
const messages = require('./messages');

module.exports = async (client, message) => {
    const { from, body } = message;

    if (body.toLowerCase() === "voltar") {
        await setNextStep('s2', from);
        await client.sendText(from, messages.howCanIHelp());
        return console.log("Mensagem enviada");
    }

    const [ productId, quantity ] = body.split(" ");
    
    const product = await getProduct(productId);

    if (Object.keys(product).length === 0) {
        await client.sendText(from, messages.invalidProduct());
        await setNextStep('s3', from);
        await client.sendText(from, messages.whatIsproductId());
        return console.log("Mensagem enviada");
    }

    if (isNaN(quantity)) {
        await client.sendText(from, messages.invalidProductQuantity());
        await setNextStep('s3', from);
        await client.sendText(from, messages.whatIsproductId());
        return console.log("Mensagem enviada");
    }

    await addToCart(productId, from, parseInt(quantity));
    await client.sendText(from, messages.heChooseProduct(product.name, quantity));
    await setNextStep('s4', from);
    await client.sendText(from, messages.confirmProduct());
    console.log("Mensagem enviada");
}