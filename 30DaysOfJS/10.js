var once = function(fn) {
    let bl = false;
    return function(...args){
        if(bl){
            return undefined;
        }
        bl = true;
        return fn.apply(this, args);
    }
};