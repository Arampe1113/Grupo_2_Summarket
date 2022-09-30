const bcryptjs = require('bcryptjs');

let hash = bcryptjs.hashSync('Holamundo', 10);
console.log(hash);
console.log(bcryptjs.compareSync('Holamundo12', hash));
