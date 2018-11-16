//@flow

type map = {
  get: (key: string) => mixed;
  set: (key: string, value: mixed) => void;
};
type Data = { [string]: mixed };
function createMap(): map {
  let map: Data = {};
  return {
    get: function(key) {
      return map[key];
    },
    set: function(key, value) {
      map[key] = value;
      return;
    },
  };
}

export default createMap;
