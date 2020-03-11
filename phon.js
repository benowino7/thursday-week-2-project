var j, fin, f;
fin = [];
j = '-'
function phon_num(entry = []) {


    for (i = 0; i < entry.length; i++) {
        fin.push('(' + entry[0], entry[1], entry[2] + ')' + " ");
        fin.push(entry[3], entry[4], entry[5]);
        fin.push(j + entry[6], entry[7], entry[8], entry[9]);
        f = fin.join("");

        return f;



    }
    console.log(f);

} phon_num(entry = [1, 3, 2, 4, 5, 6, 7, 8, 9, 0]);
console.log(f);