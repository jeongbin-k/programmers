function solution(binomial) {
    const [sA, op, sB] = binomial.split(" ");
    
    const a = Number(sA);
    const b = Number(sB);
    
    if(op === "+") return a + b;
    if(op === "-") return a - b;
    if(op === "*") return a * b;
}