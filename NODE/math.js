const add=(x,y)=>{
    return x+y;
}
const PI=3.14159;
const square = (x) => {
    return x*x;
}
let obj={
    add:add,
    PI:PI,
    square:square
}
module.exports=obj;
// module.exports.add=add;
// module.exports.PI=PI;
// module.exports.square=square;