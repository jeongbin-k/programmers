function solution(arr) {
    let stk = [];
    let i = 0;
    
    while(i < arr.length) {
        if(stk.length === 0) {
            stk.push(arr[i])
            i++
        }
        else if (stk[stk.length-1] < arr[i]) {
            stk.push(arr[i])
            i++
        }
        else {
            stk.pop()
        }
    }
        
    return stk;
    
    
    
    // 규칙 1. 빈 배열이면 arr[i] stk에 추가 i증가
    // 규칙 2. stk의 마지막 원소 < arr[i] => arr[i]를 뒤에 추가 i증가
    // 규칙 3. stk의 마지막 원소 >= arr[i] => pop메서드로 제거 
}