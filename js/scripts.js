var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var colorList = [
  "#2143A7",
  "#0061A7",
  "#219CA7",
  "#6EA500",
  "#A7A721",
];

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

function Circle(x,y,dx,dy,radius,color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = color;
    c.fill();
  }
  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.radius > innerWidth || this.x-this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y-this.radius < 0) {
      this.dy = -this.dy;
    }

    if (Math.abs(this.x - mouse.x) < 50 && Math.abs(this.y - mouse.y) < 50) {
      if (this.radius < 50) {
        this.radius +=1;
      }
    } else {
      if (this.radius > this.minRadius) {
        this.radius -=1;
      }
    }


    this.draw();
  }
}

circleList = [];

for (i = 0; i < 500 ; i++) {
  var x = Math.random()*innerWidth;
  var y = Math.random()*innerHeight;
  var dx = (Math.random()-0.5)*3;
  var dy = (Math.random()-0.5)*3;
  var radius = Math.random()*10+3;
  var color = colorList[Math.floor(Math.random()*colorList.length+1)];
  circleList.push(new Circle(x,y,dx,dy,radius,color));
}

console.log(circleList);


function animate() {
  requestAnimationFrame(animate);
  console.log("refreshing");
  c.clearRect(0,0, innerWidth, innerHeight);
  for (i = 0; i < circleList.length; i++) {
    circleList[i].update();
  }
}

animate();
