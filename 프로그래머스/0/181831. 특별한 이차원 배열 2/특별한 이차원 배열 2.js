function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
        return 1;
}

// [5, 192, 33]  0번줄
// [192, 72, 95] 1번줄
// [33, 95, 999] 2번줄

