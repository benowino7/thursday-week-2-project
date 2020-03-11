var results = [];
function unique(names = []) {
    for (i = 0; i < names.length; i++) {
        
        if (i <= 0) {
            results.push(names[i]);
        }
        else { results.push(names[names.length-i]) }
    }
}unique(names=['ben','likes','not','being','pushed','by','people'])
console.log(results);