const axios = require("axios");
const steps = require("./steps");
const { getUser, submitNewUser } = require("./fetch");

async function start(client, message) {
    const { from, sender } = message;
    // ? For add client.reply() add "id" in to above defragment
    let { pushname } = sender;

    const user = await getUser(from);

    let step = "s0";

    if (user) {
        console.log("USER	===> JÁ CADASTRADO");
        step = user.step;
    } else {
        console.log("USER	===> NÃO CADASTRADO");
        const newUser = await submitNewUser(from, pushname);
        if (newUser) {
            console.log("USER	===> CADASTRADO");
            step = 's0';
        } else {
            console.log("USER	===> FALHA AO CADASTRAR");
            step = 's0';
            return client.sendText(from, "Desculpe, não conseguimos cadastrar você. Tente novamente.");
        }
    }

    console.log('STEP	===>', step);
    if (steps[step]) {
        await steps[step](client, message);
    } else {
        console.log(`PASSO INEXISTENTE`);
    }
}

const actions = {
    start: (client, message, data) => start(client, message, data)
}

module.exports = actions;