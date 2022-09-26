class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(x) {
    if (x.isNan()) {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      this._numberOfStudents = x;
    }
  }
  quickFacts() {
    return console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let myIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[myIndex];
  }
}
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "Primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, "Middle");
    super(numberOfStudents);
  }
}
class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "High", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent guardian, or a family member over the age of 13."
);
const kemal = new High("Kemal", 999, ["basketbal", "football"]);
kemal.quickFacts();
console.log(lorraineHansbury.name);
console.log(kemal.sportsTeams);

const subs = School.pickSubstituteTeacher([
  "ali",
  "veli",
  "cemil",
  "osman",
  "ileri",
]);

const alSmith = new High("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log(alSmith.sportsTeams);
