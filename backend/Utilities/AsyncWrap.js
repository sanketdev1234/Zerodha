function asyncWrap(fn){
    return function(req , res , next){
        fn(req , res , next).catch(next); // if error occur make a call to next error handling middleware
    }
}
module.exports=asyncWrap;