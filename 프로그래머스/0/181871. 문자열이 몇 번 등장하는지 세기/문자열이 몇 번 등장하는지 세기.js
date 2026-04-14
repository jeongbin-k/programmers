function solution(myString, pat) {
    let result = 0;
    
    for(let i = 0; i <= myString.length - pat.length; i++) {
        let target = myString.slice(i, i + pat.length);
        
        if(target === pat) {
            result ++;
        }
    }
    
    return result;
}