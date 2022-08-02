module.exports = {
    hi: (time) => `${time}, você está na Prana.\n${options}`,
    howCanIHelp: () => options,
    SimulatedDiscont: () => `A simulação é feita em nosso site, é fácil e rápido.\nAcesse: prana.tec.br`,
    FAQ: () => `*Perguntas frequentes*\nEscolha o número da opção que desejada:\n${FAQ}`,
    newFAQOption: () => `Caso tenha mais uma dúvida, use seus respectivos números acima (*1* a *13*) ou digite *0* para voltar ao menu.`,
    FAQOption: (option) => FAQOptions[option] || false,
    invalidOption: (valids) => `Essa opção não é válida, experimente um dos números da mensagem que te mandei acima (${valids}) ou digite *0* para voltar ao menu e recomeçar.`,
    initSubmit: () => `Iniciando seu cadastro.\n\nVocê pode digitar *0* caso queira recomeçar a qualquer momento.`,
    reinitSubmit: () => `Removi seu cadastro, vamos recomeçar.`,
    nameSubmit: () => `Me informe, primeiramente, seu nome completo.`,
    nameInvalid: () => `Nome completo inválido, tente novamente:`,
    emailSubmit: () => `Ótimo, agora me informe seu e-mail.`,
    emailInvalid: () => `E-mail inválido, tente novamente:`,
    phoneSubmit: () => `Preciso de seu número de telefone, me informe um número ex: _11999888777_ ou caso queria usar esse que estou conversando com você digite *1*.`,
    phoneInvalid: () => `Número de telefone inválido, lembre-se de seguir o ex: _11999888777_, tente novamente:`,
    cepSubmit: () => `Agora me informe seu CEP.`,
    cepInvalid: () => `CEP inválido, lembre-se de utilizar o formato: 00000-000, tente novamente:`,
    showWithCep: (data) => `Encontrei o seguinte endereço para o CEP\n${data}\nPodemos prosseguir assim?\n*1*: Sim\n*2*: Não`,
    ufSubmit: () => `Agora me informe a sigla de seu estado.`,
    ufInvalid: () => `Estado inválido, lembre-se de utilizar o formato: XX, tente novamente:`,
    citySubmit: () => `Agora me informe sua cidade.`,
    cityInvalid: () => `Cidade inválida, tente novamente:`,
    neighborhoodSubmit: () => `Agora me informe seu bairro.`,
    neighborhoodInvalid: () => `Bairro inválido, tente novamente:`,
    streetSubmit: () => `Agora me informe sua rua.`,
    streetInvalid: () => `Rua inválida, tente novamente:`,
    person: () => `Você é pessoa Física ou Jurídica?\nEscolha o número da opção desejada:\n*1* - Pessoa Física\n*2* - Pessoa Jurídica\n\n*Caso seu cadastro seja em Pessoa Física, conta mínima de R$250,00.`,
    cpfSubmit: () => `Agora me informe seu CPF.`,
    cpfInvalid: () => `CPF inválido, use o formato: XXX.XXX.XXX-XX, tente novamente:`,
    cnpjSubmit: () => `Agora me informe seu CNPJ.`,
    cnpjInvalid: () => `CNPJ inválido, use o formato: XX.XXX.XXX/XXXX-XX, tente novamente:`,
    instalationNumber: () => `Agora me informe o número da instalação.`,
    instalationNumberInvalid: () => `Número de instalação inválido, tente novamente:`,
    energyDistributor: () => `Agora me diga qual o seu distribuidor de energia.`,
    energyDistributorInvalid: () => `Distribuidor de energia inválido, tente novamente:`,
    energyBillSubmit: () => `Agora me envie sua conta de energia, se for foto, verifique-se de que esteja legível.`,
    energyBillInvalid: () => `Conta de energia inválida, preciso de um arquivo, foto ou PDF, tente novamente:`,
    termsSubmit: () => `Agora preciso saber se está ciente da utilização dos seus dados para cadastro de acordo com a Lei de Proteção de Dados.\n*1*: Sim, estou ciente.\n*2*: Não, não estou ciente.`,
    termsAccepted: () => `Obrigado por aceitar os termos de uso.`,
    termsRejected: () => `Você não aceitou os termos de uso, por isso, estou desfazendo todo o cadastro.`,
    success: () => `*Cadastro realizado com sucesso! 🥳*\n\nAgora analisaremos a sua conta de luz e solicitaremos um documento com foto. Assim, verificaremos a melhor usina de geração sustentável para poder te atender!`,
}

const options = `Escolha o número da opção desejada:\n
*1*: Simular desconto;
*2*: Cadastrar-se;
*3*: Enviar conta PDF;
*4*: Duvidas.
`

