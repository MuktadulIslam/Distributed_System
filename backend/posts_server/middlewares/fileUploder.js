const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const {minioClient} = require('../config/minioClient.js');
const {POSTS_BUCKET} = require('../config/config.js')


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
                    console.log(file)
                    const file_extension = path.extname(file.originalname);

                    const fileName = uuidv4() + file_extension;

                    minioClient.putObject(POSTS_BUCKET, fileName, file.buffer, (err, etag) => {
                        if (err) {
                            console.error("Error uploading file to Minio:", err);
                            res.status(500).json(
                                { message: "An error occured while saving to minio" }
                            );
                        } else {
                            req.body.image_url = fileName;
                        }
                    });
                }
                else{
                    req.body.image_url = null;
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
