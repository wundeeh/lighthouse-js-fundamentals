function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;

  return (name + " is " + age + " years old.");
}

console.log(ageCalculator("Jack", 2004, 2016));