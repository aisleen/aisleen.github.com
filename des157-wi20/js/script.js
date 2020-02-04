
  var brushSize = 50;

  var angle = 0.05;
  var speed = 0.05;
  var radius = 55.0;
  var so = 2.0;
  var sp = 2.0;

  var xPosition = 0;
  var yPosition = 0;
  var xSpeed = 4;


  function setup() {
    var myCanvas = createCanvas();
    createCanvas(800, 250);
    myCanvas.parent(mySketch);
    noStroke();
    ellipseMode(CENTER);
    noFill();
    background(200);
  }

  function draw() {
    //animated dots
    for (var g=80; g<800; g+=160) {
      for  (var h=60; h<800; h+=160) {
        noStroke();
        fill(0, 10);
        rect(0, 0, width, height);
        angle +=speed;
        var sinval = sin(angle);
        var cosval = cos(angle);

        var x = (cosval * radius) + g;
        var y = (sinval * radius) + h;
        fill(255);
        ellipse(x, y, 10, 10);
      }
    }

    //circles
    for (var x=0; x<700; x+=160) {
      for (var y=0; y<700; y+=160) {
        stroke(252, 238, 163);
        stroke(1);
        fill(255, 20);
        ellipse(x+80, y+60, 85, 85);
        stroke(255);
        strokeWeight(0.25);
        noFill();
        ellipse(x+95, y+75, 40+xPosition, 40+xPosition);
        strokeWeight(0.5);
        ellipse(x+80, y+60, 60, 60);
      }

      xPosition=xPosition+xSpeed;
      if (xPosition>500 || xPosition<0) {
        xSpeed=-xSpeed;
      }


      //cube
      for (var c=0; c<700; c+=160) {
        for (var d=0; d<700; d+=160) {
          noStroke();
          fill('#ffcae5');
          quad(c+60, d+50, c+80, d+70, c+100, d+50, c+80, d+40);
          fill(0);
          quad(c+60, d+50, c+60, d+70, c+80, d+80, c+80, d+60);
          fill(132);
          quad(c+80, d+60, c+80, d+80, c+60, d+70, c+100, d+50);
          fill(0);
          quad(c+80, d+60, c+80, d+80, c+100, d+70, c+100, d+50);
          stroke(1);
        }

        //circles 2
        for (var g=160; g<700; g+=320) {
          for (var h=0; h<700; h+=160) {
            stroke(20);
            strokeWeight(3);
            fill('#ffcae5');
            ellipse(g+80, h+60, 85, 85);
            stroke(255);
            strokeWeight(1);
            noFill();
            ellipse(g+95, h+75, 40, 40);
            ellipse(g+80, h+60, 60, 60);
          }
        }

        //mouse interaction part 1
        if (mouseX > 250) {
          for (var g=160; g<700; g+=320) {
            for (var h=0; h<700; h+=160) {
              stroke(20);
              strokeWeight(3);
              fill(50);
              ellipse(g+80, h+60, 85, 85);
            }
          }
        }

        //cube 2
        for (var e=160; e<700; e+=320) {
          for (var f=0; f<700; f+=160) {
            noStroke();
            fill('#f9aad1');
            quad(e+60, f+50, e+80, f+70, e+100, f+50, e+80, f+40);
            fill(0);
            quad(e+60, f+50, e+60, f+70, e+80, f+80, e+80, f+60);
            fill(132);
            quad(e+80, f+60, e+80, f+80, e+60, f+70, e+100, f+50);
            fill(0);
            quad(e+80, f+60, e+80, f+80, e+100, f+70, e+100, f+50);
            stroke(1);
          }
        }
      }
    }

    //mous interaction part 2
    if (mouseY < 250) {
      for (var e=160; e<700; e+=320) {
        for (var f=0; f<700; f+=160) {
          noStroke();
          fill('#f9aad1');
          quad(e+60, f+50, e+80, f+60, e+100, f+50, e+80, f+40);
        }
      }
    }

    stroke(200);
    if (mouseIsPressed) {
      ellipse(mouseX, mouseY, brushSize/2, brushSize/2);
    } else {
      ellipse(mouseX, mouseY, brushSize*2, brushSize*2);
    }
  }
