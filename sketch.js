var x=110; //Dimensions (horizontal)
var y=110; //Dimensions (vertical)
var op=1; //auxiliary variable for options on the screen
var tela=0; //current screen
var num,num2,num3,aux; //random numerators and auxiliary

let valueImg,valueImg2,valueImg3,w,h, imgperfil,imgperfil2,img0,img1,img2,img3,img4,img5,img6,img7,img8,res0,res1,res2,res3,res4,res5,res6,res7,res8,res9;
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
  valueImg=loadImage('FRACAO8.png');//printed image #1
  valueImg2=loadImage('FRACAO8.png');//printed image #2
  valueImg3=loadImage('FRACAO8.png');//printed image #3
  res0=loadImage('RES0.png');
  res1=loadImage('RES1.png');
  res2=loadImage('RES2.png');
  res3=loadImage('RES3.png');
  res4=loadImage('RES4.png');
  res5=loadImage('RES5.png');
  res6=loadImage('RES6.png');
  res7=loadImage('RES7.png');
  res8=loadImage('RES8.png');
  res9=loadImage('RES9.png');//ending graphs
}

function setup() {
  createCanvas(400, 400); //screen size
  num=int(random(0,8)); //randomazing the numerator #1
  num2=int(random(0,4)); //randomazing the numerator #2
  num3=int(random(4,8)); //randomazing the numerator #3
  
  w=valueImg.width; //dimensions of pictures
  h=valueImg.height;
  w=valueImg2.width; //dimensions of pictures
  h=valueImg2.height;
  w=valueImg3.width; //dimensions of pictures
  h=valueImg3.height;
  
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

switch(num2) {
    case 0:
      valueImg2.copy(img0,0,0,w,h,0,0,w,h);
      break;
    case 1:
      valueImg2.copy(img2,0,0,w,h,0,0,w,h);
      break;
    case 2:
      valueImg2.copy(img4,0,0,w,h,0,0,w,h);
      break;
    case 3:
      valueImg2.copy(img6,0,0,w,h,0,0,w,h);
      break;
    case 4:
      valueImg2.copy(img8,0,0,w,h,0,0,w,h);
      break;
    default:
  } //associating graphs with their respective randomized numerators

switch(num3) {
    case 0:
      valueImg3.copy(img0,0,0,w,h,0,0,w,h);
      break;
    case 1:
      valueImg3.copy(img1,0,0,w,h,0,0,w,h);
      break;
    case 2:
      valueImg3.copy(img2,0,0,w,h,0,0,w,h);
      break;
    case 3:
      valueImg3.copy(img3,0,0,w,h,0,0,w,h);
      break;
    case 4:
      valueImg3.copy(img4,0,0,w,h,0,0,w,h);
      break;
    case 5:
      valueImg3.copy(img5,0,0,w,h,0,0,w,h);
      break;
    case 6:
      valueImg3.copy(img6,0,0,w,h,0,0,w,h);
      break;
    case 7:
      valueImg3.copy(img7,0,0,w,h,0,0,w,h);
      break;
    case 8:
      valueImg3.copy(img8,0,0,w,h,0,0,w,h);
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
    case 4: //print 2nd fase screen
      fase2();
      break;
    case 5: //print 3rd fase screen
      fase3();
      break;
    case 6: //print ending screen
      fim();
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
  text('Fase 1',100,40);
  text(num+'      ?',100,90); //randomized numerator
  line(95,100,120,100);
  line(160,100,185,100);
  text('    +      =  1',100,110);
  text('8      8',100,130);
  textSize(20);
  text('Digite um número no teclado',60,155);
  image(valueImg,80,160); //print predefined image
}

function fase2(){ //2nd fase screen
  textSize(30);
  text('Fase 2',100,40);
  text(num2+'      ?',100,90); //randomized numerator
  line(95,100,120,100);
  line(160,100,185,100);
  text('    +      =  1',100,110);
  text('4      8',100,130);
  textSize(20);
  text('Digite um número no teclado',60,155);
  image(valueImg2,80,160);  //print predefined image
}

function fase3(){ //3rd fase screen
  textSize(30);
  text('Fase 3',100,40);
  text(num3+'      ?     1',100,90); //randomized numerator
  line(95,100,120,100);
  line(160,100,185,100);
  line(225,100,250,100);
  text('    -      = ',100,110);
  text('8      8     2',100,130);
  textSize(20);
  text('Digite um número no teclado',60,155);
  image(valueImg3,80,160);  //print predefined image
}

function fim(){ //ending screen
  textSize(40);
  text('Jogo completo!',50,200);
  textSize(15);
  text('Aperte ESC para retornar ao menu',70,370);
}

function inst(){ //instructions screen
  textSize(30);
  text('Intruções:',150,60);
  textSize(20);
  text('Ano: 6o ano fundamental',50,100);
  text('Matéria: (EF06MA10)',50,130);
  text('Esse jogo pretende auxiliar o aluno \n na aprendizagem do conteúdo de \n equações fracionárias a partir de \n operações e gráficos com frações \n de denominador 8, 4 e 2. Para isso, \n o aluno deve inserir através \n do teclado um número para \n completar corretamente a equação.',50,160);
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
  
  if(tela==1){
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
        op=4;
        break;
      default:
    }//associating graphs with their respective answers
    return false;
  }
  if(tela==4){
    aux = int(key)+(num2*2); //adding the inserted value to the randomized numerator
    switch(aux) {
      case 1:
        valueImg2.copy(res1,0,0,w,h,0,0,w,h);
        break;
      case 2:
        valueImg2.copy(res2,0,0,w,h,0,0,w,h);
        break;
      case 3:
        valueImg2.copy(res3,0,0,w,h,0,0,w,h);
        break;
      case 4:
        valueImg2.copy(res4,0,0,w,h,0,0,w,h);
        break;
      case 5:
        valueImg2.copy(res5,0,0,w,h,0,0,w,h);
        break;
      case 6:
        valueImg2.copy(res6,0,0,w,h,0,0,w,h);
        break;
      case 7:
        valueImg2.copy(res7,0,0,w,h,0,0,w,h);
        break;
      case 8:
        valueImg2.copy(res8,0,0,w,h,0,0,w,h);
        op=5;
        break;
      default:
    }//associating graphs with their respective answers
    return false;
  }
    if(tela==5){
    aux = num3-int(key); //subtracting the inserted value from the randomized numerator
    switch(aux) {
      case 4:
        valueImg3.copy(res9,0,0,w,h,0,0,w,h);
        op=6;
        break;
      case 5:
        valueImg3.copy(res5,0,0,w,h,0,0,w,h);
        break;
      case 6:
        valueImg3.copy(res6,0,0,w,h,0,0,w,h);
        break;
      case 7:
        valueImg3.copy(res7,0,0,w,h,0,0,w,h);
        break;
      case 8:
        valueImg3.copy(res9,0,0,w,h,0,0,w,h);
        break;
      default:
    }//associating graphs with their respective answers
    return false;
  }
}