const howSum = (targetSum,numbers,memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder,numbers,memo)
        if(remainderResult !== null){
            memo[targetSum] = [...remainderResult,num];
            return [...remainderResult,num];
        }
    }

    memo[targetSum] = null;
    return null;
}


// m = target sum
// n = numbers.length
//
// Brute Force
// time: O(n^m*m)←配列のコピー操作が線形のため
// space: O(m)
//
// memoized
// time: O(n*m^2)
// space: O(m^2)

console.log(howSum(300,[7,14]));