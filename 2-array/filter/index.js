function chooseMultiplesOfThree(collection) {
  return collection.filter(input => input % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter(n => {
    n !== n + 1;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
