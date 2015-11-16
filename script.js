function solution1(A) {
    var positiveElements = A.filter(function (element) {
        return element > 0
    });
    var missingElement = 0;
    if (positiveElements.length) {
        try {
            positiveElements.sort(function (e1, e2) {
                return e1 - e2;
            }).reduce(function (x, y) {
                if (y - x > 1) {
                    missingElement = ++x;
                    throw(solution1.break);
                }
                return y;
            }, 0);
        }
        catch (e) {
            if (e === solution1.break) {
                return missingElement;
            }
            else {
                throw e;
            }
        }
    }
    return missingElement;
}

function solution2(S){
    var bracketsStack = [];
    for(var i = 0; i < S.length; i++ ) {
        // opened bracket { [ (
        if (S[i].match(/\{|\[|\(/)) {
            bracketsStack.push(S[i]);   //write to stack new bracket
            continue;
        }
        // closed bracket } ] )
        if (S[i].match(/\}|\]|\)/)) {
            // pop the paired bracket from stack {} () []
            if ((bracketsStack.pop() + S[i]).match(/(\{})|(\(\))|(\[\])/)) {
                continue;
            }
            else {
                return false; // failed type of brackets
            }
        }
    }
    // stack is not empty
    if (bracketsStack.length) {
        return false;
    }
    else {
        return true;
    }
}

function solution3(A, F) {
    var parametersFunctionString = F.split(/=>/)[0].slice(1,-1);  // delete the round bracket
    var bodyFunctionString=F.split(/=>/)[1];
    var mappingFunction = new Function(parametersFunctionString,"return "+ bodyFunctionString+";");
    return A.map(mappingFunction);
}

var initialArray= [-100,9,10,11,-90,-1009,0,5,2,3,0,23,1,4,5,6,7,8,50,34];
console.log("Solution1. Initial array: " + initialArray.toString() + ". Result: "  + solution1(initialArray));
var initialString = "(adfdf)[sd{kl(l;l[k(jk];l;)kl}f]{sf}{dscfsad(lll)as}dfasd"; //"([{}])"
console.log("Solution2. Initial string: " + initialString + ". Result: " + solution2(initialString));
initialArray = [1,1,2,3,4,5,6,7,8,9,10]
initialString = "(el, i, arr)=>el+(i>0?arr[i-1]:arr[i])";
console.log("Solution3: Initial Array: " + initialArray.toString() + ". Function String: " + initialString + ". Result: " + solution3(initialArray, initialString));