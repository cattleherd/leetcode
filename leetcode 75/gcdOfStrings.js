/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcd = function(a,b){
    if(b){
        return gcd(b, a%b);
    }else{
        return Math.abs(a);
    }
}

var gcdOfStrings = function(str1, str2) {
    let larger='';
    let smaller='';
    str1.length > str2.length ? larger = str1 : smaller = str1;
    str2.length > str1.length ? larger = str2 : smaller = str2;
    console.log(str1.slice(0, gcd(larger.length, smaller.length)));
    return (str1+str2 == str2 + str1) ? str1.slice(0, gcd(larger.length, smaller.length)) : '';
};


