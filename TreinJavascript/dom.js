document.getElementById('exemplo-1').innerHTML="Text Exemplo Um";

function exemplo2() {
    let elem=document.getElementsByName('curso');
    console.log(elem);

}

function exemplo3() {
    let span= document.getElementsByTagName('span');
    console.log(span);
}

function exemplo4() {
    let li = document.getElementsByTagName('li');
    console.log(li);
}

function exemplo5() {
    let classe = document.getElementsByClassName('product');
    console.log(classe);
}
