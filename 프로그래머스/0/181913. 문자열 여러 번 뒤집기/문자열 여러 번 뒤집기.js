function solution(my_string, queries) {
    let arr = my_string.split('');
    
    for(let [s, e] of queries) {
        const sliced = arr.slice(s,e +1);
        sliced.reverse();
        arr.splice(s, e-s+1, ...sliced);
    }
    return arr.join('');
}