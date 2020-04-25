// Variables

function Simulation() {
  this.isLockdown = false;
  this.infectionDuration = 5000;
  this.transmissionRatio = 0.5;
  this.lockdownFactor = 0.1;
  this.totalCount = 100;
  this.radius = 5;
  this.speed = 1;
  this.canvas = document.getElementById('simulation');
  this.c = this.canvas.getContext('2d');

  this.init = () => {
    resizeCanvasToDisplaySize(sim.canvas);
    document.getElementById("transmissionRatio").value = this.transmissionRatio*100;
  }
  this.updateUI = () => {
    document.getElementById("transmissionRatio").value = this.transmissionRatio*100;
  }
}

function areaChart() {
  this.canvas = document.getElementById('status-chart');
  this.c = this.canvas.getContext('2d');
  this.width = 300;

  this.init = () => {
    this.time = 0;
  }
  this.update = () => {

    if (this.time < this.canvas.width) {
    //Plot healthy
    this.c.beginPath();
    this.c.rect(this.time, 0, 1, healthyCount/sim.totalCount*this.canvas.height);
    this.c.fillStyle = colorList.healthy;
    this.c.fill();

    //Plot Removed
    this.c.beginPath();
    this.c.rect(this.time, this.canvas.height-(removedCount / sim.totalCount)*this.canvas.height-(infectedCount / sim.totalCount)*this.canvas.height, 1, this.canvas.height*removedCount/sim.totalCount);
    this.c.fillStyle = colorList.removed;
    this.c.globalAlpha = 1;
    this.c.fill();

    //Plot Infected
    this.c.beginPath();
    this.c.rect(this.time, this.canvas.height-(infectedCount / sim.totalCount)*this.canvas.height, 1, 120);
    this.c.fillStyle = colorList.infected;
    this.c.fill();
    this.c.globalAlpha = 1;
    this.time += 0.2;
    }
  }
}

function resizeCanvasToDisplaySize(canvas) {
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // If it's resolution does not match change it
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}

function Circle(x,y,dx,dy,radius,isInfected) {
  this.x = x;
  this.y = y;
  this.velocity = {
    x: dx,
    y: dy
  }
  this.radius = sim.radius;
  this.minRadius = sim.radius;
  this.isInfected = isInfected;
  this.isHealthy = !isInfected;
  this.color = this.isInfected ? colorList.infected : colorList.healthy;
  this.infectionStart = this.isInfected ? Date.now() : undefined;
  this.isRemoved = false;
  this.mass = 1;
  this.opacity = 1;


  this.draw = () => {
    sim.c.beginPath();
    sim.c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    sim.c.globalAlpha = this.opacity;
    sim.c.fillStyle = this.color;
    sim.c.fill();
  }
  this.update = (circleList) => {
    // Basic movement
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    // Wall Collision
    checkWallCollision(this);

    // Develop immunity or die
    if (this.isInfected && (Date.now() - this.infectionStart) > sim.infectionDuration ) {
      this.color = colorList.removed;
      this.opacity = 0.5;
      this.isInfected = false;
      this.isRemoved = true;
      infectedCount -= 1;
      removedCount += 1;
    }

    //Ball Collision check
    circleList.forEach(element => {
      if (this != element) {
        if (hasCollision(this, element)) {
          if ( (this.isInfected && !element.isInfected) ||
          (element.isInfected && !this.isInfected) ) {
            if (!this.isRemoved && !element.isRemoved) {

              if (Math.random() < sim.transmissionRatio) {
                this.color = colorList.infected;
                this.isInfected = true;
                this.isHealthy = false;
                this.infectionStart = Date.now();

                element.color = colorList.infected;
                element.isInfected = true;
                element.isHealthy = false;
                element.infectionStart = Date.now();

                healthyCount -= 1;
                infectedCount += 1;
              }
            }
          }
          resolveCollision(this, element);
        }
      }
    });

    this.draw();
  }

}

