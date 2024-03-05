


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {

    // Lambda handler function
    exports.handler = async (event) => {
        // try {
        //     // Your code logic here
        //     console.log('Received event:', JSON.stringify(event, null, 2));
            
        //     // Example: Insert data into DynamoDB
        //     const params = [
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '1' },
        //                 'name': { S: 'Alice Smith' },
        //                 'email': { S: 'alice.smith@example.com' },
        //                 'password': { S: 'p@ssw0rd1' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '2' },
        //                 'name': { S: 'Bob Johnson' },
        //                 'email': { S: 'bob.johnson@example.com' },
        //                 'password': { S: 'securePassword2' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '3' },
        //                 'name': { S: 'Charlie Brown' },
        //                 'email': { S: 'charlie.brown@example.com' },
        //                 'password': { S: 'brown1234' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '4' },
        //                 'name': { S: 'David Wilson' },
        //                 'email': { S: 'david.wilson@example.com' },
        //                 'password': { S: 'davidPass!' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '5' },
        //                 'name': { S: 'Emma Jones' },
        //                 'email': { S: 'emma.jones@example.com' },
        //                 'password': { S: 'password5' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '6' },
        //                 'name': { S: 'Frank Brown' },
        //                 'email': { S: 'frank.brown@example.com' },
        //                 'password': { S: 'brownPass6' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '7' },
        //                 'name': { S: 'Grace Taylor' },
        //                 'email': { S: 'grace.taylor@example.com' },
        //                 'password': { S: 'taylorGrace7' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '8' },
        //                 'name': { S: 'Henry Clark' },
        //                 'email': { S: 'henry.clark@example.com' },
        //                 'password': { S: 'clarkPass8' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '9' },
        //                 'name': { S: 'Isabella Martinez' },
        //                 'email': { S: 'isabella.martinez@example.com' },
        //                 'password': { S: 'isabellaPass9' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '10' },
        //                 'name': { S: 'Jack Anderson' },
        //                 'email': { S: 'jack.anderson@example.com' },
        //                 'password': { S: 'jackPass10' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '11' },
        //                 'name': { S: 'Katherine Lee' },
        //                 'email': { S: 'katherine.lee@example.com' },
        //                 'password': { S: 'leePass11' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '12' },
        //                 'name': { S: 'Liam Garcia' },
        //                 'email': { S: 'liam.garcia@example.com' },
        //                 'password': { S: 'garciaPass12' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '13' },
        //                 'name': { S: 'Madison Thompson' },
        //                 'email': { S: 'madison.thompson@example.com' },
        //                 'password': { S: 'thompsonPass13' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '14' },
        //                 'name': { S: 'Noah Rodriguez' },
        //                 'email': { S: 'noah.rodriguez@example.com' },
        //                 'password': { S: 'rodriguezPass14' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '15' },
        //                 'name': { S: 'Olivia Martinez' },
        //                 'email': { S: 'olivia.martinez@example.com' },
        //                 'password': { S: 'martinezPass15' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '16' },
        //                 'name': { S: 'Sophia Hernandez' },
        //                 'email': { S: 'sophia.hernandez@example.com' },
        //                 'password': { S: 'hernandezPass16' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '17' },
        //                 'name': { S: 'William Smith' },
        //                 'email': { S: 'william.smith@example.com' },
        //                 'password': { S: 'smithPass17' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '18' },
        //                 'name': { S: 'Abigail Davis' },
        //                 'email': { S: 'abigail.davis@example.com' },
        //                 'password': { S: 'davisPass18' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '19' },
        //                 'name': { S: 'Alexander Johnson' },
        //                 'email': { S: 'alexander.johnson@example.com' },
        //                 'password': { S: 'johnsonPass19' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '20' },
        //                 'name': { S: 'Ava Martinez' },
        //                 'email': { S: 'ava.martinez@example.com' },
        //                 'password': { S: 'martinezPass20' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '21' },
        //                 'name': { S: 'Benjamin Brown' },
        //                 'email': { S: 'benjamin.brown@example.com' },
        //                 'password': { S: 'brownPass21' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '22' },
        //                 'name': { S: 'Chloe Wilson' },
        //                 'email': { S: 'chloe.wilson@example.com' },
        //                 'password': { S: 'wilsonPass22' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '23' },
        //                 'name': { S: 'Daniel Garcia' },
        //                 'email': { S: 'daniel.garcia@example.com' },
        //                 'password': { S: 'garciaPass23' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '24' },
        //                 'name': { S: 'Elizabeth Taylor' },
        //                 'email': { S: 'elizabeth.taylor@example.com' },
        //                 'password': { S: 'taylorPass24' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '25' },
        //                 'name': { S: 'Ethan Martinez' },
        //                 'email': { S: 'ethan.martinez@example.com' },
        //                 'password': { S: 'martinezPass25' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '26' },
        //                 'name': { S: 'Emily Rodriguez' },
        //                 'email': { S: 'emily.rodriguez@example.com' },
        //                 'password': { S: 'rodriguezPass26' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '27' },
        //                 'name': { S: 'Gabriel Lee' },
        //                 'email': { S: 'gabriel.lee@example.com' },
        //                 'password': { S: 'leePass27' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '28' },
        //                 'name': { S: 'Hannah Martinez' },
        //                 'email': { S: 'hannah.martinez@example.com' },
        //                 'password': { S: 'martinezPass28' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '29' },
        //                 'name': { S: 'Isaac Johnson' },
        //                 'email': { S: 'isaac.johnson@example.com' },
        //                 'password': { S: 'johnsonPass29' },
        //             }
        //         },
        //         {
        //             TableName: 'broadcast',
        //             Item: {
        //                 'id': { S: '30' },
        //                 'name': { S: 'Jackie Davis' },
        //                 'email': { S: 'jackie.davis@example.com' },
        //                 'password': { S: 'davisPass30' },
        //             }
        //         },
        //         // Continue adding more items...
        //     ];
            
            
        //     await dynamodb.putItem(params).promise();
            
        //     return {
        //         statusCode: 200,
        //         body: JSON.stringify('Data inserted successfully')
        //     };
        // } catch (err) {
        //     console.error('Error:', err);
        //     return {
        //         statusCode: 500,
        //         body: JSON.stringify('An error occurred')
        //     };
        // }
    };

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