const FAQ = `*1*: Quais são as vantagens na minha participação na fazenda solar?
*2*: O que é o processo de "Compensação de Crédito" e como ele é usado?
*3*: O que devo fazer para usufruir dos benefícios da fazendo solar?
*4*: Quais são os requisitos para a adesão?
*5*: Precisarei pagar algo para a realização da adesão, ou em alguma etapa, para começar a receber meu benefício?
*6*: Será necessária a instalação de algum tipo de equipamento ou realizar uma visita em minha casa?
*7*: Como saberei que o processo de adesão foi concluído com sucesso?
*8*: Quando começarei a receber os benefícios da fazenda solar?
*9*: Como ficará a minha relação com a distribuidora de energia após a adesão?
*10*: Se ocorrer algum problema com a energia em meu local, a quem devo recorrer?
*11*: Caso o tempo esteja nublado ou chuvoso, ficarei sem energia?
*12*: Posso sair deste processo, caso queira, a qualquer momento?
*13*: Caso eu queira sair deste processo depois de já ter realizado a adesão, quais procedimentos devo tomar?

*0*: Voltar.`

const FAQOptions = {
    1: `Sua conta de luz também terá uma economia de até 30% sobre o valor atual, dependendo do seu estado e distribuidora, através do processo de compensação de crédito pela geração em nossa fazenda solar.`,
    2: `Através da Resolução Normativa nº 482 de 2012, regulamentada pela ANEEL, consumidores de energia elétrica em todo o país passaram a ter acesso à produção de sua própria energia elétrica, seja pela instalação de painéis solares no telhado do seu estabelecimento ou participando de uma fazenda solar. A energia proveniente destes sistemas é injetada na rede de distribuição e passa a gerar créditos para o gerador.\n\nA maneira na qual a compensação de crédito ocorre é muito simples, e é automática. Toda energia gerada em nossa fazenda solar é injetada na rede da distribuidora de energia, neste caso as distribuidoras parceiras, criando créditos de energia (medidos em kilowatt-horas). Como você passa a ser responsável por um lote da fazenda solar, estes créditos passam a ser gerados por você, e são usados para descontar o seu consumo total de energia proveniente da distribuidora.`,
    3: `Primeiro é necessário realizar a adesão em nosso sistema. O processo é feito totalmente online, diretamente em nosso site. Após o preenchimento dos dados necessários, enviaremos a você um e-mail confirmando o recebimento.\nE é só isso!\nA partir deste ponto você precisa apenas aguardar enquanto nós enviaremos notificações contendo informações sobre o andamento de seu processo e do status da fazenda solar.`,
    4: `Ao confirmar a entrada no processo de adesão em nosso sistema, as seguintes condições deverão ser atendidas para podermos concluir o processo:\n- Caso o registro seja realizado para uma pessoa jurídica, sua empresa deve informar o CNPJ, senão, sendo feito por uma pessoa física, o CPF;\n- O CNPJ, ou o CPF, deve estar cadastrado na distribuidora;\n- É preciso ter um consumo mensal de energia elétrica deve pelo menos R$250,00 para pessoas físicas e R$500,00 para pessoas jurídicas.;\n- O CNPJ, ou o CPF, informado deve estar adimplente com a distribuidora.\n- Após serem submetidos estes dados, será feita uma revisão do perfil do cliente.`,
    5: `Não. A adesão é realizada de maneira totalmente digital, não necessitando, por parte do cliente, qualquer tipo de pagamento para finalizar o processo.`,
    6: `Não. Todo equipamento necessário para o funcionamento e manutenção da fazenda solar é coberto pelo Prana, não precisando do cliente para qualquer tipo de ação. Não é necessário nenhum tipo de visita domiciliar, dado que todo nosso processo é realizado de maneira digital e pode ser acessado online, pelo portal de nosso site.`,
    7: `Assim que o processo for concluído, enviaremos um e-mail contendo a notificação da conclusão do processo.`,
    8: `Tendo concluído o processo de adesão, você será notificado, via e-mail, quando a fazenda solar entrar em fase de operação. A partir deste momento, os créditos começarão a ser considerados em sua conta num prazo de 30 a 60 dias.`,
    9: `Como a distribuidora, permanece como agente responsável pela distribuição da energia, você, mesmo após a adesão em nosso sistema, permanecerá como seu cliente, não alterando, portanto, nada do ponto de vista operacional.`,
    10: `A responsabilidade permanece da distribuidora local para solucionar qualquer tipo de problema técnico/operacional. Portanto, mesmo após a adesão em nosso sistema, é necessário reportar à distribuidora escolhida no cadastro em caso de qualquer problema no sistema de distribuição.`,
    11: `Não. Mesmo que a fazenda solar não gere energia, ainda assim você a receberá em seu estabelecimento. A mudança estará no valor pago no final do mês, onde o total consumido que não for compensado pelo crédito de energia (por não ter sido gerado) é pago à distribuidora usando o preço estabelecido por ela.`,
    12: `Sim. Os contratos de 12 meses não incidem fidelidade ou multas.\nÉ necessário, porém, realizar o aviso prévio para cancelar, com um prazo de antecedência de até 90 dias.\nNo caso de contratos com prazo acima de 12 meses, para o cancelamento deve ser feito um aviso prévio de 60 dias da data de término do contrato, para que não incida multa ao final do prazo. Se solicitado o cancelamento antecipado da data de termino do contrato, incidirá uma multa de rescisão de 30% da média mensal total dos meses restante para o fim do contrato.`,
    13: `Para cancelar/sair do processo, depois de se ter realizado a adesão, é necessário enviar um e-mail para *atendimento@prana.tec.br* com o pedido de saída.`,
}