var result = [];
function mul(b) {
    for (i = 1; i <= b; i++) {

        var c = result[0];
        if (i % 3 == 0 || i % 5 == 0) {

            result.push(i);
            for (d = 1; d < result.length; d++) {
                c= (c + result[d]);
                
            }
        }

    }
    console.log(c);
} mul(55)
console.log(result);



// for (i=0; i<result.length; i++){
// if (i=re)
// }
