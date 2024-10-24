const needle = require('needle');
const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) callback(error, null);
    if (body.length < 1) {
      callback(null, 'There is no breed with that name');
    } else {
      callback(null, body[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };