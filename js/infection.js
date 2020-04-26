// Variables

function Simulation(canvas, id) {
  this.id = id;
  this.isLockdown = false;
  this.infectionDuration = 6000;
  this.transmissionRatio = 0.30;
  this.lockdownFactor = 0.1;
  this.totalCount = 250;
  this.radius = 5;
  this.speed = 1;
  this.canvas = canvas;
  this.c = this.canvas.getContext('2d');
  this.start = undefined;
  this.duration = 40000;
  this.circleList = [];
  this.animation;
  this.inView = false;

  this.healthyCount;
  this.infectedCount;
  this.removedCount;

  this.init = () => {
    resizeCanvasToDisplaySize(this.canvas);
    document.getElementById("transmissionRatio").value = this.transmissionRatio*100;
    document.getElementById("infectionDurationEntry").value = this.infectionDuration/1000;

    this.circleList = [];
    this.infectedCount = 0;
    this.healthyCount = this.totalCount;
    this.removedCount = 0;
    this.start = Date.now();

    for (let i = 0; i < this.totalCount; i++) {
      var x = mathRandomInRange(0+this.radius, this.canvas.width-this.radius);
      var y = mathRandomInRange(0+this.radius, this.canvas.height-this.radius);
      var dx = mathRandomInRangeFloat(-this.speed,this.speed);
      var dy = mathRandomInRangeFloat(-this.speed, this.speed);
      var isInfected = false;
      var tempCircle = new Circle(this,x,y,dx,dy,this.radius,isInfected);

      if (i !== 0) {
        for (let j = 0 ; j < this.circleList.length; j++) {
          if (hasCollision(this.circleList[j], tempCircle)) {
            tempCircle.x = mathRandomInRange(0+this.radius, this.canvas.width-this.radius);
            tempCircle.y = mathRandomInRange(0+this.radius, this.canvas.height-this.radius);
            j = -1;
          }
        }
      }
      this.circleList.push(tempCircle);
    }
    this.circleList[0].isInfected = true;
    this.circleList[0].infectionStart = Date.now();
    this.circleList[0].color = colorList.infected;
    this.infectedCount +=1;
    this.healthyCount -= 1;


    this.circleList.forEach(circle => {
      circle.update(this.circleList);
    })


  } //this.init
  this.animate = () => {
    this.c.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.circleList.forEach(circle => {
      circle.update(this.circleList);
    });
    document.getElementById(`healthy${this.id}`).innerHTML = this.healthyCount;
    document.getElementById(`infected${this.id}`).innerHTML = this.infectedCount;
    document.getElementById(`removed${this.id}`).innerHTML = this.removedCount;


    charts[this.id].update();

    if (Date.now()-this.start < this.duration) {
      this.animation = requestAnimationFrame(this.animate);
    }
    else {
      addReplayModal(this);
    }
  }
  this.toggleLockdown = () => {
    var checkBox = document.getElementById("lockdownCheckbox");
    this.isLockdown = checkBox.checked ? true : false;
    this.circleList.forEach( element => {

      if (this.isLockdown) {
        element.velocity.x = element.velocity.x*this.lockdownFactor;
        element.velocity.y = element.velocity.y*this.lockdownFactor;
      } else {
        element.velocity.x = mathRandomInRangeFloat(-this.speed,this.speed);
        element.velocity.y = mathRandomInRangeFloat(-this.speed,this.speed);
      }
    })

  }
  this.restart = () => {
    document.getElementById("lockdownCheckbox").checked = false;
    this.canvas.previousElementSibling.style.display ="none";
    this.transmissionRatio = document.getElementById("transmissionRatio").value/100;
    this.infectionDuration = document.getElementById("infectionDurationEntry").value*1000;
    charts[this.id].c.clearRect(0,0,this.canvas.width,this.canvas.height);
    charts[this.id].time = 0;
    window.cancelAnimationFrame(this.animation);
    this.init();
    this.animate();
  }
}


function areaChart(sim, chart) {
  this.canvas = chart;
  this.c = this.canvas.getContext('2d');
  this.width = 300;

  this.init = () => {
    this.time = 0;
  }
  this.update = () => {

    if (this.time < this.canvas.width) {
      //Plot healthy
      this.c.beginPath();
      this.c.rect(this.time, 0, 1, sim.healthyCount/sim.totalCount*this.canvas.height);
      this.c.fillStyle = colorList.healthy;
      this.c.fill();

      //Plot Removed
      this.c.beginPath();
      this.c.rect(this.time, this.canvas.height-(sim.removedCount / sim.totalCount)*this.canvas.height-(sim.infectedCount / sim.totalCount)*this.canvas.height, 1, this.canvas.height*sim.removedCount/sim.totalCount);
      this.c.fillStyle = colorList.removed;
      this.c.globalAlpha = 1;
      this.c.fill();

      //Plot Infected
      this.c.beginPath();
      this.c.rect(this.time, this.canvas.height-(sim.infectedCount / sim.totalCount)*this.canvas.height, 1, this.canvas.height);
      this.c.fillStyle = colorList.infected;
      this.c.fill();
      this.c.globalAlpha = 1;
      this.time += this.width/60/(sim.duration/1000);
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

function Circle(sim,x,y,dx,dy,radius,isInfected) {
  this.sim = sim;
  this.radius = sim.radius;
  this.x = x;
  this.y = y;
  this.velocity = {
    x: dx,
    y: dy
  }
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
  this.update = () => {
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
      sim.infectedCount -= 1;
      sim.removedCount += 1;
    }

    //Ball Collision check
    sim.circleList.forEach(element => {
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

                sim.healthyCount -= 1;
                sim.infectedCount += 1;
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

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

function checkWallCollision(circle) {
  if ((circle.x + circle.radius) > circle.sim.canvas.width || (circle.x - circle.radius) < 0) {
    circle.velocity.x = -circle.velocity.x;
  }
  if ((circle.y + circle.radius) > circle.sim.canvas.height || (circle.y - circle.radius) < 0 ) {
    circle.velocity.y = -circle.velocity.y;
  }
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

function mathRandomInRange(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

function mathRandomInRangeFloat(min, max) {
  return Math.random() * (max-min) + min;
}

function addReplayModal(sim) {
  sim.canvas.previousElementSibling.style.display ="flex";
}

function checkScroll() {
  console.log(window.scrollY);
  if (window.scrollY > 800 && !sims[1].inView) {
    sims[1].animate();
    sims[1].inView = true;
  }
}

const colorList = {
  healthy: "#63c2db",
  infected: "#f66654",
  removed: "gray",
};
let sims = [];
let charts = [];

for (let i = 0; i < 2; i++) {
  sims[i] = new Simulation(document.getElementById(`simulation${i}`),i);
  sims[i].init();
  charts[i] = new areaChart(sims[i], document.getElementById(`chart${i}`));
  charts[i].init();
}
  sims[0].inView = true;
  sims[0].animate();
