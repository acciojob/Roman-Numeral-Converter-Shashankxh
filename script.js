function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
 let result = ''; // This will store the Roman numeral

    // Array representing subtractive combinations for specific Roman numeral patterns
    const subtractiveCombinations = [
        ['CM', 900], // 900 is represented as CM
        ['CD', 400], // 400 is represented as CD
        ['XC', 90],  // 90 is represented as XC
        ['XL', 40],  // 40 is represented as XL
        ['IX', 9],   // 9 is represented as IX
        ['IV', 4]    // 4 is represented as IV
    ];

    // Handle subtractive combinations first
    for (let [symbol, value] of subtractiveCombinations) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    // Now handle the standard Roman numeral values in the obj object
    for (let key in obj) {
        const [symbol, value] = obj[key];

        // Append symbols to the result while subtracting their value from num
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
