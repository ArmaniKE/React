var reduce = function(nums, fn, init) {
    if(nums.length == 0){
        return init;
    }
    let res = 0;
    for(let i = 0;i < nums.length;i++){
        if(i == 0){
            res = fn(init,nums[i]);
        }
        else{
            res = fn(res,nums[i]); 
        }
    }
    return res;
};