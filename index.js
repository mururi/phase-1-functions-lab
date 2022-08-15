function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(feet){
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(block1, block2){
  return Math.abs(block2 - block1) * 264;
}

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400){
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}