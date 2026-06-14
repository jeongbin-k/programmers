function solution(s) {
    const lowerS = s.toLowerCase();
    
    let pCount = 0;
    let yCount = 0;
    
    for (let char of lowerS) {
        if (char === 'p') pCount++;
        if (char === 'y') yCount++;
    }

    return pCount === yCount;
}