//@flow
type Student = {
  name: string,
  age: number,
  school: { name: string, type: string }
};

type Person = { name: string, age: number, siblings: Array<string> };

let studentToPerson = (students: Array<Student>): Array<Person> => {
  let persons: Array<Person> = [];
  students.forEach(student => {
    let {name,age } = student;
    let newPerson :Person = {
      name:name,
      age:age,
      siblings:[],
    };
    persons.push(newPerson);
  });
  return persons;
};

let josh: Student = {
  name: "joshua",
  age: 20,
  school: {
    name: "noteredame",
    type: "highschool"
  }
};
let tono: Student = {
  name: "tono",
  age: 21,
  school: {
    name: "noteredame",
    type: "highschool"
  }
};
let students = [josh, tono];
let personFromStudent = studentToPerson(students);
console.log(personFromStudent);
