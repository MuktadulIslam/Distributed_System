const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const minioClient = require('../config/minioClient.js');

function singleFileUploader(name) {
    return async function (req, res, next) {
        const upload = multer();
        upload.single(name)(req, res, (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "An error occurred while uploading file" });
            } else {
                const file = req.file;

                if (file) {
                    const file_extension = path.extname(file.originalname);

                    const bucketName = minioClient.postsBucket;
                    const fileName = uuidv4() + file_extension;

                    minioClient.putObject(bucketName, fileName, file.buffer, (err, etag) => {
                        if (err) {
                            console.error("Error uploading file to Minio:", err);
                            res.status(500).json(
                                { message: "An error occured while saving to minio" }
                            );
                        } else {
                            // console.log('File uploaded successfully:', etag);
                            req.body.image_url = `${minioClient.minioUri}/${bucketName}/${fileName}`;
                        }
                    });
                }
                next();
            }
        });
    };
}

function multipleFileUploader() {
    return async function (req, res, next) { next()};
}

module.exports = {
    singleFileUploader,
    multipleFileUploader,
};
