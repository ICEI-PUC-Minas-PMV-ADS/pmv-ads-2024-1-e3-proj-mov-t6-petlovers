# Plano de Testes de Software


|Caso de Teste         |CT-01  Cadastrar Usuários (Senha e Confirmação de Senha mascarados)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Verificar se os campos "Senha" e "Confirmação de Senha" são mascarados. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).|
|Critério de Êxito|Os caractéres do campo "Senha" e "Confirmaçao de Senha" devem ser mascarados.| </br></br>

|Caso de Teste         |CT-02  Cadastrar Usuários (Formato Data de Nascimento)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Ao digitar um formato inválido para o campo "Data de Nascimento", verificar se o aplicativo exibe uma mensagem indicando o formato correto do campo "Data de Nascimento".|
|Passos |Acessar o aplicativo; </br>Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos: nome completo, data de nascimento no formato MM/dd/yyy.|
|Critério de Êxito|Exibir uma mensagem solicitando o preenchimento da data de Nascimento no formato dd/MM/yyyy.|</br></br>
 
|Caso de Teste         |CT-03  Cadastrar Usuários (Menores 18 anos)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Verificar se o aplicativo permite cadastro de menores de 18 anos.|
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento para menor de 18 anos, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "Salvar". |
|Critério de Êxito|O cadastro não será salvo e a mensagem: "Para se cadastrar nesse aplicativo é necessário ser maior de 18 anos!", deverá ser exibida.|</br></br>

|Caso de Teste         |CT-04  Cadastrar Usuários (Preenchimento correto)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Verificar se é possível ir para tela "Cadastro de pet", quando as informações são preenchidas corretamente. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "Salvar" para visualizar a próxima tela. |
|Critério de Êxito|O aplicativo deverá exibir a próxima tela, pois todos os dados foram preenchidos. |</br></br>

|Caso de Teste         |CT-05  Cadastrar Usuários (Upload de imagens)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Verificar se é possível inserir imagem na tela "Cadastro de Pet" |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem e adicionar uma imagem.|
|Critério de Êxito|A imagem inserida deverá aparecer na tela.|</br></br>

|Caso de Teste         |CT-06  Cadastrar Usuários (Cadastro pet)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Cadastrar o pet. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro deverá ser realizado, pois todas as informações foram preenchidas.|</br></br>

|Caso de Teste         |CT-07  Cadastrar Usuários (Não permite cadastro sem o nome do pet)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Nome do pet" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem.  </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe o nome do pet!" deverá aparecer na tela.|</br></br>

|Caso de Teste         |CT-08  Cadastrar Usuários (Não permite cadastro sem o nome do pet)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do usuário sem o campo "Sobre Mim" preenchido. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> Deixar o campo "Sobre Mim" sem preenchimento. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Nos informe as características do seu pet!" deverá aparecer na tela.|</br></br>

|Caso de Teste         |CT-09  Cadastrar Usuários (Não permite cadastro sem informar sexo do pet)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Sexo" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem.  </br> Adicionar as informações dos campos: "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe o sexo do pet!" deverá aparecer na tela.|</br></br>


|Caso de Teste         |CT-10  Cadastrar Usuários (Não permite cadastro sem a informação Raça)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Raça" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe a raça do pet!" deverá aparecer na tela.|




|Caso de Teste         |CT-11  Cadastrar Usuários (Não permite cadastro sem a informação Porte)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Porte" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor" e "Raça". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe o Porte do pet!" deverá aparecer na tela.|</br></br>





|Caso de Teste         |CT-12  Cadastrar Usuários (Não permite cadastro sem informar idade pet)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Idade do pet" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem.</br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet.  </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe a idade do pet do pet!" deverá aparecer na tela.|</br></br>




|Caso de Teste         |CT-13  Cadastrar Usuários (Validar extensão arquivo)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Validar extensão de arquivo para upload  |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem e adicionar a imagem com extensão JPG .|</br></br>
|Critério de Êxito|A imagem deve ser inserida.|




