// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let botões = document.querySelectorAll('.botao-expandir-retrair');
botões.forEach(botão =>{
  botão.addEventListener('click',function(event){
     let choosenB = event.currentTarget;
     let chossenParent = choosenB.parentElement;
     chossenParent.classList.toggle('expandido');
     if(choosenB.innerHTML ==="+") 
          choosenB.innerHTML ='-';
        else {
            choosenB.innerHTML="+";
        }
    
  });
});
