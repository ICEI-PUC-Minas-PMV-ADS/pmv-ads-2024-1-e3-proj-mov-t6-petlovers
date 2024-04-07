# Plano de Testes de Usabilidade

O objetivo desse teste visa avaliar a usabilidade do sistema PetLovers. Os participantes realizarão uma série de tarefas que incluem identificar problemas na interface e interação do sistema. 

Durante o desenvolvimento do projeto, o teste heurístico será aplicado para avaliar a usabilidade do sistema, e nas fases finais do projeto, será realizada uma avaliação funcional para verificar o cumprimento dos requisitos e o funcionamento adequado do sistema.


## Instruções:

Navegue pelo sistema e execute as tarefas conforme descritas.
Observe e registre quaisquer dificuldades encontradas durante a execução das tarefas.
Avalie a facilidade de uso do sistema e faça anotações sobre qualquer aspecto que possa ser melhorado.

### Tarefas:

#### 1. RF-001: Cadastro de Novo Usuário 

Instruções: <br>
Acesse nossa aplicação e na barra inferior clique no ícone do usuário, que irá para a página de login. <br>
Na página de login, clique no link "Cadastre-se aqui", que será redirecionado para a página de cadastro. <br>
Preencha o formulário de cadastro com informações válidas de um usuário com mais de 18 anos. <br>
Clique em salvar e a página de cadastro do pet aparecerá na tela. <br>
O cadastro será concluído após o preenchimento do cadastro do pet.<br> <br>



#### 2. RF-002: Cadastro de Perfil de Animal de Estimação

Instruções: <br>
Ao finalizar o seu cadastro, a tela de cadastro do pet aparecerá simultaneamente. <br>
Preencha o formulário com informações válidas sobre o seu animal de estimação, e faça o upload de uma imagem do seu pet. <br>
Clique em cadastrar. <br>
A página de login aparecerá na tela. Insira suas credenciais para logar na aplicação. <br>
Na barra do menu inferior, clique no ícone do usuário e em seguida "ver perfil pet". <br>
Você será redirecionado para o perfil do seu pet.<br> <br>



#### 3. RF-003: Modificação de Informações do Usuário 

Instruções: <br>
Acesse a área do usuário clicando no ícone do usuário na barra inferior. <br>
Clique em "editar meus dados". <br>
Tente alterar algo e verifique se as alterações foram salvas corretamente e refletidas no perfil. <br> <br>


#### 4. RF-003: Modificação de Informações do Pet

Instruções: <br>
Acesse a área do usuário clicando no ícone do usuário. <br>
Clique em "Editar dados pet". <br>
Tente alterar algo e verifique se as alterações foram salvas corretamente e refletidas no perfil. <br> <br>



#### 4. RF-004: Busca e Visualização de Perfis de Outros Pets

Instruções: <br>
Na home page, clique em "buscar" no banner roxo, ou em "ver mais" na seção abaixo onde há os cards de pets. <br>
Realize uma busca por algum critério específico. <br>
Visualize o perfil de pelo menos um outro pet. <br>
Verifique se as informações exibidas são de acordo com a sua busca. <br><br>


#### 6. RF-005: Curtir (Like) ou Recusar Perfis de Outros Pets (dislike)

Instruções: <br>
Na página de busca, visualize pelo menos dois perfis de outros pets. <br>
No primiero perfil selecione o ícone de coração (dar like),  em no outro recuse (dislike) clicando em "X". <br>
Verifique se o card do pet selecionado some da tela em ambas as situações. <br> <br>



#### 7. RF-006: Notificação de Match - (Teste feito somente pelos desenvolvedores)

Instruções: <br>

Esse teste em específico será feito pelo o time de desenvolvedores, onde iremos simular um "match" manualmente, usando contas de teste. Vamos configurar dois perfis e fazer com que ambos "dêem like" um no outro para gerar um "match". Dessa forma, poderemos observar se a notificação de "match" é enviada corretamente para os dois usuários. <br><br>


#### 8. RF-007: Exibição de Ícone de Mensagens Instantâneas - (Teste feito somente pelos desenvolvedores)

Instruções: <br>

Clique em Notificação e no perfil que deu um match. Você será redirecionado para o perfil do pet, e verifique se o ícone do WhatsApp está visível. <br>
Confirme se ao clicar nele você é redirecionado à página do WhatsApp para conversar com o tutor do pet que deu match. <br> <br>


#### 09. RF-008: Avaliação da Experiência - (Teste feito somente pelos desenvolvedores)

Instruções: <br>
Ao clicar no ícone do WhatsApp, uma janela de avaliação será exibida. Nesta janela, você poderá avaliar a experiência utilizando as estrelas, variando de 1 a 5, onde 5 representa a nota mais alta. <br>
Após atribuir a nota desejada, clique em "enviar" ou "cancelar" e verifique se a janela será fechada corretamente. <br> <br>


#### 10. RF-009: Fazer o login na aplicação

Instruções: <br>
Acesse a página de login do sistema. <br>
Verifique se é possível fazer login com as credenciais cadastradas anteriormente. <br>
Confirme se o acesso à área restrita é concedido após o login. <br> <br>



### Análise Heurística

Segue abaixo os critérios do teste heurístico que serão aplicados: <br>

1. <b>Visibilidade do Status do Sistema:</b> Devemos verificar se a interface mantém os usuários informados, em tempo real, de onde estão e o que está acontecendo na tela.
   
2. <b>Controle e Liberdade para o Usuário:</b> Verificar se o sistema permite que o usuário execute as ações que quiser, e no caso de se arrepender, existir a possibilidade de desfazer a ação de forma simples e visível.
   
3. <b>Prevenção de Erros:</b> Verificar se o sistema previne erros do usuário, seja confirmando se ele quer executar uma ação ou avisá-lo que não concluiu alguma tarefa.
   
4. <b>Eficiência e Flexibilidade de Uso e Navegabilidade:</b> Verificar se o sistema é intuitivo tanto para usuários leigos quanto para experientes, permitindo a realização rápida de tarefas com a menor quantidade possível de cliques. Avaliar a facilidade de navegação pelo sistema, incluindo a clareza dos menus, a intuitividade dos botões de navegação e a consistência na estrutura de navegação.
   
5. <b>Consistência e Padronização:</b> Verificar se os elementos de interface (cores, botões, campos, etc.) possuem consistência visual e de design. <br>
<br>


### Feedback

Os participantes compartilharão suas opiniões sobre a usabilidade do sistema ao responderem um questionário composto por perguntas abertas e fechadas, e também utilizaremos uma escala de resposta que varia de 1 a 5, sendo:

1: Muito Insatisfatório  <br>
2: Insatisfatório  <br>
3: Neutro  <br>
4: Satisfatório  <br>
5: Muito Satisfatório  <br> <br>



### Seleção dos participantes

Nossa pesquisa de usabilidade abrangerá uma ampla gama de participantes, incluindo não apenas os desenvolvedores diretamente envolvidos no projeto, mas também amigos, familiares e outros usuários que se encaixem no perfil do público-alvo do sistema. Essa abordagem diversificada garantirá uma avaliação abrangente da usabilidade do sistema, proporcionando um feedback valioso a partir de diferentes perspectivas e experiências. <br>
<br>


### Local e Ambiente de Avaliação

Todos os procedimentos relativos aos testes de usabilidade serão realizados por meio da pesquisa online, garantindo comodidade e praticidade para todos os envolvidos.


