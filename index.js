// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  return Math.abs(distanceFromHqInFeet(num1) - distanceFromHqInFeet(num2));
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  } else if (
    distanceTravelledInFeet(start, destination) >= 400 &&
    distanceTravelledInFeet(start, destination) < 2000
  ) {
    return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
  } else if (
    distanceTravelledInFeet(start, destination) >= 2000 &&
    distanceTravelledInFeet(start, destination) <= 2500
  ) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  }
}
