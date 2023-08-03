/*
Eventos:
1-adicionar (adição de tarefa na lista)
2-alterar (confirmar tarefa concluida)
3-remover (remoção da tarefa da lista)
*/
//criar função de add tarefa
function addTask(){
    //title da tarefa
    const taskTitle = document.querySelector('#task-title').value;
    //console.log(taskTitle);
    //verificação
    if(taskTitle){//se for true
        //clonar template em uma nova variavel
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);
        //console.log(newTask);
        //adicionar title a nova variavel e atribuir ao elemento do html o conteudo adicionado na taskTitle
        newTask.querySelector('.task-title').textContent = taskTitle;

        //removendo as classes desnecesarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //adicionar tarefa na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        //adicionar o evento de remover com callback
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {

            //chamada da função remover-tarefa
            removeTask(this);//this referencia qual o elemento foi clicado
        });

        //adicionar o evento de completar tarefa com callback
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){

            //chamada da função completar-tarefa
            completeTask(this);//this referencia qual o elemento foi clicado
        })


        //limpar campo de texto UX
        document.querySelector('#task-title').value = " ";

    }
}

//criar função de remover tarefa
function removeTask(task){
    //console.log(task);//verificar se o elemento foi referenciado
    task.parentNode.remove(true);
}

//criar função de completar tarefa
function completeTask(task){
    //console.log(task);//verificar se o elemento foi referenciado

    //criar uma variavel e atribuir o elemento pai do conteudo
    const taskToComplete = task.parentNode;
    //console.log(taskToComplete);

    //adicionar a variavel atribuida de elemento pai o identificador '.done'
    //toggle: realiza a alteração do identificador
    taskToComplete.classList.toggle('done');

}

//mapear evento de add tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e){
    //para nao submeter ao servidor
    e.preventDefault();
    //chamar uma função
    addTask();
})