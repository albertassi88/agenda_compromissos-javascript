
let botao = document.querySelector("#botao");

let input = document.querySelector("#texto");

let lista = document.querySelector("#lista");

let select = document.querySelector("#horario");

let agendas = [];

let horarios = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

let horarioAgenda = "";
for (hr of horarios){
    let option = document.createElement("option");
    option.setAttribute("value", "1");
    let itemTexto = document.createTextNode(hr);
    option.appendChild(itemTexto);
    select.appendChild(option); 

    select.onclick = function(){
        horarioAgenda = select[select.selectedIndex].text;
       
        if(horarioAgenda != "Horário"){
            let indice = select.selectedIndex;
            select.removeChild(select[indice]);
        }
        select.selectedIndex = 0;
    }
}

function criarCompromissos(){
    lista.innerHTML = "";
    for (agenda of agendas){
        let itemLista = document.createElement("li");
        itemLista.setAttribute("class", "list-group-item list-group-item-action");
        itemLista.onclick = function(){
            deletarCadastros(this);
        }
        let itemTexto = document.createTextNode(agenda);
        itemLista.appendChild(itemTexto);
        lista.appendChild(itemLista);
    }
}

botao.onclick = function cadastrar(){
    let texto = input.value;
    
    if((texto != "") & (horarioAgenda != "") & (horarioAgenda != "Horário")){
        agendas.push(horarioAgenda + " - " + texto.toUpperCase());
        criarCompromissos();
        input.value = "";
        horarioAgenda = "";
        removerSpan();
    }else{
        removerSpan();
        let card = document.querySelector(".card");
        let span = document.createElement("span");
        span.setAttribute("class", "alert alert-warning");
        let textoSpan = document.createTextNode("Selecione o horário e Digite o seu compromisso!");
        span.appendChild(textoSpan);
        card.appendChild(span);
   }
}

function deletarCadastros(del){
    agendas.splice(agendas.indexOf(del.textContent), 1);
    criarCompromissos();
}

function removerSpan(){
    let span = document.querySelectorAll("span");
    let card = document.querySelector(".card");
 
    for(let i=0; i<span.length; i++){
        card.removeChild(span[i]);
    }
}


