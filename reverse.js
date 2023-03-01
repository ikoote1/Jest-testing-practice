function reverseString(string){
    let str = '';
    for(i=string.length-1;i>=0;i--){
        str += string[i];
    }
    return str;
} 
module.exports = reverseString;