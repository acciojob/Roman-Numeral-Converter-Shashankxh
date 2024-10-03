function convertToRoman(num) {
    // List of Roman numerals and their corresponding values in descending order
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],   // Subtractive combination for 900
        ['D', 500],
        ['CD', 400],   // Subtractive combination for 400
        ['C', 100],
        ['XC', 90],    // Subtractive combination for 90
        ['L', 50],
        ['XL', 40],    // Subtractive combination for 40
        ['X', 10],
        ['IX', 9],     // Subtractive combination for 9
        ['V', 5],
        ['IV', 4],     // Subtractive combination for 4
        ['I', 1]
    ];

    let result = '';  // This will store the Roman numeral

    // Iterate over each Roman numeral in the list
    for (let [symbol, value] of romanNumerals) {
        // Append symbols to the result while subtracting their value from num
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(convertToRoman(36));  // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
