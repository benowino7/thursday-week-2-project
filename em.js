// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') # should return ['ab', 'c_']
// solution('abcdef') # should return ['ab', 'cd', 'ef']


var r, b, f;
f = [];
b = '_'
function split(a = '') {
    // console.log(a.length);
    if (a.length % 2 !== 0) {
        for (var i = 0; i < a.length; i += 2) {
            f.push(a[i] + a[i + 1]);
        }
         f.pop();
         f.push(a[a.length - 1] + b);
        console.log(f.length);
    }
    else {
        for (var i = 0; i < a.length; i += 2) {
            f.push(a[i] + a[i + 1])
        }

    }


} split(a = 'leahbensonf');
// console.log(r);
// console.log(a);
console.log(f);
