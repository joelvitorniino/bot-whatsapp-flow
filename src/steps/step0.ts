import { Message } from '@open-wa/wa-automate';
import { Client } from '@open-wa/wa-automate';
import { updateUserStep } from '../service/user.service';

export async function step0(client: Client, message: Message) {
  await client.sendText(message.from, 'Olá, tudo bem?');

  // ? Update user step
  await updateUserStep(message.from, 1);

  return;
}