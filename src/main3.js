//@flow
import createMap from "./createMap";

let myMap = createMap();

myMap.set("nama", "joshua");
myMap.set("umur", "18");
myMap.set("password", "1997");
console.log(myMap.get("nama"));
console.log(myMap.get("umur"));
console.log(myMap.get("password"));
console.log(myMap.get("umur"));
