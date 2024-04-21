# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido. Clicar nas imagens para ver em tamanho maior.

| **Caso de Teste**| **CT-001: Cadastrar Usuários (Senha e Confirmação de Senha mascarados)** |
| :--- | :---: |
| Requisito associado | RF-01 O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
| Objetivo do Teste | Verificar se os campos "Senha" e "Confirmação de Senha" são mascarados. |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha) |
| Resultado esperado | Campo de senha mascarado |
| Avaliação | O sistema mascarou os campos de senha na página de cadastro e também na página de login |
| Evidência | <img width= "200" src="img/registro-cadastro-ct01-02.jpeg"> <img width= "200" src="img/registro-login-ct01-02.jpeg"> |

<br>

| **Caso de Teste**| **CT-002 Cadastrar Usuários (Formato Data de Nascimento)** |
| :--- | :---: |
| Requisito associado | RF-01 O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
| Objetivo do Teste | Verificar se o aplicativo exibe erro para formatos incorretos do campo "data de nascimento". |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Na tela "Cadastro", preencher o campo de data de nascimento com uma data inválida |
| Resultado esperado | Mensagem de erro de data inválida |
| Avaliação | O sistema validou a data inexistente inserida (30/02) e exibiu a mensagem de erro que pede ao usuário que insira uma data válida |
| Evidência | <img width= "200" src="img/registro-cadastro-ct02.png"> |

<br>

| **Caso de Teste**| **CT-03 Cadastrar Usuários (Menores 18 anos)** |
| :--- | :---: |
| Requisito associado | RF-01 O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
| Objetivo do Teste | Verificar se o aplicativo permite cadastro de menores de 18 anos. |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Na tela "Cadastro", preencher data de nascimento de uma pessoa menor de 18 anos |
| Resultado esperado | Mensagem de erro informando que o usuário deve ter mais de 18 anos |
| Avaliação | O sistema validou a data inserida e calculou a idade do usuário, exibindo a mensagem de erro que diz que apenas usuários maiores de 18 anos podem se cadastrar  |
| Evidência | <img width= "200" src="img/registro-cadastro-ct03.png"> |

<br>

| **Caso de Teste**| **CT-04 Cadastrar Usuários (Preenchimento correto)** |
| :--- | :---: |
| Requisito associado | RF-01 O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
| Objetivo do Teste | Verificar se é possível ir para tela "Cadastro de pet" após cadastro bem sucedido de usuário |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Na tela "Cadastro", preencher os campos obrigatórios corretamente;  </br> Apertar no botão "Cadastrar";  </br> Verificar se a requisição de cadastro foi bem sucedida;  </br> Observar se o aplicativo leva automaticamente à tela "Cadastro Pet" logo em seguida |
| Resultado esperado | Os dados do usuário devem constar na Firestore e ele deve ser direcionado à tela "Cadastro Pet" |
| Avaliação | O servidor recebeu a requisição e os dados foram armazenados corretamente na Firestore, com campo de senha ocultado por segurança. Em seguida, o aplicativo direcionou à tela "Cadastro Pet", que recebeu o ID de usuário como parâmetro  |
| Evidência | <img width= "200" src="img/registro-cadastro-ct04-01.png"> <img width= "200" src="img/registro-cadastro-ct04-02.png"> |

<br>

| **Caso de Teste**| **CT-05 Cadastrar Usuários (Upload de imagens)** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se é possível inserir imagem na tela "Cadastro de Pet" |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Na tela "Cadastro", preencher os campos obrigatórios corretamente;  </br> Apertar no botão "Cadastrar"; </br> Na tela "Cadastro Pet", selecionar o ícone e adicionar uma imagem |
| Resultado esperado | A imagem inserida deverá aparecer na tela |
| Avaliação | A imagem inserida apareceu corretamente na tela  |
| Evidência | <img width= "200" src="img/registro-cadastropet-ct05.png"> |

<br>

