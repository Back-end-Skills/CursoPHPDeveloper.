function car_conteudo(){
    document.getElementById("conteudo").innerHTML = "Permission is hereby granted, free of charge, to any person obtaining a copy"
}

function mouseOver() {
    document.getElementById("mouseAll").innerHTML="Retire o mouse";
}

function mouseOut() {
    document.getElementById("mouseAll").innerHTML="Passe Lo Mouse";

}

function converText() {
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();

}

function validarSenha() {
    var senha = document.getElementById("senha").value;

    if (senha == "" || senha.length <= 5) {
        document.getElementById("erroSenha").innerHTML="<span style='color:#ff0000;'>Preencha com mais caracteres</span>";
    } else {
        document.getElementById("erroSenha").innerHTML="<span style='color:#00ff00;'>Senha válida</span>";

    }
}