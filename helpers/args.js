const getArgs = (args) => {
    const res = {};
    const [executor, file, ...rest] = args;
    // example: -s -h moscow
    rest.forEach((val, idx, arr) => {
        if (val.charAt(0) === '-') { // -s
            const valueSecondSymbol = val.substring(1);
            if (idx === arr.length - 1) {
                res[valueSecondSymbol] = true // { h: true }
            } else if (arr[idx + 1].charAt(0) !== '-') {
                res[valueSecondSymbol] = arr[idx + 1] // { s: moscow }
            } else {
                res[valueSecondSymbol] = true
            }
        }
    })
    // { s: true, h: 'moscow' }
    return res;
};

export { getArgs }