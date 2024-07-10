
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is at block 42
  }
  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    let blocksTraveled = Math.abs(destination - start);
    return blocksTraveled * 264;
  }
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance < 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else if (distance >= 2500) {
      return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
  }


