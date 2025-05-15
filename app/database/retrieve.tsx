import React, { useState } from 'react';
import AWS from 'aws-sdk';
import credentials from '../../credentials/aws.js'

export default function RetrieveAWS(props: any) {
  const [response, setResponse] = useState('');

  
  const dynamo = new AWS.DynamoDB.DocumentClient();

  async function insert(){

    try {      
      const params = {   
        TableName: 'broadcast',
        Item: {
            'email': { S: props.AWSData[0] },
            'password': { S: props.AWSData[1] },
        },
      };

      AWS.config.update({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_AWS_REGION
      });
    
      await dynamo.scan(params).promise();
      
      return {
          statusCode: 200,
          body: JSON.stringify('Data inserted successfully')
      };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify('An error occurred')
        };
    }
    
  };

  return (
    <div>
      <button onClick={insert}>Insert</button>
      <p>{response}</p>
    </div>
  );
}

