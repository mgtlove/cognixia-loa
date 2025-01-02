import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-2', // Replace with your Cognito region
    userPoolId: 'us-east-2_yTNB5kwHh',
    userPoolWebClientId: 'm5cds08c8ls0g4j8u76f9r5r4',
  }
});