// Please refactor the code below to make it more concise, efficient and readable with good logic flow.

function findFirstStringInBracket(str) {
    // using truthy falsy
    if (!str.length) return "";
    let indexFirstBracketFound = str.indexOf("(");

    if (!indexFirstBracketFound >= 0) return "";
    let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);

    if (!wordsAfterFirstBracket) return "";
    wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
    
    let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
    if (!indexClosingBracketFound >= 0) return "";
    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
}
