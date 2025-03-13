const multer  = require('multer');
 const ErrorUpload = async (error, req, res, next) => {

  if (error instanceof multer.MulterError) {
    if (error.code == 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).send({ message: 'File must be an image' });
    }
  }
};
module.exports = ErrorUpload