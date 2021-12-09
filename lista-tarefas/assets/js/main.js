const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
  const li = document.createElement('li');
  return li;
};

inputTarefa.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
  }
});
function limpaInput(){
  inputTarefa.value ='';
  inputTarefa.focus();
};
function criaBotaoApagar(li){
  li.innerText += ' ';
  const botaoApagar =document.createElement('button');
  botaoApagar.innerText= 'Apagar';
  li.appendChild(botaoApagar)
  botaoApagar.setAttribute('class','apagar')
  
};
//as constantes estão em funções diferentes, e apenas exitem lá, então não haverá conflito.
function criaTarefa(textoInput){
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
};


btnTarefa.addEventListener('click',function(){
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)
});

document.addEventListener('click',function(e){
  const el =e.target;
  if(el.classList.contains('apagar')){
    console.log(el.parentElement)
  }//se esse botão possui a classe apagar é o botão correto
})