|Caso de Teste         |CT-14  Cadastrar Usuários (Validar extensão arquivo)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Validar extensão de arquivo para upload  |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem  e adicionar a imagem com extensão PNG.|</br></br>
|Critério de Êxito|A imagem deve ser inserida.|




 |Caso de Teste         |CT-15  Cadastrar Usuários (Validar extensão arquivo)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Validar extensão de arquivo para upload  |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem e adicionar a imagem  com extensão diferente de JPG e PNG.|</br></br>
|Critério de Êxito|A imagem não deverá ser inserida.|



|Caso de Teste         |CT-16  Login (Validar formato e-mail)|
|----------------------|--------------------------|
|Requisito Associado   |*RF-09* </br> O site deve possuir uma página de login. |
|Objetivo do Teste| Validar formato e-mail  |
|Passos |Acessar o aplicativo; </br> Selecionar no link "Login" na parte superior da tela ;  </br> Assim que redirecionado para tela "Login", preencher os campos obrigatórios (e-mail com formatação sem "@" e senha).</br> Clicar em "Entrar".|
|Critério de Êxito|O login não é realizado e uma Mensagem "Formato de e-mail inválido!" deverá aparecer na tela.|</br></br>



|Caso de Teste         |CT-17  Login (Aceitar perfil)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-09** </br> O site deve permitir que os usuários se cadastrem como tutores de cães, fornecendo informações relevantes sobre si e seus animais. |
|Objetivo do Teste| Garantir que o site aceite corretamente o perfil de um tutor de cães, validando as informações fornecidas pelo usuário. |
|Passos |<br>Acesse a página de registro de tutores no aplicativo.<br> Preencha os campos obrigatórios com informações válidas sobre o tutor e seu cão.<br> Envie o formulário de registro.<br>Verifique se o sistema aceita o registro do tutor sem erros aparentes.|
|Critério de Êxito| <br> O site deve aceitar o registro do tutor sem mostrar mensagens de erro. <br>As informações fornecidas pelo tutor devem ser armazenadas corretamente no banco de dados.|</br></br>




|Caso de Teste         |CT-18  Login (Recusar perfil)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-09** </br> O site deve ser capaz de recusar o perfil de um tutor de cães caso as informações fornecidas sejam inválidas ou incompletas. |
|Objetivo do Teste| Verificar se o site é capaz de identificar e recusar corretamente o perfil de um tutor de cães quando as informações fornecidas não atenderem aos critérios de validação. |
|Passos | <br> Acesse a página de registro de tutores no aplicativo. <br> Preencha os campos obrigatórios com informações inválidas ou incompletas sobre o tutor e seu cão.<br> Envie o formulário de registro.<br> Verifique se o sistema recusa o registro do tutor e exibe mensagens de erro apropriadas.|
|Critério de Êxito| <br> O sistema deve recusar o registro do tutor quando informações inválidas ou incompletas forem fornecidas. <br>Mensagens de erro adequadas devem ser exibidas para orientar o usuário sobre as correções necessárias.|</br></br>



|Caso de Teste         |CT-19  Login (Teste campo vazio)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-09** </br> O site deve validar campos vazios durante o processo de login para garantir que todas as informações necessárias sejam fornecidas.|
|Objetivo do Teste| Verificar se o sistema valida corretamente campos vazios durante o processo de login. |
|Passos | <br>Acesse a tela de login. <br> Deixe o campo de nome de usuário ou e-mail em branco. <br> Deixe o campo de senha em branco. <br>Pressione o botão de login..|
|Critério de Êxito| <br> O site deve exibir mensagens de erro indicando que os campos de nome de usuário/e-mail e senha são obrigatórios.|</br></br>

