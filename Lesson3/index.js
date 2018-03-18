/*var os = require("os");
var message = "The platform is ";

function main(){
   console.log(message + os.platform());
}
main();


*/
var fs = require('fs');

fs.writeFileSync("obj.json", JSON.stringify({ "first_name": "Davit", 
"Last_name": "TerTorosyan", 
"age": 13, 
"tumo_student": true }));
var text = fs.readFileSync("obj.json").toString();
console.log(text);