const canConstruct = (target,wordBank,memo={}) =>{
    if(target in memo) return memo[target];
    if(target === "") return true;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);//先頭から文字列数分間引く
            if(canConstruct(suffix,wordBank,memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

// not memoized 
// time: O(n^m*m)
// space: O(m^2)
//
// memoized
// time: O(n*m^2)
// space: O(m^2)




console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeeee","eeeeeeeee"]));