/* Inheritance */
class Person {
  hello() {
    return "Hello, I am a person";
  }
}

class Dev extends Person {
  intro() {
    return super.hello() + " . I can code =)))";
  }
}

const a = new Dev();
console.log(a.hello());
console.log(a.intro());
