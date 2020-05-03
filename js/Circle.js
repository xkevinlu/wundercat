import {colorList} from './colorList.js';

function rotate(velocity, angle) {
    const rotatedVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };
  
    return rotatedVelocities;
  };

export default function Circle(sim, x, y, dx, dy, radius, isInfected) {
    this.sim = sim;
    this.radius = sim.radius;
    this.x = x;
    this.y = y;
    this.velocity = {
      x: dx,
      y: dy,
    };
    this.isInfected = isInfected;
    this.isHealthy = !isInfected;
    this.color = this.isInfected ? colorList.infected : colorList.healthy;
    this.infectionFrame = 0;
    this.isRemoved = false;
    this.mass = 1;
    this.opacity = 1;
    this.lockedDown = false;
  
  
    this.draw = () => {
      sim.c.beginPath();
      sim.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      sim.c.globalAlpha = this.opacity;
      sim.c.fillStyle = this.color;
      sim.c.fill();
    };

    this.checkWallCollision = () => {
        if ((this.x + this.radius) > this.sim.canvas.width || (this.x - this.radius) < 0) {
          this.velocity.x = -this.velocity.x;
        }
        if ((this.y + this.radius) > this.sim.canvas.height || (this.y - this.radius) < 0) {
          this.velocity.y = -this.velocity.y;
        }
        if (this.sim.isRestricted) {
          if (this.x < this.sim.canvas.width / 2 && (this.x + this.radius) > (this.sim.canvas.width / 2 ) - 2) {
            this.velocity.x = -this.velocity.x;
          }
          if (this.x > this.sim.canvas.width / 2 && (this.x - this.radius) < (this.sim.canvas.width / 2) + 2) {
            this.velocity.x = -this.velocity.x;
          }
        }
      },

    this.checkCircleCollision = (target) => {
        if (Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2)) <= this.radius + target.radius) {
          return true;
        }
        return false;
      },
    this.resolveCollision = (target) => {
        const xVelocityDiff = this.velocity.x - target.velocity.x;
        const yVelocityDiff = this.velocity.y - target.velocity.y;

        const xDist = target.x - this.x;
        const yDist = target.y - this.y;

        // Prevent accidental overlap of particles
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            // Grab angle between the two colliding particles
            const angle = -Math.atan2(target.y - this.y, target.x - this.x);

            // Store mass in var for better readability in collision equation
            const m1 = this.mass;
            const m2 = target.mass;

            // Velocity before equation
            const u1 = rotate(this.velocity, angle);
            const u2 = rotate(target.velocity, angle);

            // Velocity after 1d collision equation
            const v1 = {
            x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
            y: u1.y
            };
            const v2 = {
            x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
            y: u2.y
            };

            // Final velocity after rotating axis back to original location
            const vFinal1 = rotate(v1, -angle);
            const vFinal2 = rotate(v2, -angle);

            // Swap particle velocities for realistic bounce effect

            this.velocity.x = this.lockedDown ? vFinal1.x * 0.05 : vFinal1.x;
            this.velocity.y = this.lockedDown ? vFinal1.y * 0.05 : vFinal1.y;

            target.velocity.x = target.lockedDown ? vFinal2.x * 0.05 : vFinal2.x;
            target.velocity.y = target.lockedDown ? vFinal2.x * 0.05 : vFinal2.y;
        }
    },
    this.update = () => {
        // Basic movement
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.infectionFrame = this.isInfected ? this.infectionFrame + 1 : this.infectionFrame;
        // Wall Collision
        this.checkWallCollision();
    
        // Develop immunity or die
        if (this.isInfected && this.infectionFrame > sim.infectionDuration) {
          this.color = colorList.removed;
          this.opacity = 0.5;
          this.isInfected = false;
          this.isRemoved = true;
          sim.infectedCount -= 1;
          sim.removedCount += 1;
        }
    
        // Ball Collision check
        sim.circleList.forEach((element) => {
          if (this != element) {
            if (this.checkCircleCollision(element)) {
              if ((this.isInfected && !element.isInfected) ||
                (element.isInfected && !this.isInfected)) {
                if (!this.isRemoved && !element.isRemoved) {
                  if (Math.random() < sim.transmissionRatio) {
                    this.color = colorList.infected;
                    this.isInfected = true;
                    this.isHealthy = false;
                    this.infectionFrame += 1;
    
                    element.color = colorList.infected;
                    element.isInfected = true;
                    element.isHealthy = false;
                    element.infectionFrame += 1;
    
                    sim.healthyCount -= 1;
                    sim.infectedCount += 1;
                  }
                }
              }
              this.resolveCollision(element);
            }
          }
        });
    
        this.draw();
      };
  }

