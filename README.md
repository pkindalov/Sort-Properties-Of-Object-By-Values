The main purpose of the project is when you have one big object with many and different by keys properties inside and you want to sort them by values. 

For example: 

Properties of object before(these are example properties in objectForSorting file):

      name: "Bernhard Tremblay V",
      name2: "Bernhard Tremblay V",
      street_Address: "494 Noble Fort",
      city: "West Dillanville",
      country: "United States of America",
      username: "Bernhard78",
      email: "Bernhard_Tremblay@hotmail.com",
      author_quote: '"Hello, world"'

After:


Main object props before:  8
Sorted and filtered props:  8
Final count of props:  7
Repeated key-value pairs: 1

author_quote : \"Hello, world\",
street_Address : 494 Noble Fort,
name : Bernhard Tremblay V,
email : Bernhard_Tremblay@hotmail.com,
username : Bernhard78,
country : United States of America,
city : West Dillanville,

One way to use it is to change  the properties of the mainObject with your own in method getTranslationObjEn in objectForSorting.js file

Another way is in file objectForSorting file to remove mine method and  add your own method or just just to add another one. If you decide one of these ways, then you must just change here:

let mainObjProps = require("./objectForSorting").getTranslationObjEn(); 

where you must change getTranslationObjEn() with your own.