|Caso de Teste         |CT-20  Login (Teste de senha incorreta)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-09** </br> O site deve verificar a validade da senha inserida durante o processo de login. |
|Objetivo do Teste| Garantir que o site detecte corretamente senhas incorretas durante o processo de login. |
|Passos | <br> Acesse a tela de login. <br>Insira um nome de usuário ou e-mail válido. <br>Insira uma senha inválida. <br>Pressione o botão de login.|
|Critério de Êxito| <br> O sistema deve exibir uma mensagem de erro indicando que a senha inserida é incorreta.|



|Caso de Teste         |CT-21  Login (Teste de recuperação de senha)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-09** </br> O site deve fornecer uma maneira segura para os usuários recuperarem suas senhas em caso de esquecimento. |
|Objetivo do Teste| Verificar se o sistema permite que os usuários solicitem uma recuperação de senha, caso tenham esquecido suas senhas. |
|Passos | <br> Acesse a tela de login. <br> Clique no link "Esqueceu sua senha?". <br>Insira o e-mail associado à conta. <br>Pressione o botão de enviar/recuperar.|
|Critério de Êxito| <br> O site deve enviar um e-mail de recuperação de senha para o endereço fornecido pelo usuário, caso ele exista na base de dados.|</br></br>



|Caso de Teste         |CT-22  Login (Teste de limite de tentativas de login)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-09** </br> O site deve implementar um limite de tentativas de login para prevenir ataques de força bruta. |
|Objetivo do Teste| Verificar se o site impõe um limite de tentativas de login para prevenir ataques de força bruta. |
|Passos | <br> Acesse a tela de login. <br> Insira credenciais inválidas várias vezes até atingir o limite. <br>Tente fazer login novamente com credenciais válidas.|
|Critério de Êxito| <br> O site deve bloquear temporariamente a conta após exceder o limite de tentativas de login, exibindo uma mensagem indicando o bloqueio e fornecendo opções para desbloqueio, como recuperação de senha ou contato com o suporte.|</br></br>



|Caso de Teste         |CT-23  Modificar dados do usuário |
|----------------------|--------------------------|
|Requisito Associado   |**RF-03** </br> O sistema deve permitir que o usuário modifique suas informações. |
|Objetivo do Teste| Verificar se o usuário consegue modificar suas informações. |
|Passos |Na página inicial, clique no ícone de usuário para ser redirecionado para a página de login.<br> Insira sua credenciais  válidas. <br> Clique no ícone de usuário na barra de navegação inferior. Você será redirecionado para a tela "Meu Perfil". <br>Clique em "Editar meus dados". <br>Modifique o campo necessário e clique em "Salvar". |
|Critério de Êxito| <br> Um alerta aparecerá na tela informando que as novas informações foram salvas.|</br></br>


|Caso de Teste         |CT-24  Modificar dados do pet |
|----------------------|--------------------------|
|Requisito Associado   |**RF-03** </br> O sistema deve permitir que o usuário modifique as informações do seu pet. |
|Objetivo do Teste| Verificar se o usuário consegue modificar suas informações. |
|Passos | <br> Na página inicial, clique no ícone de usuário para ser redirecionado para a página de login. <br> Insira sua credenciais  válidas. <br> Clique no ícone de usuário na barra de navegação inferior. Você será redirecionado para a tela "Meu Perfil". <br>Clique em "Editar dados pet". <br>Modifique o campo necessário e clique em "Salvar". |
|Critério de Êxito| <br> Um alerta aparecerá na tela informando que as novas informações foram salvas.|</br></br>



|Caso de Teste         |CT-25  Excluir conta do usuário e do pet vinculado |
|----------------------|--------------------------|
|Requisito Associado   |**RF-03** </br> O sistema deve permitir que o usuário modifique suas informações. |
|Objetivo do Teste| Verificar se o usuário consegue modificar suas informações. |
|Passos | <br> Na página inicial, clique no ícone de usuário para ser redirecionado para a página de login. <br> Insira sua credenciais  válidas. <br> Clique no ícone de usuário na barra de navegação inferior. Você será redirecionado para a tela "Meu Perfil". <br>Clique em "Excluir conta". <br> Um alerta aparecerá na tela confirmando a exclusao . |
|Critério de Êxito| <br>A conta será excluída do Firebase, e o usuário não conseguirá mais acessar a aplicação com suas credenciais..|</br></br>



