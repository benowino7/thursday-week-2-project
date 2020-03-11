var h,k,y,b,r,z,t;
h=[];
r=[];
function string(ent=''){
for (i=0;i<ent.length;i++){

    k = parseInt(ent[i]);
    h.push (k);
    
}

for(l=0;l<h.length;l++){
    if (h[l]%1===0){
        r.push(h[l]);
        

    }
    else {
        continue;
    }

}
z = r.sort();
console.log(r)
console.log(z[0],z[z.length-1]);

}string(ent='7 8 0 4 9 ');
