//@flow
class AlphaMap {
  _data = {};
  set = (key, value) => {
    this._data[key] = value;
  };
  has = (key) => {
    return this._data.hasOwnProperty(key) ? true : false;
  };
  get = (key) => {
    return this._data[key];
  };
  forEach = (func) => {
    for (let prop in this._data) {
      if (this._data.hasOwnProperty(prop)) {
        func([prop, this._data[prop]]);
      }
    }
  };
}
function BetaMap() {
  let _data = {};
  let _map = {
    set: (key, value) => {
      _data[key] = value;
    },
    has: (key) => {
      return _data.hasOwnProperty(key) ? true : false;
    },
    get: (key) => {
      return _data[key];
    },
    forEach: (func) => {
      for (let prop in _data) {
        if (_data.hasOwnProperty(prop)) {
          func([prop, _data[prop]]);
        }
      }
    },
  };
  return _map;
}

let people = new AlphaMap();

people.set('123', {name: 'Alfi'});
people.set('234', {name: 'Daniel'});

console.log(people.has('234')); // => true
console.log(people.has('567')); // => false

console.log(people.get('234')); // => {name: 'Daniel'}
console.log(people.get('678')); // => undefined

people.forEach(([key, person]) => {
  console.log(key, person);
});
