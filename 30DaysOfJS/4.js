var createCounter = function(init) {
    let ans = init;
    return{
        reset(){
            return ans=init;
        },
        increment(){
            return ++ans;
        },
        decrement(){
            return --ans;
        }         
    } 
};