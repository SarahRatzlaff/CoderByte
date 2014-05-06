function LetterChanges(str) {
    var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    var strArray = str.split("");
    for (var i = 0; i < str.length; i++) {
    
    if (strArray[i] === "z") {
        strArray[i] = "A";
    }
        var strIndex = alphabetArray.indexOf(strArray[i]);
        if(strIndex !== -1) { 
            strArray[i] = alphabetArray[strIndex + 1]
            if (strArray[i] === "a" || strArray[i] === "e" || strArray[i] === "i" || strArray[i] === "o" || strArray[i] === "u") {
                strArray[i] = strArray[i].toUpperCase();
            }
        }
       
    }
    return strArray.join("");
    
    // code goes here  
    return strArray;


}
var result = LetterChanges("hello*zz3");
alert(result);