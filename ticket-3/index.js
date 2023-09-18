function countNumberOfNinesInNumber(number) {
  let count = 0;
  const numberStr = number.toString();

  for (let i = 0; i < numberStr.length; i++) {
    const digit = numberStr[i];
    if ("9" === digit) {
      count++;
    }
    console.log(count);
  }

  return count;
}


let foo = countNumberOfNinesInNumber(999);
console.log(foo);