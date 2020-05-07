export function hasCollision(a, b) {
    if (Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) <= a.radius + b.radius) {
      return true;
    }
    return false;
  }
  
export function mathRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
export function mathRandomInRangeFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

export function checkCircleCollision(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) <= a.radius + b.radius; 
  }

export function resolveCollision(a,b) {
    const xVelocityDiff = a.velocity.x - b.velocity.x;
    const yVelocityDiff = a.velocity.y - b.velocity.y;

    const xDist = b.x - a.x;
    const yDist = b.y - a.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        // Grab angle between the two colliding particles
        const angle = -Math.atan2(b.y - a.y, b.x - a.x);

        // Store mass in var for better readability in collision equation
        const m1 = a.mass;
        const m2 = b.mass;

        // Velocity before equation
        const u1 = rotate(a.velocity, angle);
        const u2 = rotate(b.velocity, angle);

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

        a.velocity.x = a.lockedDown ? vFinal1.x * 0.05 : vFinal1.x;
        a.velocity.y = a.lockedDown ? vFinal1.y * 0.05 : vFinal1.y;

        b.velocity.x = b.lockedDown ? vFinal2.x * 0.05 : vFinal2.x;
        b.velocity.y = b.lockedDown ? vFinal2.x * 0.05 : vFinal2.y;
    }
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
  };

  return rotatedVelocities;
}

export function checkWallCollision(a, canvas, isRestricted) {
  if ((a.x + a.radius) > canvas.width || (a.x - a.radius) < 0) {
    a.velocity.x = -a.velocity.x;
  }
  if ((a.y + a.radius) > canvas.height || (a.y - a.radius) < 0) {
    a.velocity.y = -a.velocity.y;
  }
  if (isRestricted) {
    if (a.x < canvas.width / 2 && (a.x + a.radius) > (canvas.width / 2 ) - 2) {
      a.velocity.x = -a.velocity.x;
    }
    if (a.x > canvas.width / 2 && (a.x - a.radius) < (canvas.width / 2) + 2) {
      a.velocity.x = -a.velocity.x;
    }
  }
}

export function checkInfectedandSusceptible(a,b) {
  const oneInfected = a.isInfected && !b.isInfected;
  const otherInfected = !a.isInfected && b.isInfected;
  const neitherRemoved = !a.isRemoved && !b.isRemoved;
  return ((oneInfected || otherInfected) && neitherRemoved)
}

export function resizeCanvasToDisplaySize(canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}
