var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');


var colorArray = [
  "#1B2F33",
  "#28502E",
  "#47682C",
  "#8C7051",
  "#EF3054",
];

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})


function Circle(x, y, dx, dy, radius) {

  var maxRadius = 40;
  var minRadius = 5;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random()*5)]

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x+radius > innerWidth || this.x-radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y+radius > innerHeight || this.y-radius < 0) {
      this.dy = -this.dy;
    }
    if ((mouse.x-this.x) < 30 && (mouse.x-this.x) > -30 &&
        (mouse.y-this.y) < 30 && (mouse.y-this.y) > -30
      ) {
      if (this.radius < maxRadius) {
      this.radius +=1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -=1;
    }
    this.draw();
  }
}


var circleArray = [];

for (var i = 0; i < 800; i++) {
  x = Math.random()*innerWidth+30;
  y = Math.random()*innerHeight+30;
  dx = (Math.random()-0.5)*2;
  dy = (Math.random()-0.5)*2;
  radius = Math.random()*10+2;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
