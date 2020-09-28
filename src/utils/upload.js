const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      cb(null, 'uploads');
      console.log('uploades');
    } catch (error) {
      console.log('errrrror', error);
    }
  },
  filename: function (req, file, cb) {
    console.log('file', file);

    cb(null, Date.now() + '-' + file.originalname);
  },
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});
