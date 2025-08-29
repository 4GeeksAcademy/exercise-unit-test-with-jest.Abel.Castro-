// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yenes
    let valueInYen = valueInDollar /1.07 * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función con el nombre exacto "formYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Libras
    let valueInPound = valueInYen /156.5 * 0.87;
    // Retornamos el valor en Yenes
    return valueInPound;
}


module.exports = { fromYenToPound, fromEuroToDollar, fromDollarToYen  }