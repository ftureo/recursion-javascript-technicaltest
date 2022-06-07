console.log("Testing")

// function printCurlyBraces(balancedBraces, openBrace, closeBrace, newString, balancedResults){
//     if(openBrace == balancedBraces && closeBrace == balancedBraces){
//         balancedResults.push(newString)
//         return
//     }
//     if(openBrace < balancedBraces){
//         printCurlyBraces(balancedBraces, openBrace + 1, closeBrace, newString + "{", balancedResults)
//     }
//     if(closeBrace < openBrace){
//         printCurlyBraces(balancedBraces, openBrace, closeBrace + 1, newString + "}", balancedResults)
//     }
// }
 
// let balancedBraces = 4;
// let balancedResults = [];

// printCurlyBraces(balancedBraces, 0, 0, "", balancedResults);

// balancedResults.map((result)=> {
//     return(
//         document.write(result), 
//         document.write("<br/>")
//     )
// })




function superdigit(number, repetitions) {
    const numberProccesed = number.toString().repeat(repetitions)
    const numberTransform = numberProccesed.split("")
    console.log("numberProccesed", numberProccesed, typeof numberProccesed)
    console.log(numberTransform)
    console.log(numberTransform.length)

}
superdigit(23, 3)

// using recursion
const findSum = (num) => {
    if(num < 10){
       return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 console.log("find", findSum(1));