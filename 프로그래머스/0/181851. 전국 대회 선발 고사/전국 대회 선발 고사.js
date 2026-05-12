function solution(rank, attendance) {
    const students = rank
        .map((r, i) => ({ index: i, rank: r }))
        .filter((_, i) => attendance[i])
        .sort((a, b) => a.rank - b.rank);

    const [a, b, c] = students;
    return 10000 * a.index + 100 * b.index + c.index;
}