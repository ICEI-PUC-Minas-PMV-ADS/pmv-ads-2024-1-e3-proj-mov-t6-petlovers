
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## Diagrama de Fluxo

O diagrama apresenta o estudo do fluxo de interação do usuário com o sistema interativo e  muitas vezes sem a necessidade do desenho do design das telas da interface. Isso permite que o design das interações seja bem planejado e gere impacto na qualidade no design do wireframe interativo que será desenvolvido logo em seguida.

O diagrama de fluxo pode ser desenvolvido com “boxes” que possuem internamente a indicação dos principais elementos de interface - tais como menus e acessos - e funcionalidades, tais como editar, pesquisar, filtrar, configurar - e a conexão entre esses boxes a partir do processo de interação. Você pode ver mais explicações e exemplos https://www.lucidchart.com/blog/how-to-make-a-user-flow-diagram.

![Exemplo de Diagrama de Fluxo](img/diagramafluxo2.jpg)

As referências abaixo irão auxiliá-lo na geração do artefato “Diagramas de Fluxo”.

> **Links Úteis**:
> - [Fluxograma online: seis sites para fazer gráfico sem instalar nada | Produtividade | TechTudo](https://www.techtudo.com.br/listas/2019/03/fluxograma-online-seis-sites-para-fazer-grafico-sem-instalar-nada.ghtml)

## Wireframes

### Home page sem longin

Ao acessar nossa aplicação sem estar logado, o usuário visualizará a página inicial conforme mostrado na imagem abaixo. Se optar por se cadastrar, basta clicar no botão de cadastro para ser redirecionado à tela correspondente. 

Caso clique em "Encontrar um par ideal", ícone do usuário ou notificações, será direcionado à tela de login. O ícone de casa permite que o usuário retorne à tela principal ao clicar nele, enquanto o ícone de livro direciona para a tela "Sobre Nós".

<img width="373" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/0e6fd7d3-a139-4686-9745-0467bb2013f7"> <br><br>


### Home page com longin


Na tela com o usuário logado, ele verá o nome dele no canto superior direito. O botão no banner roxo conterá o nome do pet do usuário e abaixo o botão "Buscar", que redireciona para a tela de busca dos pets.

Caso clique em algum card da seção "Encontre um par ideal", será redirecionado para a tela de informações desse pet. Se clicar em "Ver mais", irá para a tela de busca onde estarão listados todos os pets.

Ao clicar no ícone de notificações, será redirecionado para essa página e, ao clicar no ícone de usuário, será redirecionado para a área do usuário.

<img width="365" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/b6842e23-01c4-4508-a23a-ee17a0db434d"> <br><br>


### Cadastro

Na tela de cadastro, temos os seguintes campos: nome completo, data de nascimento, email, contato do WhatsApp, senha e confirmar senha.

<img width="365" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/575e3cc4-d279-49e5-afd4-b01f08e454b6"><br><br>


### Login

A tela de login possui os campos de email e senha. Caso o usuário ainda não tenha uma conta, o link "Cadastre-se aqui" redireciona para a tela de cadastro.

<img width="331" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/4412c7dc-8987-4541-a196-a35bb34d77b9"><br><br>


### Cadastro pet

Na página de cadastro do pet, o usuário deverá fazer o upload de uma imagem, e fornecer as seguintes informações: nome do pet, idade, cidade, sexo, cor, raça, porte e uma breve descrição sobre ele.

<img width="339" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/531ca6b1-88d2-4bb1-a707-13b8c7f585a5">

<br><br>


### Tela busca

Na página de busca/match, por padrão, os cards do sexo oposto serão renderizados antes que o usuário realize alguma busca. O usuário pode pesquisar de acordo com suas preferências, por exemplo: "Poodle marrom em Santos, São Paulo", e todos os perfis cadastrados com essas características serão exibidos.

Haverá ícones interativos para aprimorar a experiência do usuário:

- Ícone de coração (Curtir): indica interesse no perfil exibido;
- Ícone "x" (recusar): indica falta de interesse no perfil exibido;
- Ícone azul: permite visualizar mais informações sobre o pet, redirecionando o usuário para a tela de informações.

Os perfis serão exibidos em cards, um abaixo do outro.

<img width="331" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/5345ae80-f0d5-467b-999b-a8f41dddfd68"><br><br>


### Página de Notificações com match

Na página de notificações, o usuário verá todos os matches que possui e a data em que ocorreram. Ao clicar em cada um, será redirecionado para a tela de informações desse pet. Abaixo, haverá uma lupa de pesquisa e os cards de "Encontre um par ideal", caso o usuário queira continuar na busca.

<img width="332" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/e9c01be1-9af8-459b-8a3f-22342a88b446"> <br><br>


### Página de Notificações sem match

Na página sem notificações, o usuário verá a frase "Seu perfil ainda não foi curtido de volta." Abaixo disso, haverá a barra de pesquisa e cards para procurar mais pets.

<img width="351" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/b3e6fdfb-b605-4ed0-b885-fa00007d17a2">

<br><br>


### Página de informações do pet

Na tela de informações do pet, será possível visualizar todas as informações cadastradas dele, incluindo nome, cidade, sexo e uma breve descrição sobre ele. Abaixo, será possível ver o nome do tutor. O ícone do WhatsApp só aparecerá quando houver um match.


<img width="297" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/c70a9c7d-8600-4d0f-89f2-bd7143bb6813"><br><br>

Ao clicar no ícone, uma janela popup aparecerá para permitir que o usuário avalie sua experiência, sendo esta avaliação opcional. Em seguida, o usuário será redirecionado para o aplicativo do WhatsApp, onde poderá iniciar uma conversa.


<img width="313" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/c97d0032-3bb3-4891-b5d5-fb28645526b8"><br><br>


### Área usuário

Essa tela contém um link para o usuário visualizar o perfil do seu pet, editar os dados do pet, editar os seus próprios dados, excluir a conta e um botão de logout para sair da aplicação.

<img width="367" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/84d3be55-7bc4-4fcd-affa-72fc959da7f9"> <br><br>


### Editar dados cadastrais usuário

Na página de editar dados do usuário, ele poderá atualizar todas as suas informações cadastradas, incluindo nome, data de nascimento, email, contato do WhatsApp, e também poderá alterar sua senha. Será necessário confirmar a senha antiga para concluir a alteração.

<img width="330" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/8f0bf16a-9153-42d4-a25f-73619ef7b4df"> <br><br>


### Editar dados cadastrais pet

Na página de editar dados do pet, o usuário poderá alterar todos os dados cadastrados do seu pet, incluindo nome, idade, cidade, sexo, cor, raça , porte e sobre, além de poder trocar a imagem, caso deseje.

<img width="264" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/9d5faa04-b9ea-4909-a6ba-35017b015149"><br><br>


### Página sobre

Esta página fornece informações sobre o aplicativo e seu funcionamento. Abaixo, o usuário encontrará um link que o redirecionará para a página de Termos e Condições, e outro para a página de Política de Privacidade.

Se o usuário estiver logado, ele verá o botão "Buscar" e seu nome no canto superior. Se não estiver logado, apenas o botão "Cadastrar" será exibido.

<img width="256" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/eabb4fdf-8d44-418e-81d3-94273ed96b4f"> <br><br>


### Termos e condições

A tela de termos e condições contém as regras e regulamentos que os usuários concordam em seguir ao usar nosso aplicativo. 

<img width="229" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/1402c373-c555-40b0-bef2-77e4d070e1a0"> <br><br>


### Política de privacidade

A tela de política de privacidade contém informações sobre como os dados pessoais dos usuários são coletados, usados, armazenados e protegidos pela nossa aplicação. 

<img width="205" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/f8fbde05-6039-4c36-a887-6e27ae62e1e8">


