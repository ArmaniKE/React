var cancellable = function(fn, args, t) {
    let bl = false;
    setTimeout(() => {
        if(!bl){
            fn(...args)
        }
    }, t);

    return function(){
        bl = true;
    }
};