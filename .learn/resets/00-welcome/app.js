let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yenes
    let valueInYen = valueInDollar * (oneEuroIs["JPY"] / oneEuroIs["USD"]);
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = valueInYen => (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];

module.exports = { fromYenToPound, fromEuroToDollar, fromDollarToYen  }