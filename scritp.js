const unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]
const dezDez9 = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis",
    "dezessete", "dezoito", "dezenove"
]
const dezenas = ["vinte", "trinta", "quarenta", "cinquenta",
    "sessenta", "setenta", "oitenta", "noventa"
]
const centenas = ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos",
    "seissentos", "setessentos", "oitossentos", "novessentos", "mil"
]

function oneToTwenty(a, b) {
    let result = []

    //UNIDADES
    for (let i = a; i < unidades.length; i++) {
        result.push(unidades[i])
    }

    //DEZ A VINTE
    for (let i = 0; i < dezDez9.length; i++) {
        result.push(dezDez9[i])
    }

    //DEZENAS
    for (let i = 0; i < dezenas.length; i++) {

        for (let j = 0; j < unidades.length; j++) {
            if (unidades[j] == unidades[0]) {
                result.push(dezenas[j])
            } else {
                result.push(dezenas[i] + " e " + unidades[j])
            }
        }
    }
    return result.toString()
}





function numbersToWords() {
    let result = []

    //UNIDADES
    for (let i = 0; i < unidades.length; i++) {
        result.push(unidades[i])
    }

    //DEZ A VINTE
    for (let i = 0; i < dezDez9.length; i++) {
        result.push(dezDez9[i])
    }

    //DEZENAS
    for (let i = 0; i < dezenas.length; i++) {

        for (let j = 0; j < unidades.length; j++) {
            if (unidades[j] == unidades[0]) {
                result.push(dezenas[j])
            } else {
                result.push(dezenas[i] + " e " + unidades[j])
            }
        }
    }

    //CENTENAS
    let count = 0;
    for (let x = 0; x < centenas.length; x++) {
        if (x + 1 == centenas.length) {
            result.push(centenas[x])
        } else {
            if (count == 0) {
                for (let j = 0; j < unidades.length; j++) {
                    if (unidades[j] === "") {
                        result.push(centenas[x])
                    } else {
                        result.push(centenas[x] + " e " + unidades[j]);
                    }
                }
                count = 1
            }
            if (count == 1) {
                for (let y = 0; y < dezDez9.length; y++) {
                    result.push(centenas[x] + " e " + dezDez9[y]);
                }
                count = 2
            }
            if (count == 2) {
                for (let i = 0; i < dezenas.length; i++) {

                    for (let j = 0; j < unidades.length; j++) {
                        if (unidades[j] == unidades[0]) {
                            result.push(centenas[x] + " e " + dezenas[i])
                        } else {
                            result.push(centenas[x] + " e " + dezenas[i] + " e " + unidades[j])
                        }
                    }
                }
                count = 0
            }
        }
    }

    return result.toString()
}
numbersToWords()