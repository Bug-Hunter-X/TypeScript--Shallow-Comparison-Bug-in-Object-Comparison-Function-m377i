function deepCompare(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
    return obj1 === obj2;
  }

  // Check if both objects have the same type
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Check if both objects are of primitive type
  if (typeof obj1 !== 'object') {
    return obj1 === obj2;
  }

  // Check if both objects have the same number of keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if both objects have the same keys and values recursively
  for (let key of keys1) {
    if (!deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
} 