function capitalize(string){
    let splitString = string.charAt(0).toUpperCase() + string.slice(1);
    return splitString;
}

module.exports = capitalize;