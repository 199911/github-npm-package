const publicGreet = require('greet-public-https');
const privateGreet = require('greet-private-https');

console.log(publicGreet);
publicGreet.greet();
privateGreet.greet();