| Caso de Teste         | CT-26  Buscar Perfis de Outros Pets e visualizar suas informações |
|----------------------|--------------------------|
| Requisito Associado   | **RF-004** </br> O sistema deve ter uma área para buscar|
| Objetivo do Teste | Verificar se o usuário consegue buscar e visualizar o perfil dos pets corretamente. |
| Passos | <br> Na página inicial, clique em ver mais ou em buscar. <br> Na barra de pesquisa insira o nome ou a característica do pet que deseja buscar. <br> Clique no botão de busca . <br> Verifique se a lista de resultados é exibida corretamente deslizando para direita ou esquerda. <br> Para visualizar os detalhes clique no icone do meio. |
| Critério de Êxito | <br> A busca deve retornar uma lista de perfis de pets que correspondem aos critérios inseridos. <br> O usuário deve ser capaz de visualizar os detalhes de um perfil de pet selecionado.|




| Caso de Teste         | CT-27  Dar Like ou Dislike em Perfis de Outros Pets |
|----------------------|--------------------------|
| Requisito Associado   | **RF-005** </br> O sistema deve permitir que o usuário consiga dar like ou dislike em perfis de outros pets. |
| Objetivo do Teste | Verificar se o usuário consegue dar like ou dislike em perfis de outros pets corretamente. |
| Passos | <br> Na página inicial, clique em ver mais, e na barra de busca  insira o nome ou a característica do pet que deseja encontrar. <br> Clique no botão em Buscar. <br> Desliza para a direita (Like). <br> Deslize para a esquerda (Dislike).  |
| Critério de Êxito | <br> O sistema deve registrar corretamente a ação de like ou dislike no perfil do pet mostrando um lerta na tela. <br> Em caso de like, os dados serão salvos na colecão macthes no fireabase. |


| Caso de Teste         | CT-28  Notificar o usuário quando acontecer um match |
|----------------------|--------------------------|
| Requisito Associado   | **RF-006** </br> O sistema deve emitir notificação ao usuário quando acontece um match.	 |
| Objetivo do Teste | Verificar se o usuário recebe uma notificação se houver um match. |
| Passos | <br> Na página inicial, clique em ver mais, e na barra de busca  insira o nome ou a característica do pet que deseja encontrar. <br> Clique no botão em Buscar. <br> Desliza para a direita (Like).  |
| Critério de Êxito |Caso receba um like de volta, o usuário verá na tela de notificações o perfil do pet que deu match. |


| Caso de Teste         | CT-29 Exibir um ícone de mensagens  |
|----------------------|--------------------------|
| Requisito Associado   | **RF-007** </br> O sistema deve exibir um ícone de mensagens instantâneas para os usuários que deram match.	.	 |
| Objetivo do Teste | Verificar se o usuário consegue avaliar a experiência corretamente. |
| Passos |  |
| Critério de Êxito ||



| Caso de Teste         | CT-30  Avaliar a experiência|
|----------------------|--------------------------|
| Requisito Associado   | **RF-008** </br> O sistema deve permitir o usuário avaliar a experiência.	 |
| Objetivo do Teste | Verificar se o usuário consegue avaliar. |
| Passos | <br> Na página inicial, clique em ver mais, e na barra de busca  insira o nome ou a característica do pet que deseja encontrar. <br> Clique no botão em Buscar. <br> Desliza para a direita (Like).  |
| Critério de Êxito | |


| Caso de Teste         | CT-31  Favoritar e desfavoritar um perfil|
|----------------------|--------------------------|
| Requisito Associado   | **RF-010** </br> O site deve incluir uma página de favoritos.	 |
| Objetivo do Teste | Verificar se o usuário consegue favoritar um perfil ou remover dos favoritos. |
| Passos | <br>  |
| Critério de Êxito | |





