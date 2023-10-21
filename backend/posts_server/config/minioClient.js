// import * as Minio from "minio";
const Minio = require("minio");

const minioUri = 'http://127.0.0.1:9000';
const postsBucket = "posts"

const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: "", // accesskey
    secretKey: "", // secretkey
});

module.exports = {
    minioClient, minioUri, postsBucket
}