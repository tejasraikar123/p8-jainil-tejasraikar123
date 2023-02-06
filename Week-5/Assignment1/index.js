function sequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

let seq = sequence(1, 5);

for (const num of seq) {
    console.log(num);
}