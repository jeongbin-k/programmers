function solution(l, r) {
    let result = [];
    
    for(let i = l; i <= r; i++) {
        const s = i.toString();
        let isSafe = true;
        
        for(const char of s) {
            if(char !== '0' && char !== '5') {
                isSafe = false;
                break;
            }
        }
        
        if(isSafe) {
            result.push(i)
        }
    }
    
    return result.length === 0 ? [-1] : result
}