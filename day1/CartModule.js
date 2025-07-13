let addToCart=()=>{
    return "addto cart"
}
let changeQty=()=>{
    return"qty is changed"
}
let name ='ansa here learning backend';
//module.exports=addToCart;//used for exporting single
module.exports={addToCart,changeQty,name}//used for exporting two or more
//u can not only export module but variable can also be exported i.e
//if the type is module then use import export but if you are using commonjs then require is used