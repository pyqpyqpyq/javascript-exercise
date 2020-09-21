// export default function collectCarNumberCount(collection) {
//   return collection.filter(carNumber=>carNumber.s
// }

export default function collectCarNumberCount(collection) {
  return collection.filter(carNumber => carNumber.startsWith('粤A')).length;
}
