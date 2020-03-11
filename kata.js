function middle(ent=''){
// console.log (ent.length);
if (ent.length%2===0){
    console.log(ent[(ent.length/2)-1]+ent[ent.length/2]);
}
else{
    console.log(ent[(ent.length/2)-0.5]);
}


}middle(ent='wedding')