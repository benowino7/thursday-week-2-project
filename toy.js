// write a string to create a new string if the string already ends with a number,the number should be incremented by 1. if the string does not end with a number the number 1 should be appended to the new string

var final =[];
function string(a=[]){
    var c=0;
    for (i=0;i<a.length;i++){
        if(a[i]===a[c]){
            console.log(true);
            final.push(a[i]+c);
            c++;
        }
        else{
            console.log(false);
        }
    }
    
}string(a=['ben','ben','ben']);
console.log(final);
