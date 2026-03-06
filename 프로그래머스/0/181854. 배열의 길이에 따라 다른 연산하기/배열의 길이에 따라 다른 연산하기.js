function solution(arr, n) {
    return arr.map((val, idx) => {
        if(arr.length % 2 !== 0) {
            return idx % 2 === 0 ? val + n : val;
        } else {
            return idx % 2 !== 0 ? val + n : val;
        }
    });
}
                   
// 1. arr 배열의 길이가 홀수이면 arr의 짝수 인덱스에 + n
// 2. arr 배열의 길이가 짝수이면 arr의 홀수 인덱스에 + n