function removeFromArray(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let index = array.indexOf(element);
        if (index > -1) {
          array.splice(index, 1);
        } else if (index = -1) {
          return array;
        }
    }
    return array;
}    

// Do not edit below this line
module.exports = removeFromArray;
