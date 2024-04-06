# Plano de Testes de Software


|Caso de Teste         |CT-01  Cadastrar Usuários (Senha e Confirmação de Senha mascarados)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Verificar se os campos "Senha" e "Confirmação de Senha" são mascarados. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).|
|Critério de Êxito|Os caractéres do campo "Senha" e "Confirmaçao de Senha" devem ser mascarados.|

|Caso de Teste         |CT-02  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Ao digitar um formato inválido para o campo "Data de Nascimento", verificar se o aplicativo exibe uma mensagem indicando o formato correto do campo "Data de Nascimento".|
|Passos |Acessar o aplicativo; </br>Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos: nome completo, data de nascimento no formato MM/dd/yyy.|
|Critério de Êxito|Exibir uma mensagem solicitando o preenchimento da data de Nascimento no formato dd/MM/yyyy.|
 
|Caso de Teste         |CT-03  Cadastrar Usuários |
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Verificar se o aplicativo permite cadastro de menores de 18 anos.|
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento para menor de 18 anos, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "Salvar". |
|Critério de Êxito|O cadastro não será salvo e a mensagem: "Para se cadastrar nesse aplicativo é necessário ser maior de 18 anos!", deverá ser exibida.|

|Caso de Teste         |CT-04  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
|Objetivo do Teste| Verificar se é possível ir para tela "Cadastro de pet", quando as informações são preenchidas corretamente. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "Salvar" para visualizar a próxima tela. |
|Critério de Êxito|O aplicativo deverá exibir a próxima tela, pois todos os dados foram preenchidos. |

|Caso de Teste         |CT-05  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Verificar se é possível inserir imagem na tela "Cadastro de Pet" |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem e adicionar uma imagem.|
|Critério de Êxito|A imagem inserida deverá aparecer na tela.|

|Caso de Teste         |CT-06  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Cadastrar o pet. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro deverá ser realizado, pois todas as informações foram preenchidas.|

|Caso de Teste         |CT-07  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Nome do pet" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem.  </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe o nome do pet!" deverá aparecer na tela.|

|Caso de Teste         |CT-08  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do usuário sem o campo "Sobre Mim" preenchido. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> Deixar o campo "Sobre Mim" sem preenchimento. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Nos informe as características do seu pet!" deverá aparecer na tela.|

|Caso de Teste         |CT-09  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Sexo" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem.  </br> Adicionar as informações dos campos: "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe o sexo do pet!" deverá aparecer na tela.|


|Caso de Teste         |CT-10  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Raça" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe a raça do pet!" deverá aparecer na tela.|

|Caso de Teste         |CT-11  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Porte" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem. </br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet. </br> Adicionar as informações dos campos: "Sexo", "Cor" e "Raça". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe o Porte do pet!" deverá aparecer na tela.|


|Caso de Teste         |CT-12  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos.  |
|Objetivo do Teste| Verificar se o aplicativo permite o cadastro do pet sem a informação "Idade do pet" preenchida. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma imagem.</br> no campo "Nome do Pet" adicionar um nome de Pet. </br> No campo "Idade do Pet" adicionar a idade do Pet.  </br> Adicionar as informações dos campos: "Sexo", "Cor", "Raça" e "Porte". </br> No campo descrição adicionar um texto com as características do pet. |
|Critério de Êxito|O cadastro não deverá ser realizado e a Mensagem "Informe a idade do pet do pet!" deverá aparecer na tela.|

|Caso de Teste         |CT-13  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Validar extensão de arquivo para upload  |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem e adicionar a imagem com extensão JPG .|
|Critério de Êxito|A imagem deve ser inserida.|

|Caso de Teste         |CT-14  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Validar extensão de arquivo para upload  |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem  e adicionar a imagem com extensão PNG.|
|Critério de Êxito|A imagem deve ser inserida.|

 |Caso de Teste         |CT-15  Cadastrar Usuários|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. </br>**RF-02** </br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens. |
|Objetivo do Teste| Validar extensão de arquivo para upload  |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha).</br> Selecionar a opção "cadastrar" para visualizar a próxima tela. </br> Na tela "Cadastro Pet", selecionar o ícone para inserir imagem e adicionar a imagem  com extensão diferente de JPG e PNG.|
|Critério de Êxito|A imagem não deverá ser inserida.|
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
