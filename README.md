<h1 align="center">Olá, bem vindo! 👋</h1>
<p align="center">
<img alt="Versão" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
<img alt="Licença: APACHE 2.0" src="https://img.shields.io/badge/License-APACHE 2.0-yellow.svg" />
<img alt="npm version" src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green"/>
<img alt="node-version" src="https://img.shields.io/node/v/@open-wa/wa-automate"/>
<img alt="made-with-node" src="https://img.shields.io/badge/Made%20with-node-1f425f.svg"/>

</p>

> Olá, esse bot de whatsapp foi criado com foco em atendimento ao cliente.

## Instalando bot
```bash
git clone https://github.com/kaualandi/bot-whatsapp-flow.git
```
```bash
cd bot-whatsapp-flow
```
```bash
npm install
```

## Variáveis de ambiente
Você precisará de um arquivo `.env` parecido com esse:
```env
USING=PRODUCTION ENVIRONMENT VARIABLES
MAINTENANCE_MODE=false
BASEURL_BOTINFORS=http://localhost:3004
```
Basta agora preencher os dados:
- **USING:** é figurativo, apenas se mostrará qual variável está sendo usada, no caso de ter duas.
- **MAINTENANCE_MODE:** é um flag que indica se o bot está em modo de manutenção, se `true` ele responderá avisando seu estado e não fará mais nada.
- **BASEURL_BOTINFORS:** se você não alterar o script server do `package.json` será por padrão `http://localhost:3004`. É essencial para o funcionamento do bot.

Os demais são dados do cliente, sendo assim não são necessários preencher.


### Ambiente de Desenvolvimento

Caso não tenha o [json-server](https://www.npmjs.com/package/json-server) globalmente, o instale.

```bash
npm install -g json-server
```

Se estiver no ambiente de desenvolvimento, é só rodar o `npm run server` que ele iniciará em podo watch.

Dessa forma, caso queria alterar a porta, você encontrará no arquivo `package.json` em `scripts`, busque por `server` altere a porta que fica após a flag `--port`.

### Ambiente de Produção

Acredito que você não queria que o server fique ocupando uma instância do terminal. Devemos então prepará-lo para o [PM2](https://pm2.keymetrics.io/).

> Não ensinarei aqui como configurar o [PM2](https://pm2.keymetrics.io/). Mas se quiser, você pode ver o [guia](https://pm2.keymetrics.io/docs/usage/quick-start/) para isso.
> Verifique de instalar também o suporte para Typescript do PM2.

Se ainda não estiver, entre na pasta do servidor

```bash
cd server
```
```bash
npm install
```
Você pode alterar a porta do server acessando a linha 5 da `index.js` da pasta `server`.

Inicie o server com o PM2:
```bash
pm2 start index.ts --name wabot-server
```

## Execução do Bot

Volte para a pasta raíz do bot:
```bash
cd ..
```

```bash
npm start
```

Escaneie o QR Code como se estivesse conectando ao whatsapp web e mande uma mensagem para o número que usou para escanear.

> Não se esqueça de verificar se o multidevices (Multiplos Dispositivos) está ativado em seu whatsapp.

Se quiser usar o pm2, execute:
```bash
pm2 start app.ts --name wabot-bot
```
## Autor

👤 **Kauã Landi**

* Website: https://kaualf.com
* Github: [@kaualandi](https://github.com/kaualandi)
* LinkedIn: [@kaualandi](https://linkedin.com/in/kaualandi)
* Instagram: [@kaua.landi](https://www.instagram.com/kaua.landi/)

## 🤝 Contribuição

Contribuições, problemas e solicitações de recursos são bem-vindos! <br/> Sinta-se à vontade para verificar a [página de problemas](https://github.com/kaualandi/bot-whatsapp-flow/issues). Você também pode dar uma olhada na [página de contribuição](https://github.com/kaualandi/bot-whatsapp-flow/pulls).

## 🥰 Mostre seu apoio

Dê uma ⭐️ se este projeto te ajudou!
