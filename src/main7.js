//@flow
type TodoItem = { description: string, isDone: boolean };
type TodoList = Array<TodoItem>;
type ListCollection = { [name: string]: TodoList };

let task1: TodoItem = { description: "task 1", isDone: true };
let task2: TodoItem = { description: "task 2", isDone: true };
let task3: TodoItem = { description: "task 3", isDone: true };
let task4: TodoItem = { description: "task 4", isDone: true };
let task5: TodoItem = { description: "task 5", isDone: true };

let task: TodoList = [task1, task2, task3, task4, task5];

let makan1: TodoItem = { description: "makan nasi", isDone: true };
let makan2: TodoItem = { description: "makan ayam", isDone: true };

let makan: TodoList = [makan1, makan2];

let lunch: ListCollection = { task: task, makan: makan };

function swapItems(
  collection: ListCollection,
  listName: string,
  oldPosition: number,
  newPosition: number
): ListCollection {
  let newCollection : ListCollection = {};
  let {[listName]:swappedList , ...rest} = collection;
  let newSwappedList = [...swappedList];
  let temp = newSwappedList[oldPosition];
  newSwappedList.splice(oldPosition,1);
  newSwappedList.splice(newPosition,0,temp);
  newCollection[listName]= newSwappedList;
  Object.assign(newCollection, rest)
  return newCollection;
}
console.log('old');
console.log(lunch);
let newLunch = swapItems(lunch, 'task', 1, 3);
console.log('old after function');
console.log(lunch);
console.log('new');
console.log(newLunch);
