// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

  let index = 0;

  let img_first = document.querySelector('#slide');

  let botao_prox = document.querySelector('#proximo');

  botao_prox.addEventListener('click', function(){
    index = (index + 1) % todasAsImagens.length;
    img_first.src = servidorDasImagens + todasAsImagens[index];

  });


let botao_ant = document.querySelector('#anterior');

botao_ant.addEventListener('click', function(){
  index--;

  if(index < 0){
      index = todasAsImagens.length-1;
  }else{
      index %=todasAsImagens.length;  
  }
  img_first.src = servidorDasImagens + todasAsImagens[index];  

});