function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

// export default function getScoreOutput(person) {
//   const grade = getScore(id);
//   return `你好，${person.firstname} ${person.lastName}！你的考试成绩为${grade}分`;
// }

export default function getScoreOutput(person) {
  const { firstName, lastName, id } = person;
  const grade = getScore(id);
  return `你好，${lastName}${firstName}！你的考试成绩为${grade}分`;
}

// export default function getScoreOutput(person) {
//   // const { firstName, lastName, id } = person;
//   const grade = getScore(id);
//   return `你好，${person.lastName}${person.firstName}！你的考试成绩为${grade}分`;
// }
