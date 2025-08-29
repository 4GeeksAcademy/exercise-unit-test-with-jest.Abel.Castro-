let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

    
    expect(dollars).toBeCloseTo(expected); 
})

test("One Dollar should be 92,06 yens", function() {
   
    const { fromDollarToYen } = require('./app.js');

   
    const yens= fromDollarToYen(5.5);

   
    const expected = 5.5 * oneEuroIs["JPY"] / oneEuroIs["USD"];

    
    expect(yens).toBeCloseTo(expected); 
})

test("One yen should be 0,0056 pounds", function() {
    
    const { fromYenToPound } = require('./app.js');

    
    const pounds = fromYenToPound(7.4);

    
    const expected = 7.4 / oneEuroIs["JPY"] * oneEuroIs["GBP"];
   
    expect(pounds).toBeCloseTo(expected); 
})