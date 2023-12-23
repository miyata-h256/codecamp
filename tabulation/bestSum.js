const bestSum = (targetSum,numbers) => {
    let table = Array(targetSum+1).fill(null);
    table[0] = []

    // let shortestCombination = null;
    for(let i=0;i<=targetSum;i++){
        if(table[i]!==null){
            for(let num of numbers){
                const combination = [...table[i],num];
                //jsでは排列のundefinedとnullはfalse扱いとなる
                if(!table[num+i] || table[num+i].length > combination.length){
                    table[num+i] = combination;
                }
            }
        }
        
    }

    return table[targetSum];
}
// console.log(bestSum(7,[5,3,4,7]));
// console.log(bestSum(8,[2,3,5]));
console.log(bestSum(8,[1,4,5]));//[4,4]
console.log(bestSum(100,[1,2,5,25]));



