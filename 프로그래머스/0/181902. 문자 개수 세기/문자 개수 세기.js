function solution(my_string) {
    let result = Array(52).fill(0);
    
    for(let i = 0; i < my_string.length; i++) {
        let char = my_string[i];    // 현재 글자
        let code = char.charCodeAt()
        
        if(code <= 90) {
            result[code -65]++;
        }else {
            result[code -71]++;
        }
    }
        return result;
}