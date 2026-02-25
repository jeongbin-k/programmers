function solution(arr, k) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        result.push( k % 2 !== 0 ? arr[i] * k : arr[i] + k);
    }
        return result;
}