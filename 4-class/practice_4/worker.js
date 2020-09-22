import Person from './person';

export default class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    const personIntroduce = super.introduce();
    return `${personIntroduce} I am a Worker. I have a job.`;
  }
}
