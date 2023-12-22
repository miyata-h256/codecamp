const allConstruct = (target,wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]];

    let result = []
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix,wordBank,memo);//ここで再帰処理の結果が返ってくる
            const targetWays = suffixWays.map(way => [word,...way]);//再帰処理で帰ってきた結果と挿入する要素を同次元にする
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
}

console.log(allConstruct("purple",["purp","p","ur","le","purpl"]));
console.log(allConstruct("",["purp","p","ur","le","purpl"]));
console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd","ef","c"]));