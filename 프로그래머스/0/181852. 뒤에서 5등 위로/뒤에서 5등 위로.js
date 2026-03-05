function solution(num_list) {
    const sort_num = num_list.sort((a,b) => a-b);
    return sort_num.slice(5);
}