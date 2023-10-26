const { minioClient } = require('../config/minioClient.js')


async function createBucketIfNotExists(bucketName) {
    await minioClient.bucketExists(bucketName, async (err, exists) => {
        if (err) {
            console.error('Error checking bucket existence:', err);
            return;
        }

        if (exists) {
            console.log('Bucket already exists');
        } else {
            await minioClient.makeBucket(bucketName, '', (createErr) => {
                if (createErr) {
                    console.error('Error creating bucket:', createErr);
                } else {
                    console.log('Bucket created successfully:', bucketName);
                }
            });
        }

        // Set the bucket policy to allow public access
        const policyConfig = {
            Version: '2012-10-17',
            Statement: [
                {
                    Sid: 'MakeItPublic',
                    Effect: 'Allow',
                    Principal: '*',
                    Action: ['s3:GetObject'],
                    Resource: [`arn:aws:s3:::${bucketName}/*`],
                },
            ],
        };

        await minioClient.setBucketPolicy(bucketName, JSON.stringify(policyConfig));
        console.log(`Bucket '${bucketName}' is now public.`);
    });
}

module.exports = {
    createBucketIfNotExists
}