const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users');
  },
  filename: function (req, file, cb) {
    // let fileExtension = path.extname(file.originalname).split('.')[1];
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });

module.exports = upload;
