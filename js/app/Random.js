function random(min, max, count = 1) {
    let numbers = [];
    let m = {};
    max++;
    for (let i = 0; i < count; i++) {
        let rand = Math.floor(Math.random() * (max - min - count + 1) + min);
        numbers.push(((rand in m)? m[rand] : rand));
        let l = max - i - 1;
        m[rand] = (l in m) ? m[l] : l;
    }

    return numbers;
}

export default random;