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

Ticket.prototype.ageRestricted = function () {
  if (this.age <= this.movie.minAge) {
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

function movieSelector (movieName) {

  const movie1 = new Movie("Forest Gump", false, 13);
  const movie2 = new Movie("Frozen", false, 0);
  const movie3 = new Movie("Train to Busan", true, 18);
  const movie4 = new Movie ("Tenant", true, 18);
  const movie5 = new Movie ("Trolls: World Tour", true, 0);
  const movie6 = new Movie("Saw", false, 18);

  if (movieName === "Forest Gump") {
    return movie1;
  } else if (movieName === "Frozen") {
    return movie2;
  } else if (movieName === "Train to Busan") {
    return movie3;
  } else if (movieName === "Tenant") {
    return movie4;
  } else if (movieName === "Trolls: World Tour") {
    return movie5;
  } else if (movieName === "Saw") {
    return movie6;
  } else {
    return undefined;
  }
}

function displayTicket (ticket) {
  $(".movie-name").text(ticket.movie.title);
  $("#cost").text(`$${ticket.price}`);
  $("#results").show();
  $("p#approved-sale").show();
  $("p#unapproved-sale").hide();  
}

function tooYoung (ticket) {
  $("#min-age").text(ticket.movie.minAge);
  $(".movie-name").text(ticket.movie.title);
  $("#results").show();
  $("p#unapproved-sale").show();
  $("p#approved-sale").hide();
}

$(document).ready(function () {
  $("form#ticket-sale").submit(function (event) {
    event.preventDefault();
    $("#results").hide();

    let movieName = $("#movie").val();
    let movie = movieSelector(movieName);
    
    let timeOfDay = $("#time").val();
    let age = parseInt($("input#age").val());

    let ticket = new Ticket (movie, timeOfDay, age);
    ticket.assignTicketPrice();

    if (ticket.ageRestricted()) {
      displayTicket(ticket);
    } else {
      tooYoung(ticket);
    }    
    $("input#age").val("")
  });
});
