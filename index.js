function myEach(collection, callback){
  const iterator = Array.isArray(collection) ? collection : Object.values(collection);
  for (let element of iterator){
      callback(element);
  };
  return collection;
};

function myMap(collection, callback){
  const newCollection = [];
  const iterator = Array.isArray(collection) ? collection : Object.values(collection);
  for (let element of iterator){
    const transformedValue = callback(element);
    newCollection.push(transformedValue);
  }
  return newCollection;
}

function myReduce(collection, callback, acc) {
  if (typeof acc === 'undefined'){
    if (Array.isArray(collection)){
      acc = collection[0];
      collection = collection.slice(1);
    } else {
      const keys = Object.keys(collection);
      acc = collection[keys[0]];
      collection = Object.assign({}, collection);
      delete collection[keys[0]];
    };
  };
  for (const key in collection){
    acc = callback(acc, collection[key], collection);
  };
  return acc;
}

function myFind(collection, predicate){
  for (let i = 0; i < collection.length; i++){
    if (predicate(collection[i])){
      return collection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate){
  const trueArray = []
  for (let i = 0; i < collection.length; i++){
    if (predicate(collection[i])){
      trueArray.push(collection[i])
    }
  }
  return trueArray
}

function mySize(collection){
  if (Array.isArray(collection)){
    return collection.length;
  } else {
    return Object.keys(collection).length;
  };
};

function myFirst(array, n) {
  if (typeof n === 'undefined' || n > array.length) {
    return array[0];
  };
  if (n > 0 && Number.isInteger(n)) {
    return array.slice(0, n);
  };
  return [];
}

function myLast(array, n) {
  if (typeof n === 'undefined' || n > array.length) {
    return array[array.length - 1];
  }
  if (n > 0 && Number.isInteger(n)) {
    return array.slice(array.length - n);
  }
  return [];
}

function myKeys(object){
  return Object.keys(object)
}

function myValues(object){
  return Object.values(object)
}