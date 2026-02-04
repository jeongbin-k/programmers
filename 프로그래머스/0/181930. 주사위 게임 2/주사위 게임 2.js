function solution(a, b, c) {
    const set = new Set([a,b,c]);
    const s1 = a + b + c;
    const s2 = a**2 + b**2 + c**2;
    const s3 = a**3 + b**3 + c**3;
    
    if(set.size === 1) return s1 * s2 * s3;
    if(set.size === 2) return s1 * s2;
    return s1
}