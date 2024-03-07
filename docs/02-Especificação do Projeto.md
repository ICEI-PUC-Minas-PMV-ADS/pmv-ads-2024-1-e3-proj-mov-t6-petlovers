# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Grupo de pessoas que busca uma rede de pesquisa para encontrar parceiros para seus Pets.

|Samantha Nogueira   | Informações:                          | **Problema**               |     
|--------------------|----------------------------------|--------------------------------------|
| <img width="400" alt="Capture" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/110791034/b9a65fb6-8d69-46ad-a19c-b147de517c91"> | **Idade:** 23 anos  <br> <br> **Sobre**:  Jovem adulta. Mora sozinha desde os 18 e se sentia maior parte do seu dia sozinha e ansiosa. Ganhou Zeca aos 18 de seus pais, para que lhe fizesse companhia durante sua nova fase.  | Samantha ao sair para o trabalho, percebe que Zeca se sente muito sozinho. A mesma por receio, gostaria de encontrar uma parceira para ele, com a mesma idade e raça, para que ela conseguisse um dos filhotes para fazer companhia a Zeca e mantivesse contato com a parceira.    |
|**•Informações do PET:** <br>●	Nome: Zeca <br>●Idade: 5 anos <br>● Raça: Corgi <br>●È vermifugado e com vacinas em dia: SIM |**Hobbies,História:** <br>● •	Samantha é uma jovem adulta independente. Começou a sua vida sozinha aos 18 anos e desde então tem Zeca como seu companheiro e amigo do dia a dia.   |


|Fernanda Ribeiro   | Informações:                          | **Problema**               |     
|--------------------|----------------------------------|--------------------------------------|
| <img width="400" alt="Capture" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/110791034/63d2c96c-6d09-4585-bf5e-1915ac13c9a0"> | **Idade:** 27 anos  <br> <br> **Sobre**: Fernanda é dona de Maya, na qual tem como sua fiel amiga desde os 19 anos, que a acompanha em suas aventuras em viagens e trilhas.  | Fernanda vê que Maya ao chegar em uma certa idade precisa de um parceiro/amigo e devido o seu pouco conhecimento da região, vem encontrando dificuldades de um bom amiguinho para sua companheira.   |
|**•Informações do PET:** <br>●	Nome: MAYA <br>●Idade: 8 ANOS <br>● Raça: Vira-Lata  <br>●È vermifugado e com vacinas em dia: SIM |**Hobbies, História:** <br>● Fernanda tem uma paixão por viajar e conhecer novos lugares, devido a sua rotina frenética, leva sua maior companheira em todas as viagens que faz   |


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Samantha  | Buscar perfis de acordo com a preferência          |Filtrar a pesquisa para ser mais objetiva  |
|Fernanda     | Ter informações sobre a localidade do outro PET   | Saber a localização para encontro |
|Samantha     | Registrar informações sobre seu cão   |Para segurança ao escolher outro pet.|
|Fernanda     | Manter contato com o outro usuário    |Permite melhor troca de informações |
|Samantha    | Atualização de perfil para novos registros | Para ter informações mais atualizadas sobre a saúde do PET |
|Fernanda     | Realizar cadastro de mais de um PET  | Para encontrar outros pares para seus outros PETS |
|Samantha     | Adicionar fotos ao perfil              | Permite melhor visualização/conhecimento do parceiro para seu PET. |




## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/diagram.svg)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve possuir área de cadastro de usuário | ALTA | 
|RF-002| O sistema deve permitir cadastro vários perfis por usuário   | MÉDIA |**
|RF-003| O sistema deve permitir cadastro com Upload de imagem   | MÉDIA |
|RF-004| O sistema deve permitir que o usuário altere as informações de seu cadastro| MÉDIA |
|RF-005| O sistema deve permitir que o usuário delete seu cadastro| MÉDIA |
|RF-006| O sistema deve ter uma área para buscar perfil de outro usuário   | MÉDIA |
|RF-007| O sistema deve permitir que o usuário visualize outros perfis  | MÉDIA |
|RF-008| O sistema deve permitir que o usuário consiga selecionar o perfil de outro usuário| MÉDIA |
|RF-009| O sistema deve permitir que o usuário recuse algum perfil | MÉDIA |
|RF-010| O sistema deve emitir notificação ao usuário selecionado | MÉDIA |
|RF-011| O sistema deve exibir o icone de Mensagens Instantâneas para os usuários que se escolheram  | MÉDIA |
|RF-012| O sistema deve permitir que os usuários avaliem a experiência | MÉDIA |**



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01|	Na página principal, deve-se deixar claro o propósito do site |	MÉDIA |
|RNF-02|	O sistema deve ser responsivo |	MÉDIA |
|RNF-03|	O sistema deve ter bom nível de contraste entre os elementos da tela em conformidade |	MÉDIA |
|RNF-04|	Compatibilidade com principais navegadores (Chrome, Firefox, Opera, Safari) |	MÉDIA |
|RNF-05|	A resposta de uma busca não pode demorar mais que 5 segundos. |	MÉDIA |
|RNF-06|	O sistema deve passar segurança aos usuários ao colocar seus dados pessoais. |	MÉDIA |
|RNF-07|	Inclusão de ALTs (descrições de imagens) nas fotos e ilustrações (RNF) |	MÉDIA |
|RNF-08|	O sistema deve armazenar senhas dos usuários criptografadas |	MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre (07/2024) |
|02| Vídeo de 2 minutos sobre o problema e a solução proposta |
|03| Atender todas as normas ABNT |
|04| O grupo deverá utilizar o repositório específico do curso ADS |
|05| O projeto deverá ser desenvolvido por integrantes do grupo, não poderá ser terceirizado |



## Diagrama de Casos de Uso

<img width="876" alt="Screenshot 2024-03-05 at 10 16 16" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/698b054c-58bb-4961-9d53-4ff2d9c2e4aa">

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

Ela deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura  apresentada a seguir.



<img width="1434" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-petlovers/assets/93337008/3bd6eccf-7af8-48d7-86b4-cea503e16eaf">



# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
