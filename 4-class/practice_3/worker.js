import Person from './person';

export default class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    return `I am a Worker. I have a job.`;
  }
}
