const instructorWithLongestName = function(instructors) {

  let longName = instructors[0].name.length;

  for (i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > longName) {
      longName = instructors[i].name;
      course = instructors[i].course;
    }
  }
  return { "name": longName, "course": course}
};

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));