//@flow
type person = {
  name :string,
  age: number
};

let josh: person = {
  name:'josh',
  age:2,
}
let dono: person = {
  name:'dono',
  age:2,
}
let rani: person = {
  name:'rani',
  age:2,
}
let a = 0;
let people = [
  josh,dono,rani
]
function getNames(people :Array<person>):Array<string>{
  let names: Array<string> = [];
  for (let person  of people) {
    names.push(person.name);
  }
  return names;
}

console.log(getNames(people));
