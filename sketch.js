var igor ={
  apelido: "Go",
  idade: 16,
  musica_favorita: "I´m So Hood",
  animais:["Harry", "Bovisk", "flocos"],
}

function setup() {
  createCanvas(400, 400);
  console.log(igor.apelido);
  console.log(igor.idade); 
  igor.idade = 17;
  console.log(igor.idade); 
}

function draw() {
  background(220);
}