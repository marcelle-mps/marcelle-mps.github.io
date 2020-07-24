//link para vídeo explicativo:https://youtu.be/0SshE0b5M4w

var x=110; //Dimensions (horizontal)
var y=110; //Dimensions (vertical)
var op=1; //auxiliary variable for options on the screen
var tela=0; //current screen
var num,aux; //random numerator and auxiliary

let valueImg,w,h, imgperfil,imgperfil2,img0,img1,img2,img3,img4,img5,img6,img7,img8,res0,res1,res2,res3,res4,res5,res6,res7,res8;
//auxiliary variables

function preload() {
  imgperfil2=loadImage('perfil2.png');
  imgperfil=loadImage('perfil.png'); //contributors' pictures    
  img0=loadImage('FRACAO0.png');
  img1=loadImage('FRACAO1.png');
  img2=loadImage('FRACAO2.png');
  img3=loadImage('FRACAO3.png');
  img4=loadImage('FRACAO4.png');
  img5=loadImage('FRACAO5.png');
  img6=loadImage('FRACAO6.png');
  img7=loadImage('FRACAO7.png');
  img8=loadImage('FRACAO8.png'); //starter graphs
  valueImg=loadImage('FRACAO8.png');//printed image
  res0=loadImage('RES0.png');
  res1=loadImage('RES1.png');
  res2=loadImage('RES2.png');
  res3=loadImage('RES3.png');
  res4=loadImage('RES4.png');
  res5=loadImage('RES5.png');
  res6=loadImage('RES6.png');
  res7=loadImage('RES7.png');
  res8=loadImage('RES8.png'); //ending graphs
}

function setup() {
  createCanvas(400, 400); //screen size
  num=int(random(0,8)); //randomazing the numerator
  
  w=valueImg.width; //dimensions of pictures
  h=valueImg.height;
  
  switch(num) {
    case 0:
      valueImg.copy(img0,0,0,w,h,0,0,w,h);
      break;
    case 1:
      valueImg.copy(img1,0,0,w,h,0,0,w,h);
      break;
    case 2:
      valueImg.copy(img2,0,0,w,h,0,0,w,h);
      break;
    case 3:
      valueImg.copy(img3,0,0,w,h,0,0,w,h);
      break;
    case 4:
      valueImg.copy(img4,0,0,w,h,0,0,w,h);
      break;
    case 5:
      valueImg.copy(img5,0,0,w,h,0,0,w,h);
      break;
    case 6:
      valueImg.copy(img6,0,0,w,h,0,0,w,h);
      break;
    case 7:
      valueImg.copy(img7,0,0,w,h,0,0,w,h);
      break;
    case 8:
      valueImg.copy(img8,0,0,w,h,0,0,w,h);
      break;
    default:
  } //associating graphs with their respective randomized numerators
}

function draw() {
  background('#fae');
  switch(tela) {
    case 0: //print menu screen
      menu();
      break;
    case 1: //print 1st fase screen
      fase1();
      break;
    case 2: //print instructions screen
      inst();
      break;
    case 3: //print credits screen
      cred();
      break;
    default:
  }
}

function menu(){
  triangle(x,y,x,y+20,x+20,y+10); //print arrow
  
  textSize(30);
  text('JOGO DAS FRAÇÕES',60,50);
  text('Jogar',150,130);  //op=1
  text('Instruções',150,230);  //op=2
  text('Créditos',150,330);  //op=3
  
  textSize(15)
  text('Mova o cursor com as setas e aperte "ENTER" \n\t\t\t\t\t\t para entrar e "ESC" para sair',40,370);
}


function fase1(){ //1st fase screen
  textSize(30);
  text('Fase 1 - Soma',100,40);
  text(num+'      ?',100,90); //randomized numerator
  line(95,100,120,100);
  line(160,100,185,100);
  text('    +      =  1',100,110);
  text('8      8',100,130);
  textSize(20);
  text('Digite um número no teclado',60,155);
  image(valueImg,80,160);  //print predefined image
}

function inst(){ //instructions screen
  textSize(30);
  text('Intruções:',150,60);
  textSize(20);
  text('Ano: 8o ano fundamental',50,100);
  text('Matéria: (EF06MA10)',50,130);
  text('Esse jogo pretende auxiliar o aluno \n na aprendizagem do conteúdo de \n equações fracionárias a partir de \n operações e gráficos com frações \n de denominador 8. Para isso, \n o aluno deve inserir através \n do teclado um número para \n completar corretamente a equação.',50,160);
}

function cred(){ //credits screen
  textSize(30);
  text('Créditos:',150,60);
  textSize(20);
  text('Marcelle Mendes Pacheco Soares:',50,100);
  text('Programadora',50,125);
  text('Adailton Aquino dos Santos:',50,155);
  text('Educador da Escola Municipal \n Iberê Ferreira de Souza',50,180);
  image(imgperfil,50,220);
  image(imgperfil2,200,230); //print contributors' pictures
}

function keyPressed() {
  if (keyCode==UP_ARROW&&y>110){ //move the arrow up
    y=y-100;
    op--;
  }
  if (keyCode==DOWN_ARROW&&y<300){ //move the arrow down
    y=y+100;
    op++;
  }
  if(keyCode==ENTER){ //select option
    tela=op;
  }
  if(keyCode==ESCAPE){ //return to the main menu
    tela=0;
  }
  
  aux = int(key)+num; //adding the inserted value to the randomized numerator
  switch(aux) {
    case 1:
      valueImg.copy(res1,0,0,w,h,0,0,w,h);
      break;
    case 2:
      valueImg.copy(res2,0,0,w,h,0,0,w,h);
      break;
    case 3:
      valueImg.copy(res3,0,0,w,h,0,0,w,h);
      break;
    case 4:
      valueImg.copy(res4,0,0,w,h,0,0,w,h);
      break;
    case 5:
      valueImg.copy(res5,0,0,w,h,0,0,w,h);
      break;
    case 6:
      valueImg.copy(res6,0,0,w,h,0,0,w,h);
      break;
    case 7:
      valueImg.copy(res7,0,0,w,h,0,0,w,h);
      break;
    case 8:
      valueImg.copy(res8,0,0,w,h,0,0,w,h);
      break;
    default:
     // valueImg.copy(res0,0,0,w,h,0,0,w,h);//alto
  }//associating graphs with their respective answers
  return false;
}