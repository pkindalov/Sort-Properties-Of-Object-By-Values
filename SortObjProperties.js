class SortObjProperties {
  constructor(mainObject, separator) {
    this.mainObject = mainObject;
    this.values = Object.values(mainObject);
    this.sortedValues = this.values.sort((a, b) => a.localeCompare(b));
    this.resultArr = [];
    this.resultObj = {};
    this.separator = separator;
    this.tempObjArr = [];
    this.tempObjKey = {};
    this.tempObjValue = "";
    this.repeatedKeysNum = 0;
    this.repeatedValues = [];
  }

  findPropFromMainObj(propValue, mainObj, separator) {
    let t = "";
    for (let prop in mainObj) {
      t = mainObj[prop];
      if (mainObj[prop] == propValue) {
        return `${prop}${separator}${mainObj[prop].replace(
          /\\([\s\S])|(")/g,
          "\\$1$2"
        )},`;
      }
    }
  }

  addToResultObj(str, arr) {
    if (!arr.includes(str)) {
      arr.push(str);
    } else {
      this.repeatedKeysNum++;
      this.repeatedValues.push(str);
    }
    return this;
  }

  printObjKeyValues() {
    console.log(
      `Main Object All Keys Count: `,
      Object.keys(this.mainObject).length
    );
    // console.log(Object.keys(this.sortedValues).length);
    console.log(
      `Result Object All Keys Count: `,
      Object.keys(this.resultObj).length
    );
    console.log(
      `Repeated/Not Added key-value pairs: ${this.repeatedKeysNum}\n`
    );
    console.log(
      "----------------------------------------------------------------------------------------------------"
    );
    for (let p in this.resultObj) {
      console.log(`${p} : ${this.resultObj[p]}`);
    }
  }

  filterAndPutSortedProps() {
    this.sortedValues.forEach(propValue => {
      if (propValue != undefined) {
        propValue = propValue.trim();
      }
      this.addToResultObj(
        this.findPropFromMainObj(propValue, this.mainObject, this.separator),
        this.resultArr
      );
    });

    return this;
  }

  fillResultArr() {
    this.resultArr.forEach(el => {
      if (el !== undefined) {
        this.tempObjArr = el.split(this.separator);
        this.tempObjKey = this.tempObjArr[0].trim();
        this.tempObjValue = this.tempObjArr[1].trim();

        this.resultObj[this.tempObjKey] = this.tempObjValue;
      }
    });

    return this;
  }

  printRepeatedValues() {
    let repeatedValue;
    console.log("Following keys are repeated: ");
    this.repeatedValues.forEach(key => {
      repeatedValue = key.split(this.separator)[1];
      console.log(repeatedValue);
    });
    console.log(
      "----------------------------------------------------------------------------------------------------"
    );
  }

  get getSortedObj() {
    this.sortedValues = this.filterAndPutSortedProps();
    this.resultArr = this.fillResultArr();
    return this.resultObj;
  }
}

//test
let propsToSort = require("./objectForSorting").getTranslationObjEn();
let separator = "--";

let sort = new SortObjProperties(propsToSort, separator);
// let sortedObj = sort.getSortedObj();

sort.getSortedObj;
sort.printRepeatedValues();
sort.printObjKeyValues();
// console.log(Object.keys(sortedObj).length);
