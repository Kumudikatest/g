const AWS = require('aws-sdk');
const translate = new AWS.Translate();
const sqs = new AWS.SQS();
const sns = new AWS.SNS();
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_HdYJb7Znp",
            Limit: 10
        }).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
        // error handling goes here
    };
    try {
        let data = await ddb.put({
            TableName: "ktable",
            Item: {
                ID: "1",
                Name: "k"
            }
        }).promise();
        console.log(data);

    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    try {
        let data = await s3.listObjects({
            Bucket: "cloud9-ktest",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await sns.publish({
            Message: `Test`,
            TopicArn: "arn:aws:sns:us-east-1:318300609668:TestSNS",
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();
        console.log(data);

    } catch (err) {
        console.log(err);
        // error handling goes here
    };
    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/KTestSQS`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        }).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
        // error handling goes here
    };
    try {
        let data = await translate.translateText({
            SourceLanguageCode: "auto",
            TargetLanguageCode: "en",
            Text: "Hola"
        }).promise();
        console.log(data);
    } catch (err) {

        console.log(err);
        // error handling goes here
        try {
            let data = await cognito_idp.listUsers({
                UserPoolId: process.env.UserPoolId_cognito1,
                Limit: 10
            }).promise();

        } catch (err) {
            // error handling goes here
        };
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognito2,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognito3,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognito4,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognito5,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognito6,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognito7,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognito8,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};