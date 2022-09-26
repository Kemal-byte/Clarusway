class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get titleName() {
    return this._title;
  }
  get ratingScore() {
    return this._ratings;
  }
  get returnCheck() {
    console.log("Return check is called");
    return this._isCheckedOut;
  }
  set isCheckout(x) {
    console.log("Inisde checkout setter");
    this._isCheckedOut = x;
  }
  getAverageRating() {
    // console.log("inside the average rating function");
    let sum = 0;
    for (let i = 0; i < this._ratings.length; i++) {
      // console.log("Inside the for loop");
      sum += this._ratings[i];
    }
    return sum / this._ratings.length;
  }
  toggleCheckOutStatus() {
    // TODO: checkout out status method
    // console.log("Inside the toggle method");
    if (this._isCheckedOut == false) {
      this._isCheckedOut = true;
    } else if (this._returnCheck == true) {
      this._isCheckedOut = false;
    }
  }
  addRatings(x) {
    if (x > 0 && x < 6) {
      this._ratings.push(x);
    } else {
      console.log("Give a rating between 1 and 5 included.");
    }
  }
}
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    // super(rating);
    this._author = author;
    this._pages = pages;
  }
  get returnAuthor() {
    return this._author;
  }
  get returnPages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get returnDirector() {
    return this._director;
  }
  get returnRuntime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(title, rating, artist, [songs]) {
    super(title);
    super(rating);
    this._artist = artist;
    this._songs = [songs];
  }
  get returnArtist() {
    return this._artist;
  }
  get returnSongs() {
    return this._songs;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

// historyOfEverything.toggleCheckOutStatus();
// console.log(historyOfEverything.returnCheck);
// historyOfEverything.addRatings(4);
// historyOfEverything.addRatings(5);
// historyOfEverything.addRatings(5);
// console.log(historyOfEverything.ratingScore);
// console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.returnCheck);
speed.addRatings(1);
speed.addRatings(1);
speed.addRatings(5);
console.log(speed.getAverageRating());
