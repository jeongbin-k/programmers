function solution(a, b, c, d) {
    const [p1,p2,p3,p4] = [a,b,c,d].sort((x,y)=> x - y);
    
    // 규칙1 :네 주사위가 모두 같다면 1111 * 2
    if(p1 === p4) {
        return 1111 * p1
    }
    // 규칙2 :세 주사위가 같고 하나가 다르면 (10 * 동일주사위 + 다른주사위)**2 
    else if (p1 === p3) return Math.pow(10 * p1 + p4, 2);
    else if (p2 === p4) return Math.pow(10 * p2 + p1, 2);
    
    // 규칙3 : 두 개씩 같은 값이 나오면 (6 + 3) * (6 - 3) 
    else if (p1 === p2 && p3 === p4) return (p1 + p3) * Math.abs(p1 - p3);
    
    // 규칙4 : 두 개씩 같은 값인 나오고 다른 두 값이 다르면 다른 두값을 5 * 6
    else if (p1 === p2) return p3 * p4;
    else if (p2 === p3) return p1 * p4;
    else if (p3 === p4) return p1 * p2;
    
    // 규칙5 : 모든 숫자가 다르면 낮은 숫자
    else {
        return p1;
    }
    
}
