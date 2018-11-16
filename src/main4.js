//@flow
/*
So your task today is to create an array filter function and use Flow.
 Also write tests using jest.
The function takes two parameters. The first is an array. The second is a function. (edited)
`function filter(array, fn) { ... }` (edited)
You should run the fn once for each element of the array. the fn should return a boolean
If the boolean is true, that means keep the element. If false, then skip it.
So `filter()` returns a new array with zero or more items from the original array
*/

function filter<T>(items: Array<T>, fn: T => boolean): Array<T> {
  let newArray = [];
  items.forEach(item => {
    if (fn(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

export default filter;
