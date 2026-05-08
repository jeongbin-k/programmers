function solution(arr) {
    let len = 1;
    while (len < arr.length) len *= 2;
    return [...arr, ...Array(len - arr.length).fill(0)];
}