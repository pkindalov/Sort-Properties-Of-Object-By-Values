//Logic of the algorithm
//1.Get the main object with the many properties from objectForSorting file. You must put yours in getTranslationObjEn() method
//  or to create yours in the same file.
//2.Get and sort the values of the main object.
//3.I iterate sorted array which contains the values of the main object and search the key of every value.
//4.When findPropFromMainObj function find the key of the value, it make them on string and return it.
//  Also, findPropFromMainObj replaces double quotes in value with \".
//5.After findPropFromMainObj return the string with key-value par, then the addToResultObj function check if this string is
//  available in resultArr. If it is, that mean it is repeating, so it will NOT be added.
//6.When iterating of the sorted values array is finished, then I iterate the resultArr array whith key-values strings.
//  Then I split all key-value strings with separator '--'(It is randomly choosen and can be changed from separator variable) and keep the splitted values,
//  in tempObjKey and tempObjValue and add them to the resultObj.
//7.In the end, I just iterate properties of the newly created and filled object resultObj.

let mainObjProps = require("./objectForSorting").getTranslationObjEn();
let values = Object.values(mainObjProps);
let sortedValues = values.sort((a, b) => a.localeCompare(b));
let resultArr = [];
let resultObj = {};
let separator = "--";

//iterate over the main object properties and search the key of the current value, then replace " inside the value if any and return
//founded key-value pair.
function findPropFromMainObj(propValue, mainObj, separator) {
  for (let prop in mainObj) {
    if (mainObj[prop] == propValue) {
      return `${prop}${separator}${mainObj[prop].replace(
        /\\([\s\S])|(")/g,
        "\\$1$2"
      )},`;
    }
  }
}

//check if the key-value pair exists in the arr. If they are, then they will not be added to the resulting object.
function addToResultObj(str, arr) {
  if (!arr.includes(str)) {
    arr.push(str);
  }
  // else {
  //   console.log(`Repeat: ${str}`);
  // }
}

function printObjKeyValues(resultObj) {
  console.log(Object.keys(mainObjProps).length);
  console.log(Object.keys(sortedValues).length);
  console.log(Object.keys(resultObj).length);
  console.log(
    `Repeated key-value pairs: ${Object.keys(sortedValues).length -
      Object.keys(resultArr).length}`
  );
  for (let p in resultObj) {
    console.log(`${p} : ${resultObj[p]}`);
  }
}

//Iterate sorted values and add not repeating key-values.

sortedValues.forEach(propValue => {
  if (propValue != undefined) {
    propValue = propValue.trim();
  }
  addToResultObj(
    findPropFromMainObj(propValue, mainObjProps, separator),
    resultArr
  );
});

let tempObjArr;
let tempObjKey;
let tempObjValue;

resultArr.forEach(el => {
  if (el !== undefined) {
    tempObjArr = el.split(separator);
    tempObjKey = tempObjArr[0].trim();
    tempObjValue = tempObjArr[1].trim();

    resultObj[tempObjKey] = tempObjValue;
  }
});

// console.log(Object.keys(resultObj).length);
// console.log(resultObj["busNumber"]);
// console.log(resultObj.janTx);
printObjKeyValues(resultObj);
