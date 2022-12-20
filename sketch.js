
var tela=1
var img1
var img2
var img3
var img4
var img5
var img6
var img7
var img8
var img9
var hit=false
var hit2=false
var hit3=false
var hit4=false
var x=5
var y=350
var xi=150
var yi=(-50)
var xVetor=[]
xVetor[0]=150
xVetor[1]=190
xVetor[2]=230
xVetor[3]=270
xVetor[4]=310
xVetor[5]=350
xVetor[6]=390
var t1=xVetor[0]
var t2=xVetor[1]
var t3=xVetor[5]
var t4=xVetor[6]
let r=0

function preload() {
  img1 = loadImage("Screenshot_20221104-141600.png")
  img2 = loadImage("bolsas.jpg")
  img3 = loadImage("Foto_Ida.jpg")
  img4 = loadImage("turbo.png")
  img5 = loadImage("richas.gif")
  img6 = loadImage("cida.gif")
  img7 = loadImage("pngegg.png")
  img8 = loadImage("vascoo.png")
  img9 = loadImage("tutos.png")
}

function setup() {
  createCanvas(500, 400)
  frameRate(30)
}

function menu()   {
  background(img2);
  
  noFill()
  noStroke()
  rect(150, 200, 200, 40, 10);  
  rect(150, 250, 200, 40, 10)
  rect(15033, 200, 40, 10)
  
  if(mouseX>150 && mouseX<350 && mouseY>200 && mouseY<240){
  fill(255, 0, 0)
  noStroke()
  rect(150, 200, 200, 40, 10);
    if(mouseIsPressed){
      tela=2
    }
  }
  
  if(mouseX>150 && mouseX<350 && mouseY>250 && mouseY<290){
    fill(255, 0, 0)
    noStroke()
    rect(150, 250, 200, 40, 10);
    if(mouseIsPressed){
      tela=3
    }
  }
  
  if(mouseX>150 && mouseX<350 && mouseY>303 && mouseY<343){
  fill(255, 0, 0)
  noStroke()
  rect(150, 303, 200, 40, 10);
    if(mouseIsPressed){
      tela=4
    }
    
  }
  
  fill(10)
  noStroke()
  textSize(35)
  text("O Jogo", 250, 125)
  
  fill(140)
  stroke(255,0,0)
  textSize(25)
  text("Iniciar", 212, 230)
  textSize(25)
  
  text("Tutorial", 208, 280)
  textSize(25)
  text("Creditos", 205, 330)
}
function jogo1()  {
  image(img6, 0, 0, 500,400)
  noStroke()
  fill(140,50,0)
  square(0, 365, 500, 0)
  image(img4,x,y,50,50)
  image(img7, xi,yi,50,50)
  image(img7, xi+120,yi,50,50)
  image(img7, xi+240,yi,50,50)
  hit = collideCircleCircle(x, y, 40, xi, yi, 20)
  hit2 = collideCircleCircle(x, y, 40, xi+120, yi, 40)
  hit3 = collideCircleCircle(x, y, 40, xi+240, yi, 40)
  if(hit || hit2 || hit3){
    tela = 6
  }
  
  if(yi<410){
    yi=yi+15
  }else {
    yi=(-80)
  }
  

  if(keyIsDown(RIGHT_ARROW)){
    x=x+8
  }else if(x>400){
    tela=7
    x = -5
    yi = -80
  }
  if(keyIsDown(LEFT_ARROW)&&x>0){
    x=x-8
  }
  
  if(keyIsDown(27)){
    tela = 1
  }
}
function tuto()   {
    image(img9, 0,0,2530, 3300)
    if(keyIsDown(27)){
      tela = 1
    }
}
function credi()  {
    background(255,105,180);
    image(img1, 20, 250,90,110);
    image(img3, 20, 120, 90,110);
    fill(10)
    noStroke()
    textSize(50)
    text("Creditos", 150, 20, 400, 250, 400)
    textSize(20)
    text("Docente:Idalmis Milian Sardina Martins", 120, 130, 350, 200, 400)
    text("Dicente e Programador:Nilberto Araujo Marinho", 120, 270, 350, 200, 400)
    text("pressione esc para voltar ao menu", 90, 365, 460, 300, 50)
    if(keyIsDown(27)){
      tela = 1
    } 
}
function vitoria(){
  image(img5, 0,0,500,400)
  textSize(35)
  fill(0,255,0)
  text("NÃO FOI REBAIXADO\n PARABENSKKKKKKKKKKK",50, 200)
  textSize(20)
  text("prima esc ai, volta pro menu", 100,350)
  if(keyIsDown(27)){
    tela = 1
    x=5
  }
}

function jogo2(){
  image(img6, 0, 0, 500,400)
  noStroke()
  fill(140,50,0)
  square(0, 365, 500, 0)
  image(img4,x,y,50,50)
  image(img7, t1,yi,40,40)
  image(img7, t2,yi,40,40)
  image(img7, t3,yi,40,40)
  image(img7, t4,yi,40,40)
  hit = collideCircleCircle(x, y, 40, t1, yi, 40)
  hit2 = collideCircleCircle(x, y, 40, t2, yi, 40)
  hit3 = collideCircleCircle(x, y, 40, t3, yi, 40)
  hit4 = collideCircleCircle(x, y, 40, t4, yi, 40)
  if(hit || hit2 || hit3 || hit4){
    tela = 6
  }
  
  if(yi<410){
    yi=yi+25
  }else {
    yi=(-80)
    r=parseInt(Math.random()*7)
    t1=xVetor[r]
    t2=xVetor[r]
    t3=xVetor[r]
    t4=xVetor[r]
  }
  

  if(keyIsDown(RIGHT_ARROW)){
    x=x+8
  }else if(x>400){
    tela=5
  }
  if(keyIsDown(LEFT_ARROW)&&x>0){
    x=x-8
  }
  
  if(keyIsDown(27)){
    tela = 1
  }
  
}
function draw() {
  if(tela == 1)     {
    menu();
  }
  else if(tela == 2){
    jogo1();
  }
  else if(tela == 3){
    tuto();
  }
  else if(tela == 4){
    credi();
  }
  else if(tela == 5){
    vitoria()
  }
  else if(tela == 6){
    image(img8, 0, 0, 500, 400)
    if(keyIsDown(27)){
      tela = 1
      x=5
    }
  }else if(tela == 7){
   jogo2() 
  }
}