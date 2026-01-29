function solution(my_string, overwrite_string, s) {
    // 1. 앞부분 -> He
    const head = my_string.substring(0,s);
    
    // 2. 뒷부분 -> d
    const tail = my_string.substring(s + overwrite_string.length);
    
    return head + overwrite_string + tail
}