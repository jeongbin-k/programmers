function solution(arr, query) {
    let start = 0;
    let end = arr.length - 1;

    for (let i = 0; i < query.length; i++) {
        const q = query[i];
        if (i % 2 === 0) {
            end = start + q;
        } else {
            start = start + q;
        }
    }
    return arr.slice(start, end + 1);
}