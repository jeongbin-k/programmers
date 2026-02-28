function solution(myString, pat) {
    let change = [...myString].map(v => v === "A" ? "B" : "A").join("");
    return change.includes(pat) ? 1 : 0;
}