// Week1 Homework Tasks Eloquent Javascript

// Looping a triangle

let triangle = "#";

for (i=0; i<=6; i++){
  console.log(triangle);
  triangle += "#";
}

// FizzBuzz

for (number=1; number<=100; number++){
  let output = "";
  if(number % 3 == 0){
    output += "Fizz";
  } else if (number % 5 == 0){
    output += "Buzz";
  }
  console.log(output || number);
}

// Chessboard - Wasn't sure of the rest

let size = 8;

for(let y=0; y<size; y++){
  for(let x=0; x<size; x++){
    if()
  }
}

// Minimum

let min = function(a, b){
  if (a < b){
    return a;
  } else {
    return b;
  }
}

// Recursion - Wasn't sure of the rest

function isEven(number){
  if (number == 0){
    return true;
  } else if (number == 1){
    return false;
  } else if (number)
}

// Bean Counting - Wasn't sure of the rest

function countBs(string){
  for()
}
