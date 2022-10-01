// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("42", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   } else {
//     console.log(coordinates);
//     console.log("It worked! Returned coordinates:", coordinates);
//   }
// });

const { nextISSTimesForMyLocation } = require("./iss");
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOver) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  printPassTimes(flyOver);
});
