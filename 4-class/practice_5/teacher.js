import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const personIntroduce = super.introduce();
    const { klass } = this;
    if (klass === null || klass === undefined) {
      return `${personIntroduce} I am a Teacher. I teach No Class.`;
    }
    return `${personIntroduce} I am a Teacher. I teach Class ${klass}.`;
  }
}
