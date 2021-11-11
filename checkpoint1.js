/*
Equipe 6

Renato Lino Barros
Mariana Orsi
Erika Franco
Francisco Oliveira
Maria Giordane
Everton Paz Da Silva

*/

function microondas(comida, tempo){
    let tempoEsp = 0;
    let comidalow = comida.toLowerCase();
    
    switch(comidalow){
        case "pipoca":
            tempoEsp = 10;
            break
        case "macarrão":
            tempoEsp = 8;
            break
        case "carne":
            tempoEsp = 15;
            break
        case "feijão":
            tempoEsp = 12;
            break
        case "brigadeiro":
            tempoEsp = 8;
            break
        default:
            return "Prato inexistente"
    }
    if(tempo >= tempoEsp * 3){
        return "kabumm!!!\nPrato pronto, bom apetite!!!"
    }
    else if(tempo >= tempoEsp * 2){
        return "sua comida queimou\nPrato pronto, bom apetite!!!"
    }
    else if(tempo < tempoEsp){
        return "tempo insuficiente\nPrato pronto, bom apetite!!!"
    }
    else{
        return "Prato pronto, bom apetite!!!"
    }
}
console.log(microondas("Pipoca", 10))