function solution(my_string, s, e) {
    // 앞
    const front = my_string.slice(0, s);
    
    // 중간
    const middle = my_string.slice(s, e +1);
    const reverseMiddle = middle.split('').reverse().join('');
    
    // 뒤
    const back = my_string.slice(e + 1);
    
    return front + reverseMiddle + back;
}