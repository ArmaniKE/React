var chunk = function(arr, size) {
    const subarr = [];
    let i = 0;

    while (i < arr.length) {
        subarr.push(arr.slice(i, i + size));
        i += size;
    }

    return subarr;
};
