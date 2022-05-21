
function exemplo2() {
    let elem=document.getElementsByName('curso');

    //Tamanho do NodeList
    console.log("Tamanho do nodelist "+ elem.length);

    //Ler elementos do nodelist individual
    console.log("Elemento posição 0 " + elem[0]['value']);
    console.log("Elemento posição 1 " + elem[1]['value']);
    console.log("Elemento posição 2 " + elem[2]['value']);

    for (let i=0; i < elem.length; i++) {
        console.log(elem[i]['value']);
    }

}

function exemplo3() {
    let span= document.getElementsByTagName('span');
    
    //Tamanho do NodeList
    console.log("Tamanho do HTMLCollection "+ span.length);

    //Ler elementos do nodelist individual
    console.log("Elemento posição 0 " + span[0]['innerText']);
    console.log("Elemento posição 1 " + span[1]['innerText']);
    console.log("Elemento posição 2 " + span[2]['innerText']);

    for (let i=0; i < span.length; i++) {
        console.log(span[i]['innerText']);
    }
}

function exemplo4() {
    let li = document.getElementsByTagName('li');
    
      //Tamanho do NodeList
      console.log("Tamanho do HTMLCollection "+ li.length);

      //Ler elementos do nodelist individual
      console.log("Elemento posição 0 " + li[0]['innerHTML']);
      console.log("Elemento posição 1 " + li[1]['innerHTML']);
      console.log("Elemento posição 2 " + li[2]['innerHTML']);
  
      for (let i=0; i < li.length; i++) {
          console.log(li[i]['innerHTML']);
      }
}

function exemplo5() {
    let classe = document.getElementsByClassName('product');
      //Tamanho do NodeList
      console.log("Tamanho do HTMLCollection "+ classe.length);

      //Ler elementos do nodelist individual
      console.log("Elemento posição 0 " + classe[0]['innerHTML']);
      console.log("Elemento posição 1 " + classe[1]['innerHTML']);
      console.log("Elemento posição 2 " + classe[2]['innerHTML']);
      console.log("Elemento posição 3 " + classe[2]['innerHTML']);
  
      for (let i=0; i < classe.length; i++) {
          console.log(classe[i]['innerHTML']);
      }
}