| **Caso de Teste**| **CT-06 Cadastrar Usuários (Cadastro pet)** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se é possível cadastrar um pet |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Na tela "Cadastro", preencher os campos obrigatórios corretamente;  </br> Apertar no botão "Cadastrar"; </br> Na tela "Cadastro Pet", preencher todos os campos corretamente; <br> Apertar no botão "Cadastrar; <br> Verificar se a requisição de cadastro foi bem sucedida |
| Resultado esperado | Os dados do pet devem constar na Firestore e a tabela deve estar associada ao ID correto de usuário |
| Avaliação | O servidor recebeu a requisição e os dados foram armazenados corretamente na Firestore, com o ID de usuário correto  |
| Evidência | <img width= "150" src="img/registro-cadastropet-ct06-01.png"> <img width= "500" src="img/registro-cadastropet-ct06-02.png"> |

<br>

| **Caso de Teste**| **CT-07 Cadastrar Usuários (Não permite cadastro sem o nome do pet)** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se o aplicativo permite o cadastro do pet sem a informação "Nome do pet" preenchida |
| Procedimentos (passo à passo) | Na tela "Cadastro Pet", preencher todos os campos exceto "Nome do pet"; <br> Apertar no botão "Cadastrar; <br> Verificar se é exibida mensagem de erro correspondente |
| Resultado esperado | O cadastro não deverá ser realizado e a mensagem "Informe o nome do pet" deverá aparecer na tela |
| Avaliação | O cadastro de pet não foi enviado com o campo "Nome" em branco, e foi exibida a mensagem de erro  |
| Evidência | <img width= "200" src="img/registro-cadastropet-ct07.png"> |

<br>

| **Caso de Teste**| **CT-08 Cadastrar Usuários (Não permite cadastro sem o "sobre" do pet)** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se o aplicativo permite o cadastro do pet sem a informação "Sobre" preenchida |
| Procedimentos (passo à passo) | Na tela "Cadastro Pet", preencher todos os campos exceto "Sobre"; <br> Apertar no botão "Cadastrar; <br> Verificar se é exibida mensagem de erro correspondente |
| Resultado esperado | O cadastro não deverá ser realizado e a mensagem "Forneça informações sobre o pet" deverá aparecer na tela |
| Avaliação | O cadastro de pet não foi enviado com o campo "Sobre" em branco, e foi exibida a mensagem de erro  |
| Evidência | <img width= "200" src="img/registro-cadastropet-ct08.png"> |

<br>

| **Caso de Teste**| **CT-09 Cadastrar Usuários (Não permite cadastro sem informar sexo do pet)** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se o aplicativo permite o cadastro do pet sem a informação "Sexo" preenchida |
| Procedimentos (passo à passo) | Na tela "Cadastro Pet", preencher todos os campos exceto "Sexo"; <br> Apertar no botão "Cadastrar; <br> Verificar se é exibida mensagem de erro correspondente |
| Resultado esperado | O cadastro não deverá ser realizado e a mensagem "Informe o sexo do pet" deverá aparecer na tela |
| Avaliação | O cadastro de pet não foi enviado com o campo "Sexo" em branco, e foi exibida a mensagem de erro  |
| Evidência | <img width= "200" src="img/registro-cadastropet-ct09.png"> |

<br>

| **Caso de Teste**| **CT-10 Cadastrar Usuários (Não permite cadastro sem a informação Raça)** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se o aplicativo permite o cadastro do pet sem a informação "Raça" preenchida |
| Procedimentos (passo à passo) | Na tela "Cadastro Pet", preencher todos os campos exceto "Raça"; <br> Apertar no botão "Cadastrar; <br> Verificar se é exibida mensagem de erro correspondente |
| Resultado esperado | O cadastro não deverá ser realizado e a mensagem "Informe a raça do pet" deverá aparecer na tela |
| Avaliação | O cadastro de pet não foi enviado com o campo "Raça" em branco, e foi exibida a mensagem de erro  |
| Evidência | <img width= "200" src="img/registro-cadastropet-ct10.png"> |

