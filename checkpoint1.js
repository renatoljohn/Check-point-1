function microondas(comida, tempo){
    if(comida == "Pipoca"){
        if(tempo >= 10 && tempo < 20){
            return "Prato pronto, bom apetite!!!"
        }
        else if(tempo < 10){
            return "tempo insuficiente"
        }
        else if(tempo >= 20 && tempo < 30){
            return "sua comida queimou"
        }
        else{
            return "kabumm!!!"
        }

    }

    else if(comida == "Macarrão"){
        if(tempo >= 8 && tempo < 16){
            return "Prato pronto, bom apetite!!!"
        }
        else if(tempo < 8){
            return "tempo insuficiente"
        }
        else if(tempo >= 16 && tempo < 24){
            return "sua comida queimou"
        }
        else{
            return "kabumm!!!"
        }
    }

    else if(comida == "Carne"){
        if(tempo >= 15 && tempo < 30){
            return "Prato pronto, bom apetite!!!"
        }
        else if(tempo < 15){
            return "tempo insuficiente"
        }
        else if(tempo >= 30 && tempo < 45){
            return "sua comida queimou"
        }
        else{
            return "kabumm!!!"
        }

    }

    else if(comida == "Feijão"){
        if(tempo >= 12 && tempo < 24){
            return "Prato pronto, bom apetite!!!"
        }
        else if(tempo < 12){
            return "tempo insuficiente"
        }
        else if(tempo >= 24 && tempo < 36){
            return "sua comida queimou"
        }
        else{
            return "kabumm!!!"
        }

    }
    else if(comida == "Brigadeiro"){
        if(tempo >= 8 && tempo < 16){
            return "Prato pronto, bom apetite!!!"
        }
        else if(tempo < 8){
            return "tempo insuficiente"
        }
        else if(tempo >= 16 && tempo < 24){
            return "sua comida queimou"
        }
        else{
            return "kabumm!!!"
        }

    }
    else{
        return "Prato inexistente"

    }

}



console.log(microondas("Carne", 45))