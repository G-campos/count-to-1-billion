const count = () => {
    let sum = 0;
    while (sum < 1000000000) {
        sum++;
    }
    return sum
}

console.log(count())