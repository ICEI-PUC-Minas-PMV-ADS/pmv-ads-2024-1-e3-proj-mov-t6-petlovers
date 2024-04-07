# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

| **Caso de Teste**| **CT-001: Cadastrar Usuários (Senha e Confirmação de Senha mascarados)** |
| :--- | :---: |
| Requisito associado | RF-01 O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |
| Objetivo do Teste | Verificar se os campos "Senha" e "Confirmação de Senha" são mascarados. |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, data de nascimento, e-mail, contato, senha e confirmação de senha) |
| Resultado esperado | Campo de senha mascarado |
| Avaliação | O sistema mascarou os campos de senha na página de cadastro e também na página de login |
| Evidência | <img width= "200" src="img/registro-cadastro-ct01-02.jpeg"> <img width= "200" src="img/registro-login-ct01-02.jpeg"> |

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
