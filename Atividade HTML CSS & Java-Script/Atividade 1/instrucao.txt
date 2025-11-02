Passo a Passo do HTML para o To-Do List:

Passo 1 - Estrutura Básica:
- Crie um arquivo HTML com a estrutura básica.
- Inclua o título da página com a tag <title>: "To-Do List"

Passo 2 - Vinculação de Estilos e Scripts:
- Use a tag <link> para vincular um arquivo CSS externo à página, fornecendo o caminho para o arquivo no atributo href.
- Inclua a tag <script> antes do fechamento da tag </body> para vincular um arquivo JavaScript externo.
Certifique-se de ter os arquivos CSS e JavaScript separados e vinculados corretamente.

Passo 3 - Estrutura da nossa página web:
- Dentro do <body>, comece adicionando um contêiner principal, como uma <div> com um ID específico (por exemplo, id="container").
- Inclua um título descritivo para a lista de tarefas: "Minha Lista de Tarefas.

Passo 4 - Crie o campo de entrada para Novas Tarefas:
- Insira um campo de entrada (<input>) do tipo texto (type="text") para permitir que os usuários insiram novas tarefas.
- Utilize o atributo id para identificar este campo (id="taskInput").
- Adicione um texto de orientação dentro do campo usando o atributo placeholder.

Passo 5 - Crie o botão para Adicionar as tarefas á lista.
- Crie um botão (<button>) para adicionar tarefas à lista.
- Associe uma função JavaScript ao evento de clique do botão (por exemplo, onclick="addTask()").

Passo 6 - Lista para Exibir as Tarefas:
- Utilize uma lista não ordenada (<ul>) para exibir as tarefas adicionadas.
- Atribua um ID específico à lista (id="taskList").

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Passo a Passo do CSS para o To-Do List:
Reset de Padrões:
- Comece com um reset básico para remover margens, preenchimentos e estilos padrão 
do navegador.
- Defina margin: 0; e padding: 0; para o elemento body.

Estilo Geral:
- Aplique uma fonte padrão para o texto usando font-family.
- Defina as propriedades margin e padding para o contêiner principal (#container)
 para proporcionar espaçamento adequado dentro da página.
- Utilize max-width para limitar a largura do contêiner, mantendo-o centralizado 
na página.
- Aplique um contorno (border) e um arredondamento de borda (border-radius) ao 
contêiner para um visual mais agradável.

Estilo da Lista de Tarefas:
- Remova os estilos padrão da lista utilizando list-style: none;.
- Zere o preenchimento (padding: 0;) para a lista não ordenada (ul) para ajustar
 o espaçamento entre as tarefas.

Estilo do Botão de Adicionar:
- Defina o estilo básico para o botão de adicionar, como background-color, 
color, padding, e border-radius.
- Utilize cursor: pointer; para indicar interatividade.
- Estilização ao Passar o Mouse:
- Acrescente um efeito de hover ao botão de adicionar alterando as propriedades de
cor de fundo (background-color) para um visual mais interativo quando o mouse passa
por cima.

Estilização ao Focar:
- Defina um estilo para quando o botão de adicionar está em foco (:focus), 
removendo qualquer estilo de contorno (outline) padrão do navegador.

------------------------------------------------------------------------------------------------------------------------------------------------------------
Passo a passo para implementar a funcionalidade do To-Do List em JavaScript:

Passo 1- Selecionar elementos HTML:
Acesse os elementos HTML com os quais você deseja interagir no JavaScript. Neste caso, são o campo de entrada (taskInput), a lista de tarefas (taskList).

Os PASSOS 2 AO 8 SERÃO IMPLEMENTADOS DENTRO DA FUNÇÃO addTask().

Passo 2 - Criar a função addTask():
Dentro desta função, obtenha o valor digitado no campo de entrada (taskInput.value).
Verifique se o campo não está vazio antes de prosseguir. Se estiver vazio, exiba um alerta solicitando a inserção de uma tarefa.

Passo 3 - Criar um novo elemento de lista (<li>) para a tarefa e Atribua o texto inserido no campo de entrada como conteúdo deste novo elemento de lista.

Passo 4 - Adicionar um botão de remoção:
- Crie um botão para remover a tarefa recém-adicionada.
- Atribua um texto, por exemplo, "Remover", para o botão (removeButton.textContent = "Remover").

Passo 5 - Implementar a ação de remoção:
- Defina um evento de clique para o botão de remoção (removeButton.onclick).
- Dentro do evento de clique, remova a tarefa da lista de tarefas.

Passo 6 - Anexar elementos à lista de tarefas:
- Adicione o botão de remoção ao elemento de lista.
- Anexe o elemento de lista com a tarefa e o botão à lista de tarefas.

Passo 7 -  Limpar o campo de entrada:
- Após adicionar a tarefa à lista, limpe o campo de entrada (taskInput.value = "").

Passo 8 - Lidar com tarefas vazias:
Caso o campo de entrada esteja vazio no momento de adicionar, exiba um alerta pedindo para inserir uma tarefa.

Passo 9 -  Testar a funcionalidade:
Teste sua implementação interagindo com o campo de entrada, adicionando tarefas e removendo-as utilizando o botão de remoção.

