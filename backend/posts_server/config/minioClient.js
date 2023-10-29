const Minio = require("minio");
const dotenv = require('dotenv').config();

// const POSTS_BUCKET = "postimages";
const POSTS_BUCKET = "postimages";

const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT,
    port: Number(process.env.MINIO_PORT),
    useSSL: false,
    accessKey: process.env.MINIO_ACCESSKEY,
    secretKey: process.env.MINIO_SECRETKEY,
});

module.exports = {
    minioClient, POSTS_BUCKET
}