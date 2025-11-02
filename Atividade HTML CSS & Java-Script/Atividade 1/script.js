/* Passo 1- Selecionar elementos HTML:
Acesse os elementos HTML com os quais você deseja interagir no JavaScript. Neste caso, são o campo de entrada (taskInput), a lista de tarefas (taskList). */

const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

function addTask() {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    //Adiciona um botão para remover a tarefa
    const removerBotao = document.createElement("button");
    removerBotao.textContent = "Remover";
    removerBotao.onclick = function () {
      ul.removeChild(li);
    };

    li.appendChild(removerBotao);
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Por favor, insira uma tarefa.");
  }
}

/* Os PASSOS 2 AO 8 SERÃO IMPLEMENTADOS DENTRO DA FUNÇÃO addTask().

Passo 8 - Lidar com tarefas vazias:
Caso o campo de entrada esteja vazio no momento de adicionar, exiba um alerta pedindo para inserir uma tarefa.

Passo 9 -  Testar a funcionalidade:
Teste sua implementação interagindo com o campo de entrada, adicionando tarefas e removendo-as utilizando o botão de remoção. 
*/
