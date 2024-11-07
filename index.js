var x_inicio=0;
var y_inicio=0;

var cor ='red';


function limpar(){

    canvas = document.getElementById("canvas");
    ctx1 = canvas.getContext('2d');
    ctx1.fillStyle="white";
    ctx1.fillRect(0,0,1000,1000);
    cor='azul';

    return 'feito';

}


function ponto_inicio(x,y){

  x_inicio=x*5;
  y_inicio=y*5;
  return 'feito'

}





function retangulo(a,b) {

  let tam=50;
  a=a*tam;
  b=b*tam;

    let canvas = document.getElementById("canvas");

    let ctx = canvas.getContext('2d');


      if(cor=='preto'){
        cor='black';
        ctx.fillStyle=cor.toString();
      }

      if(cor=='verde'){
        cor='green';
        ctx.fillStyle=cor.toString();
      }

      if(cor=='azul'){
        cor='blue';
        ctx.fillStyle=cor.toString();
      }

      if(cor=='amarelo'){
       cor='yellow';

        ctx.fillStyle=cor.toString();
      }

      if(cor=='vermelho'){
        cor='red';

         ctx.fillStyle=cor.toString();
       }



     ctx.fillStyle=cor.toString();

    ctx.fillRect(x_inicio, y_inicio, a+2, b+2);
    ctx.stroke();

    return 'feito';
}


function triangulo(a, b, c) {
    // Verifica se as medidas podem formar um triângulo

   let arr=[a,b,c];





    arr.sort();


     a=arr[0];
     b=arr[1];
    c=arr[2];

    if (a > 9 || b > 9 || c > 9) {
        alert('AS MEDIDAS tem que ser menor que 10');
        throw new Error("As medidas fornecidas não podem formar um triângulo.");

    }


    a=a*50;
    b=b*50;
    c=c*50;


    if ((a + b <= c) || (a + c <=b) ||  (b + c <= a) ) {
        alert('AS MEDIDAS NÃO FORMAM UM TRIÂNGULO');
        throw new Error("As medidas fornecidas não podem formar um triângulo.");

    }


    // Coordenadas dos vértices A e B
    const A = { x: 0, y: 0 };
    const B = { x: a, y: 0 };

    // Calcula a coordenada do vértice C
    const cosC = (a * a + b * b - c * c) / (2 * a * b);
    const sinC = Math.sqrt(1 - cosC * cosC);
    const C = { x: b * cosC, y: b * sinC };

    // Desenha o triângulo no canvas
    const canvas = document.getElementById('canvas');

    const ctx = canvas.getContext('2d');

   //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas


    const centerX = (canvas.width / 2)-100;
    const centerY = (canvas.height / 2)-150;

    // Desloca as coordenadas dos vértices para o centro do canvas
    const Ax = A.x + centerX;
    const Ay = A.y + centerY;
    const Bx = B.x + centerX;
    const By = B.y + centerY;
    const Cx = C.x + centerX;
    const Cy = C.y + centerY;

    ctx.beginPath();


    ctx.beginPath();
    ctx.moveTo(Ax, Ay);
    ctx.lineTo(Bx, By);
    ctx.lineTo(Cx, Cy);
    ctx.closePath();

    ctx.stroke();

    return 'feito';
}





function circulo(r) {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(200, 200, r*10, 0, 2 * Math.PI);
    ctx.stroke();

}


window.onload = function() {

    circulo(10);
    retangulo(2,2);

    ponto_inicio(5,5);

    cor='azul';
    retangulo(3,2);

   triangulo(4,5,4)
}