<br>

| **Caso de Teste**| **CT-11 Cadastrar Usuários (Não permite cadastro sem a informação Porte)** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se o aplicativo permite o cadastro do pet sem a informação "Porte" preenchida |
| Procedimentos (passo à passo) | Na tela "Cadastro Pet", preencher todos os campos exceto "Porte"; <br> Apertar no botão "Cadastrar; <br> Verificar se é exibida mensagem de erro correspondente |
| Resultado esperado | O cadastro não deverá ser realizado e a mensagem "Informe o porte do pet" deverá aparecer na tela |
| Avaliação | O cadastro de pet não foi enviado com o campo "Porte" em branco, e foi exibida a mensagem de erro  |
| Evidência | <img width= "200" src="img/registro-cadastropet-ct11.png"> |

<br>

| **Caso de Teste**| **Verificar se o aplicativo permite o cadastro do pet sem a informação "Idade" preenchida** |
| :--- | :---: |
| Requisito associado | RF-02 O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
| Objetivo do Teste | Verificar se o aplicativo permite o cadastro do pet sem a informação "Idade" preenchida |
| Procedimentos (passo à passo) | Na tela "Cadastro Pet", preencher todos os campos exceto "Idade"; <br> Apertar no botão "Cadastrar; <br> Verificar se é exibida mensagem de erro correspondente |
| Resultado esperado | O cadastro não deverá ser realizado e a mensagem "Informe a idade do pet" deverá aparecer na tela |
| Avaliação | O cadastro de pet não foi enviado com o campo "Idade" em branco, e foi exibida a mensagem de erro  |
| Evidência | <img width= "200" src="img/registro-cadastropet-ct12.png"> |

<br>

| **Caso de Teste**| **CT-16 Login (Validar formato e-mail)** |
| :--- | :---: |
| Requisito associado | RF-009 O site deve possuir uma página de login |
| Objetivo do Teste | Verificar se o aplicativo permite o login com e-mail em formato errado |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> No menu inferior, clicar no ícone de login;  </br> Na tela "Login", preencher o e-mail em formato inválido;  </br> Apertar no botão "Login"  |
| Resultado esperado | O login não deverá ser realizado e uma mensagem de erro deverá ser exibida |
| Avaliação | Com entrada de e-mail em formato inválido, o login não foi efetuado, no entanto não houve mensagem de erro  |
| Evidência | <img width= "200" src="img/registro-login-ct16.png"> |

<br>

| **Caso de Teste**| **CT-20 Login (Teste de senha incorreta)** |
| :--- | :---: |
| Requisito associado | RF-009 O site deve possuir uma página de login |
| Objetivo do Teste | Verificar se o aplicativo permite o login com senha inválida |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> No menu inferior, clicar no ícone de login;  </br> Na tela "Login", preencher o e-mail de usuário; </br> Preencher uma senha inválida (diferente da cadastrada);  </br> Apertar no botão "Login"  |
| Resultado esperado | O login não deverá ser realizado e uma mensagem de erro deverá ser exibida |
| Avaliação | Com entrada de senha inválido, o login não foi efetuado, e foi exibida mensagem de erro do Firebase  |
| Evidência | <img width= "200" src="img/registro-login-ct20.png"> |



## Avaliação

As funcionalidades de cadastro de usuário, pet vinculado e login de usuário estão funcionando corretamente. Os dados preenchidos nos formulários de cadastro estão sendo enviados à Firestore, e os dados específicos de autenticação (e-mail e senha) estão sendo enviados ao Firebase Authentication. 

Atualmente, algumas validações ainda não estão ocorrendo em tempo real (antes de apertar o botão de enviar) ou com mensagem de erro adequada. No entanto, a aplicação não envia o cadastro e/ou login de usuário com dados inválidos, funcionando apenas em casos de êxito do preenchimento dos formulários. 

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
