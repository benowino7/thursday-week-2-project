// 10,7,9,-5,3,0,7,-8,21,1=>5
var a = [];
var d,j;
function max (b=[]){
    b.sort(function(a, b){return a-b});
    count =0;
    for(i=0;i<b.length;i++){
    while (count<5){
         j = b.splice(b.length-1);
        a.push(j[i]);
        count ++;
       
    }
    // b.length=b.length-1;
        d = a[0];
    for (f=1;f<a.length; f++){
        d=d*a[f];
    }
}

}max(b=[-2,8,20,12,-4,40,3,7,0,-3]);
console.log(b);
console.log(a);
console.log(d);
