export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const value of array) {
    arr.append(appendString + value);
  }

  return arr;
}
