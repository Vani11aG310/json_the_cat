const needle = require('needle');
const breed = process.argv[2];

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) throw error;
  if (body.length < 1) {
    console.log('There is no breed like that');
  } else {
    console.log(body[0].description);
  }
});