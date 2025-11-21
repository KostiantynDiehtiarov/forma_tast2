const str = "aaasssdddxxcddxcssaaaaaadddddwdwdwdxxxccaaaaaaaaaaa"

const arrayOfLetters = ["a", "s", "d", "w"];

let arrayForCounting = [];

for(let i = 0; i <= arrayOfLetters.length; ++i) {
    arrayForCounting[arrayOfLetters[i]] = 0;
}

function findSubString(str) {
    let subString = "";
    let resultString = "";
    if(arrayOfLetters.indexOf(str[0]) != -1) {
        subString += str[0];
        arrayForCounting[str[0]]++;
    }
    for(let i = 1; i < str.length; ++i) {
        if(arrayOfLetters.indexOf(str[i]) != -1) {
            if(str[i] == str[i-1]) {
                subString += str[i];
                arrayForCounting[str[i]]++;
            } else {
                if(arrayForCounting[str[i]] == 0) {
                    subString += str[i];
                    arrayForCounting[str[i]]++;
                } else {
                    if(subString[0] == str[i]) {
                        subString.length > resultString.length ? resultString = subString : null;
                        subString = subString.slice(arrayForCounting[str[i]]);
                        subString+=str[i]
                        arrayForCounting[str[i]] = 1;
                    } else if(subString[0] != str[i]){
                        subString.length > resultString.length ? resultString = subString : null;
                        let indexOfChar = subString.lastIndexOf(str[i]);  
                        if(indexOfChar != -1) {
                            for(let j = 0; j <= indexOfChar; ++j) {
                                arrayForCounting[subString[j].toString()] = 0;
                            }

                            subString = subString.slice(indexOfChar+1) + str[i];
                            arrayForCounting[str[i]]++;
                        }
                    }
                }
            }
            subString.length > resultString.length ? resultString = subString : null;
        }
    }
    return resultString;
}

console.log(findSubString(str));