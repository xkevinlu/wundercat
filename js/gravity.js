// Variables

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-60;
var c = canvas.getContext('2d');

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

var friction = 0.95;

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight-60;
})

function Circle(x,y,dx,dy,radius,color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = color;
  this.gravity = false;

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
    if (this.y + this.radius + this.dy > canvas.height || this.y + this.radius + this.dy < 0) {
      this.dy = -this.dy * friction;
    } else if (this.gravity == true) {
      this.dy += 0.8;
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

function mathRandomInRange(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function restart() {
  location.reload();
}

function toggleGravity() {
  for (i = 0; i < circleList.length ; i++) {
    circleList[i].gravity = !circleList[i].gravity;
    if (circleList[i].gravity == false) {
      circleList[i].dx = (Math.random()-0.5)*3;
      circleList[i].dy = (Math.random()-0.5)*3;
    }
  }
}

function setBalls() {
  var input = document.getElementById("bcount").value;
  console.log(input);
  initBalls(input);

}
circleList = [];

function initBalls(count) {
  circleList = [];
  for (i = 0; i < +count + 1 ; i++) {
    var x = Math.random()*(innerWidth-radius);
    var y = Math.random()*(canvas.height-radius);
    var dx = (Math.random()-0.5)*3;
    var dy = (Math.random()-0.5)*3;
    var radius = mathRandomInRange(5, 15);
    var color = colorList[Math.floor(Math.random()*colorList.length+1)];
    circleList.push(new Circle(x,y,dx,dy,radius,color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  console.log("refreshing");
  c.clearRect(0,0, innerWidth, innerHeight);
  for (i = 0; i < circleList.length; i++) {
    circleList[i].update();
  }
}

initBalls(400);
console.log(circleList);
animate();
