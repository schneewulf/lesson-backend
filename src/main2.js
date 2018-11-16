//@flow

let names = ['josh','alfi','rahel'];


function forEach(names : Array<string> , fn){
  for (let name of names) {
    fn(name);
  }
}

forEach(names, (name) => {
  console.log(name);
})

type Person = {
  firstName :string,
  lastName: string,
  getFullName : () => string
};

function makeperson(firstName : string,lastName : string) : Person {
  return {
    firstName:firstName,
    lastName :lastName,
    getFullName:()=>{
      return firstName+' '+lastName;
    }
  }
}
let person = makeperson('joshua', 'setiawan');
console.log(person.getFullName());
