const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({
    region: 'eu-west-2',
    credentials: {
        accessKeyId: process.env.AKID,
        secretAccessKey: process.env.SAK
    }
});
