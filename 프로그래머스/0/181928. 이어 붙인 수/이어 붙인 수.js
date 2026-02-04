function solution(num_list) {
    let oddStr = "";
    let evenStr = "";
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 1) {
            oddStr += num_list[i];
        }else {
            evenStr += num_list[i];
        }
    }
    return Number(oddStr) + Number(evenStr);
}