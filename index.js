// Code your solution in this file!
function distanceFromHqInBlocks(passengerLocation){
  const hqPosition = 42;
  if(passengerLocation < hqPosition){
    return (passengerLocation - hqPosition) * -1;
  }
  return  passengerLocation - hqPosition;
};

function distanceFromHqInFeet(passengerLocation){
  return (distanceFromHqInBlocks(passengerLocation) * 264);
};
