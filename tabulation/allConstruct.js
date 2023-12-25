const allConstruct = (target,wordBank) => {
    const table = Array(target.length+1).fill().map(() => []);

    table[0] = [[]];

    for(let i=0;i<=target.length;i++){
        for(let word of wordBank){
            if(target.slice(i,i+word.length) === word){
                const newCombinations = table[i].map(subArray => [...subArray,word]);//二次元配列
                
                table[i+word.length].push(...newCombinations);//javascriptの配列のpushは複数指定してもOK
            }
        }
    }

    return table[target.length];
}

console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd","ef","c"]));