function checkWallCollision(circle) {
  if ((circle.x + circle.radius) > sim.canvas.width || (circle.x - circle.radius) < 0) {
    circle.velocity.x = -circle.velocity.x;
  }
  if ((circle.y + circle.radius) > sim.canvas.height || (circle.y - circle.radius) < 0 ) {
    circle.velocity.y = -circle.velocity.y;
  }
}

function mathRandomInRange(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

function mathRandomInRangeFloat(min, max) {
  return Math.random() * (max-min) + min;
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

function hasCollision(a, b) {

  if (Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2)) <= a.radius + b.radius) {
    return true;
  }
  return false;
}

function resolveCollision(particle, otherParticle) {
  console.log("resolving");
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

    // Grab angle between the two colliding particles
    const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
    const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}

function restart() {
  init();
  chart1.c.clearRect(0,0,sim.canvas.width,sim.canvas.height);
  chart1.time = 0;
}

function toggleLockdown() {
  var checkBox = document.getElementById("lockdownCheckbox");
  isLockdown = checkBox.checked ? true : false;
  circleList.forEach( element => {

    if (isLockdown) {
      element.velocity.x = element.velocity.x*lockdownFactor;
      element.velocity.y = element.velocity.y*lockdownFactor;
    } else {
      element.velocity.x = mathRandomInRangeFloat(-sim.speed,sim.speed);
      element.velocity.y = mathRandomInRangeFloat(-sim.speed,sim.speed);
    }
  })

}


function init() {
  circleList = [];
  infectedCount = 0;
  healthyCount = sim.totalCount;
  removedCount = 0;
  for (let i = 0; i < sim.totalCount; i++) {
    var x = mathRandomInRange(0+sim.radius, sim.canvas.width-sim.radius);
    var y = mathRandomInRange(0+sim.radius, sim.canvas.height-sim.radius);
    var dx = mathRandomInRangeFloat(-sim.speed,sim.speed);
    var dy = mathRandomInRangeFloat(-sim.speed, sim.speed);
    var isInfected = false;
    var tempCircle = new Circle(x,y,dx,dy,sim.radius,isInfected);

    if (i !== 0) {
      for (let j = 0 ; j < circleList.length; j++) {
        if (hasCollision(circleList[j], tempCircle)) {
          tempCircle.x = mathRandomInRange(0+sim.radius, sim.canvas.width-sim.radius);
          tempCircle.y = mathRandomInRange(0+sim.radius, sim.canvas.height-sim.radius);
          j = -1;
        }
      }
    }

    circleList.push(tempCircle);
  }
  radius = mathRandomInRange(5, 5);
  x = mathRandomInRange(0+radius, sim.canvas.width-radius);
  y = mathRandomInRange(0+radius, sim.canvas.height-radius);
  dx = mathRandomInRangeFloat(-2, 2);
  dy = mathRandomInRangeFloat(-2, 2);
  isInfected = true;
  circleList.push(new Circle(x,y,dx,dy,radius,isInfected));
  infectedCount +=1;
  sim.totalCount += 1;

  circleList.forEach(circle => {
    circle.update(circleList);
  })


}

function animate() {
  requestAnimationFrame(animate);
  sim.c.clearRect(0,0, sim.canvas.width, sim.canvas.height);
  circleList.forEach(val => {
    val.update(circleList);
  });
  document.getElementById("healthy").innerHTML = `Healthy: ${healthyCount}`;
  document.getElementById("infected").innerHTML = `Infected: ${infectedCount}`;
  document.getElementById("removed").innerHTML = `Removed: ${removedCount}`;


  chart1.update();


}

let sim = new Simulation();
let chart1 = new areaChart();
sim.init();
chart1.init();

const colorList = {
  healthy: "#2143A7",
  infected: "red",
  removed: "gray",
  accent1:"#2143A7",
  accent2:"#0061A7",
  accent3:"#219CA7",
  accent4:"#6EA500",
  accent5:"#A7A721",
};
let circleList = [];
let healthyCount = undefined;
let infectedCount = undefined;
let removedCount = undefined;

//User Inputs
let isLockdown = false;
let lockdownFactor = 0.1;

init();
animate();
