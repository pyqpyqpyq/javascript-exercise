export default function find00OldPerson(collection) {
  const person = collection.find(p => p.age <= 20);
  return person.name;
}
