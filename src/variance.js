// @flow

type Person = {
  +name: ?string,
  age: number
};
let josh: OtherPerson = {
  name: "josh",
  age: 2
};
type OtherPerson = {
  name: string,
  age: number
};


function testingError(personName:Person) {
  if(personName.name){
    console.log('not null')
  }
}
testingError(josh);
