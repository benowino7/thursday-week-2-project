var con=['be','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var first=[],final=[],res;
function alpha(inp=''){
for(i=0;i<inp.length;i++){

    first.push(inp[i]);
    
    
}
function comp(con,first){

    first.forEach((e1)=>con.forEach((e2)=>{
        if(e1===e2){
            final.push(con.indexOf(e2));
        }
    }));
    final.sort(function(a, b){return a-b});


    res = final[final.length-1];
    return con[res]+' = '+res;

}comp(con,first);


}
alpha(inp='sheila');

console.log(con[res]+' = '+res);
