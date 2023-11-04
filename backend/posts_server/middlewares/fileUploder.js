const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const { minioClient, POSTS_BUCKET } = require('../config/minioClient.js');

function getImageExtension(dataUri) {
    const match = dataUri.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!match) {
        throw new Error('Invalid data URI');
    }

    const mime = match[1];
    const ext = mime.split('/')[1];
    if (!ext) {
        throw new Error('Unknown file extension');
    }

    return ext;
}


function singleFileUploader(name) {
    return async function (req, res, next) {
        const upload = multer();
        upload.single(name)(req, res, async (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "An error occurred while uploading file" });
            } else {
                const file = req.file;
                if (file) {
                    const file_extension = path.extname(file.originalname);

                    const fileName = (uuidv4() + file_extension);
                    const response = await minioClient.putObject(POSTS_BUCKET, fileName, file.buffer);
                    if(response) {
                        req.body.image_url = minioClient.protocol + '//' + "localhost" + ':' + minioClient.port + '/' + POSTS_BUCKET + '/' + fileName;
                    }
                    else req.body.image_url = 'null';
                }
                else {
                    req.body.image_url = 'null';
                }
                next();
            }
        });
    };
}

function multipleFileUploader() {
    return async function (req, res, next) { next() };
}

module.exports = {
    singleFileUploader,
    multipleFileUploader,
};
