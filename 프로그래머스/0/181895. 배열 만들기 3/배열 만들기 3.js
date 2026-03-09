function solution(arr, intervals) {
    const [[a1, b1], [a2, b2]]  = intervals;
    
    const first = arr.slice(a1, b1 + 1);
    const second = arr.slice(a2, b2 + 1);
    
    return [...first, ...second];
}