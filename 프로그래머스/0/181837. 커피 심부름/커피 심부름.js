function solution(order) {
    return order.reduce((total, item) => {
        if (item.includes("cafelatte")) return total + 5000;
        return total + 4500;
    }, 0);
}