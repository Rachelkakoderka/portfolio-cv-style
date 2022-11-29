var view = {
  displayMessage: function(msg) {
    let message1 = document.getElementById("messageArea");
    message1.innerHTML = msg;
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
    },
  displayHit: function(location) {
    let cell= document.getElementById(location);
    cell.setAttribute("class", "hit");
  }
};

//test metody displayMessage
//window.onload = view.displayMessage("To jest pole tekstowe");

//test metody displayMiss
//window.onload = view.displayHit("00");


var model = {
boardSize: 7,
numShips:3,
shipLength: 3,
shipSunk: 0,
ships: [
		{ locations: ["", "", ""], hits: ["", "", ""] },
		{ locations: ["", "", ""], hits: ["", "", ""] },
		{ locations: ["", "", ""], hits: ["", "", ""] }
	],

fire: function(guess) {

	for (var i=0; i<this.numShips; i++) {
        var ship = this.ships[i];
        var index = ship.locations.indexOf(guess);
           if (index >=0){
           view.displayHit(guess);
           view.displayMessage("Trafiony");
           ship.hits[index] = "hit";
              if (this.isSunk(ship)) {
              view.displayMessage("Trafiony Zatopiony");
              }
              return true;
           }
    }
    view.displayMiss(guess);
    view.displayMessage("Pudło");
    return false;
},
isSunk: function(aShip) {
    for (var k=0; k<this.shipLength; k++) {
       if (aShip.hits[k] !== "hit") return false;
       }
       this.shipSunk++;
       return true;
       },

generateShipLocations: function() {
var locations;

for (var i=0; i<this.numShips; i++) {
  do {
    locations = this.shipGenerator();
  }  while (this.collision(locations)); // powtarzaj generowanie locations tak długo jak collision będzie true
  this.ships[i].locations = locations;
  }
},


shipGenerator: function() {
var direction = Math.floor(Math.random()*2);//wylosowałam 1
var col;
var row;

if (direction ===1) {
//generate starting location for horizontal ship
row = Math.floor(Math.random()*this.boardSize); //0
col = Math.floor(Math.random()*((this.boardSize-this.shipLength)+1)); //0
} else {
//generate  starting location for vertical ship
col = Math.floor(Math.random()*this.boardSize);
row = Math.floor(Math.random()*((this.boardSize-this.shipLength)+1));
}

var locations=[];
for (var i=0; i<this.shipLength;i++) {
  if (direction===1){
    locations.push(row + "" + (col+i)); // dla i=0 : '00', dla i=1 : '01', dla i=2 : '02'
  } else {
    locations.push((row+i) + "" + col);
  }

}
return locations;
},

collision: function(loc) {
  for(var i=0; i<this.numShips; i++)
    {
    var shipPosition = this.ships[i].locations;
    for(var j=0; j<this.shipLength; j++)
      {
        if (shipPosition.indexOf[loc[j]]>0) {
          return true;
        }  
      } 
    }
    return false;
  } // koniec funkcji collision




}; // koniec obiektu model



var controller = {
guesses: 0, // przy definiowaniu properties nie ma var
allGuesses: [],

parseGuess: function(guess) {
var alphabet = ["A", "B", "C", "D", "E","F", "G"];

if (guess.length !== 2 || guess===null) { // spRwdzam czy jest dwa znaki i czy jest input
return alert("Wpisz nazwę pola składającą się z litery i cyfry");
} else {
var letter = guess.charAt(0).toUpperCase(); // jeżeli nie ma takiej litery to zwróci pusty string czyli false
var row = alphabet.indexOf(letter); // jeżeli nie ma takiego znaku zwróci -1, jeżeli jest to index litery z tablicy
var column = guess.charAt(1);

if (isNaN(row) || isNaN(column)) {
alert("Takie pole nie istnieje. Wpisz poprawny adres pola");
} else if (row<0 || row>=model.boardSize || column>=model.boardSize || column<0){
//console.log(row + column);
 alert("Pole poza planszą");
} else {
var playerGuess = row + column;
return playerGuess;
}
}
return null;
},

processGuess: function(guess) {
var playerGuess = this.parseGuess(guess); // dostaje dwie liczby - numer pola
//w książce sprawdzają czy gra się zakończyła na końcu a nie na początku czy gra nie jest zakończona.
if (playerGuess) {
       this.guesses++;
       var outcome = model.fire(playerGuess);
       if (outcome && (model.shipSunk === model.numShips)) {
                return alert("Ztopiłeś wszystkie moje statki w " + this.guesses + " próbach");
                }
       }
}
};

function handleFireButton() {
var playerInput = document.getElementById("guessInput");
var guess = playerInput.value;
controller.processGuess(guess);
playerInput.value = "";
};
function init() {
var fireButton = document.getElementById("fireButton");
fireButton.onclick = handleFireButton; // nie wpisuję tego jako funkcji tylko jako właściowść.
var playerInput = document.getElementById("guessInput");
playerInput.onkeypress = handleKeyPress;

model.generateShipLocations();
};

function handleKeyPress(e) {
var fireButton = document.getElementById("fireButton");
if (e.keyCode ===13) {
fireButton.click();
return false;
}
};

window.onload = init;



/*

processGuess: function(guess) {
var playerGuess = this.parseGuess(guess);
// sprawdź czy playerGuess jest prawidłowe, a więc czy nie jest undefined
this.allGuesses.push(playerGuess);
var doublesGuess = allGuesses.indexOf(playerGuess);
if (playerGuess) {
    if (model.shipSunk<model.numShips) {
        if (doublesGuess<0) {
            this.guesses++;
            return model.fire(playerGuess);
        }else {
        alert("Już strzeliłeś w to pole");}
    } else {
      alert("Zatopiłeś już wszystkie statki");}
} return playerGuess;}
}
*/

/*test drive parseGuess
*/
//console.log(controller.parseGuess("f4"));
//console.log(controller.parseGuess("a2"));
//console.log(controller.parseGuess("b6"));
//console.log(controller.parseGuess("a9"));
//console.log(controller.parseGuess("A7"));


/* test drive processGuess
console.log(controller.processGuess("A6"));
console.log(controller.processGuess("b6"));
console.log(controller.processGuess("c6"));
console.log(controller.processGuess(""));
console.log(controller.processGuess("h2"));
console.log(controller.processGuess("G3"));
console.log(controller.processGuess("A8"));
*/
/*
console.log(controller.processGuess("A6"));
console.log(controller.processGuess("b6"));
console.log(controller.processGuess("c6"));
console.log(model.shipSunk);
/*
console.log(controller.parseGuess("a0"));
console.log(controller.parseGuess("b6"));
console.log(controller.parseGuess("g3"));
console.log(controller.parseGuess("h0"));
console.log(controller.parseGuess("a7"));
*/
/*console.log(model.shipSunk);
console.log(controller.processGuess("E4"));
console.log(controller.processGuess("C4"));
console.log(controller.processGuess("D4"));
console.log(model.shipSunk);
console.log(controller.processGuess("b0"));
console.log(controller.processGuess("b1"));
console.log(controller.processGuess("b2"));
*/

console.log(model.ships);


