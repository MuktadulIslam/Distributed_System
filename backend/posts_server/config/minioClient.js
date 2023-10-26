const Minio = require("minio");

// const POSTS_BUCKET = "postimages";
const POSTS_BUCKET = "postimages";
const MINIO_URL = 'http://127.0.0.1:9000'

const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: "minioadmin",
    secretKey: "minioadmin",
});

module.exports = {
    minioClient, POSTS_BUCKET, MINIO_URL
}