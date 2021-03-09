// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // Data is passed into callback instead of being returned directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    } else {
      functionToRunWhenThingsAreDone(undefined);
    }
  });
};

// const printDetails = (breedDetails) => {
//   console.log('Return Value: ', breedDetails);
// };

module.exports = breedDetailsFromFile;