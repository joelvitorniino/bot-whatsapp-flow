import { Client, Message } from "@open-wa/wa-automate";
import { start } from "./start";

const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

async function msgHandler(client: Client, message: Message) {
  try {
    const { from, sender, isGroupMsg, chat, caption, isMedia, mimetype } = message;
        let { body } = message;
        let { pushname, verifiedName } = sender;
        pushname = pushname || verifiedName;
        const commands = caption || body || "";
        const args = commands.split(" ");

        if (!mimetype && body === "") return;

        console.log("---------------------------------------");
        console.log('DATE TIME	===>', new Date().toLocaleString('pt-br'));
        if (isGroupMsg) {
            return console.log("\x1b[1;31mMENSSAGE GROUP. IGNORING\x1b[0m");
        }

        console.log("FROM 	===>", pushname);
        console.log("FROM_ID 	===>", chat.id);
        console.log("ARGUMENTS	===>", isMedia ? `[${mimetype}]` :args);
        console.log("BODY	===>", mimetype ? `[${mimetype}]` : body);

        if (isMaintenanceMode) {
            console.log("\x1b[1;31mMAINTENANCE_MODE ON! IGNORING\x1b[0m");
            return client.sendText(from, "🚧️ *Estou em manutenção.* 🚧️\n\nEstão trabalhando para que eu fique melhor,\nou para que algum problema seja resolvido. 😁\nVolte mais tarde, e tente novamente. 😉");
        }
        
        start(client, message);
  } catch (err) {
    console.log("\x1b[1;31m[ERROR]\x1b[0m", err);
  }
}

export default msgHandler;
