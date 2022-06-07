console.log("Testing")

function printCurlyBraces(balancedBraces, openBrace, closeBrace, newString, balancedResults){
    if(openBrace == balancedBraces && closeBrace == balancedBraces){
        balancedResults.push(newString)
        return
    }
    if(openBrace < balancedBraces){
        printCurlyBraces(balancedBraces, openBrace + 1, closeBrace, newString + "{", balancedResults)
    }
    if(closeBrace < openBrace){
        printCurlyBraces(balancedBraces, openBrace, closeBrace + 1, newString + "}", balancedResults)
    }
}
 
let balancedBraces = 4;
let balancedResults = [];

printCurlyBraces(balancedBraces, 0, 0, "", balancedResults);

balancedResults.map((result)=> {
    return(
        document.write(result), 
        document.write("<br/>")
    )
})