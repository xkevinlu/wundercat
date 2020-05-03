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