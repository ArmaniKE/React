var sortBy = function(arr, fn) {
    const a = (a, b) => fn(a) - fn(b);
    return arr.sort(a)
};