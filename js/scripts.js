function Ticket (movie, movieTime, age) {
  this.movie = movie;
  this.movieTime = movieTime;
  this.age = age;  
}

Ticket.prototype.assignTicketPrice = function () {
  
  if (this.movie.isNewRelease) {
    this.price = 15;
  } else {
    this.price = 12;
  }

  if (this.movieTime === "Evening") {
    this.price += 3;
  } else if (this.movieTime === "Morning") {
    this.price -= 2;
  }

  if (this.age >= 64 || this.age <= 12) {
    this.price -= 3;
  }
}

Ticket.prototype.allowsKids = function () {
  if (this.age <= this.movie.minAge) {
    alert(`You must be ${this.movie.minAge} years old to watch ${this.movie.title}`);
    return false;
  } else {
    return true;
  }
}

function Movie (title, isNewRelease, minAge) {
  this.title = title;
  this.isNewRelease = isNewRelease;
  this.minAge = minAge;
}

let movie1 = new Movie("Forest Gump", false, 13);
let movie2 = new Movie("Frozen", false, 0);
let movie3 = new Movie("Train to Busan", true, 18);
let movie4 = new Movie ("Tenant", true, 18);
let movie5 = new Movie ("Trolls: World Tour", true, 0);
let movie6 = new Movie("Saw", false, 18);
