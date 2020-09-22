function chooseMultiplesOfThree(collection) {
  return collection.filter(input => input % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // return collection.filter(n => {
  //   n !== n + 1;
  // });
  const set = new Set(collection);
  return [...set];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
