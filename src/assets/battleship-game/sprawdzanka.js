var locations=[];
for (var i=0; i<this.shipLength;i++) {
  if (direction===1){
    locations.push(row + "" + (col+i)); // dla i=0 : '00', dla i=1 : '01', dla i=2 : '02'
  } else {
    locations.push((row+i) + "" + col);
  }

}

console.log(locations);