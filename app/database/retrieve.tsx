import React, { useState } from 'react';
import AWS from 'aws-sdk';

export default function RetrieveAWS(props: any) {
  const [response, setResponse] = useState('');

  
  const dynamo = new AWS.DynamoDB.DocumentClient();

  async function insert(){

    try {
      console.log('Received event:', JSON.stringify(event, null, 2));
      
      const params = {   
        TableName: 'broadcast',
        Item: {
            'email': { S: props.AWSData[0] },
            'password': { S: props.AWSData[1] },
        },
      };
    
      await dynamo.scan(params).promise();
      
      return {
          statusCode: 200,
          body: JSON.stringify('Data inserted successfully')
      };
    } catch (err) {
        console.error('Error:', err);
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

