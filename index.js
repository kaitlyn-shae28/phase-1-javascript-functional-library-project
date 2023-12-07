function myEach(collection, callback){
    const iterator = Array.isArray(collection) ? collection : Object.values(collection);
    for (let element of iterator){
        callback(element)
    }
    return collection
}

function myMap(collection, callback) {
    const newCollection = [];
    const iterator = Array.isArray(collection) ? collection : Object.values(collection);
    for (let element of iterator) {
      const transformedValue = callback(element);
      newCollection.push(transformedValue);
    }
    return newCollection;
  }

 function myReduce(collection, callback, acc) {
  let startIdx = 0;
  if (acc === undefined) {
    if (Array.isArray(collection)) {
      acc = collection[startIdx];
      startIdx++;
    } else {
      const keys = Object.keys(collection);
      acc = collection[keys[startIdx]];
      startIdx++; 
    }
  }

  const iterator = Array.isArray(collection) ? collection.slice(startIdx) : Object.values(collection);

  for (let element of iterator) {
    acc = callback(acc, element, collection);
  }

  return acc;
};