const palindromes = function(string) {
    let originalString = string.toLowerCase().replaceAll(/[^a-z0-9]/g, "").split("").join("");
    let reversedString = string.toLowerCase().replaceAll(/[^a-z0-9]/g, "").split("").reverse().join("");
    if (originalString == reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
