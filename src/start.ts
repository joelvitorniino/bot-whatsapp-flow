import { messages } from "./messages";
import { Client, Message } from "@open-wa/wa-automate";
import { getUser, submitNewUser } from "./service/user.service";
import { steps } from "./steps";

export async function start(client: Client, message: Message) {
  const { from, sender } = message;
  // ? For add client.reply() add "id" in to above defragment
  let { pushname } = sender;

  // ? Submiting proccess
  let step = 0;
  const user = await getUser(from);
  console.log(user);

  if (user.status !== 200 && user.status !== 404) {
    await client.sendText(from, messages.serverError());
    return console.log("Mensagem enviada");
  }

  if (!user.data) {
    console.log("USER	===> NÃO CADASTRADO");
    const newUser = await submitNewUser(from, pushname);

    if (newUser) {
      console.log("USER	===> CADASTRADO");
      step = 0;
    } else {
      console.log("USER	===> FALHA AO CADASTRAR");
      step = 0;
      await client.sendText(from, messages.submitError());
      return;
    }
  } else {
    console.log("USER	===> JÁ CADASTRADO");
    step = user.data?.step;
  }

  // ? Steps proccess
  console.log('STEP	===>', step);
  const currentStep = steps[step as keyof typeof steps];
  if (currentStep) {
      await currentStep(client, message);
  } else {
      console.log(`PASSO INEXISTENTE`);
  }
}
