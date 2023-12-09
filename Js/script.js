
var fecharc = document.getElementById("btnf");
var mdark = document.getElementById("d");
var mcla = document.getElementById("c");
var pp = document.getElementById("pp");
var entendi = document.getElementById("entendi");
var nao = document.getElementById("nao");

nao.addEventListener('click', function(){
    pp.innerHTML="E eu com isso?"
})

entendi.addEventListener('click', function(){
    pp = document.getElementById("pp");
    pp.innerHTML="Boa sorte, caro estudante!"
})

pp.addEventListener('mouseover', function(){
    prompt("Ta gostando da página?")
});


mdark.addEventListener('click', function(){

    var all = document.getElementById("all");
    if(all.style.color === "black") {
        all.style.color = "white";
    } else {
        all.style.color = "white"
    }

    if(all.style.backgroundColor === "black") {
        all.style.color = "white";
    } else{
        all.style.backgroundColor = "black"
    }
})

mcla.addEventListener('click', function(){

    var all = document.getElementById("all");
    if(all.style.color === "white") {
        all.style.color = "black";
    } else {
        all.style.color = "black"
    }

    if(all.style.backgroundColor === "black") {
        all.style.backgroundColor = "white";
    } else{
        all.style.backgroundColor = "white"
    }
})
  
fecharc.addEventListener('click', function(){
     var caixa = document.getElementById("mtt"); 
   if(caixa.style.display === "none") {
        caixa.style.display = "block";
    } else {
        caixa.style.display = "none";
    }
})