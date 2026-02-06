function solution(n, control) {
    const option = {
        "w" : 1,
        "s" : -1,
        "d" : 10,
        "a" : -10
    }
    
    for(let i = 0; i < control.length; i++){
        const char = control[i];
        n+=option[char]
    }
    return n;
}