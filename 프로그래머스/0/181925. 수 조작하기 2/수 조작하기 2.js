function solution(numLog) {
    let result = "";
    const option = {
        "1" : "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a"
    }
    
    for(let i = 1; i < numLog.length; i++) {
        const diff = numLog[i] - numLog[i -1];
        result += option[diff]
    }
    return result 
}
