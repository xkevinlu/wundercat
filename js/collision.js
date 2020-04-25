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

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.color;
    c.fill();
  }
  this.update = (circleList) => {
    // Basic movement
    this.x += this.dx;
    this.y += this.dy;

    // Wall Collision
    if ((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0) {
      this.dx = -this.dx;
    }
    if ((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0 ) {
      this.dy = -this.dy;
    }
    circleList.forEach(element => {
      if (this != element) {
          if (hasCollision(this, element)) {
            console.log("collision");
            this.color = "red";
          }
      }
    });

    this.draw();
    }

}


function mathRandomInRange(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function restart() {
  location.reload();
}

function hasCollision(a, b) {

  if (Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2)) < a.radius + b.radius) {
    return true;
  }
  return false;
}


circleList = [];

function init() {
  circleList = [];
    for (let i = 0; i < 50; i++) {
      var radius = mathRandomInRange(15, 15);
      var x = mathRandomInRange(0+radius, canvas.width-radius);
      var y = mathRandomInRange(0+radius, canvas.height-radius);
      var dx = mathRandomInRange(-3, 3);
      var dy = mathRandomInRange(-3, 3);
      var color = 'blue';
      var tempCircle = new Circle(x,y,dx,dy,radius,color);

      if (i !== 0) {
          for (let j = 0 ; j < circleList.length; j++) {
            if (hasCollision(circleList[j], tempCircle)) {
              tempCircle.x = mathRandomInRange(0+radius, canvas.width-radius);
              tempCircle.y = mathRandomInRange(0+radius, canvas.height-radius);
              j = -1;
            }
          }
      }

      circleList.push(tempCircle);
    }

    circleList.forEach(circle => {
      circle.update(circleList);
    })
}

function animate() {
  requestAnimationFrame(animate);
  // console.log("refreshing");
  c.clearRect(0,0, innerWidth, innerHeight);

  circleList.forEach(val => {
    val.update(circleList);
  });

}

init();
animate();
