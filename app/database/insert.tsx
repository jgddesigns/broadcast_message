import {useState, useEffect} from 'react';
import AWS from 'aws-sdk';
import credentials from '../../credentials/aws.js'


//Not in program.... add to program to allow for more inserts
function InsertAWS(props: any) {
  const [Clicked, setClicked] = useState(false);

  const dynamo = new AWS.DynamoDB();

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const user_arr = [
      //AJUST THIS TO INSERT MORE USERS
      {
        'id': { S: '31' },
        'name': { S: 'Jay Dunn' },
        'email': { S: 'jdunntestacct@gmail.com' },
        'password': { S: 'jay12345' },
      },

      //random data generated from chat gpt
      {
        'id': { S: '4' },
        'name': { S: 'Bob Brown' },
        'email': { S: 'bob.brown@example.com' },
        'password': { S: 'brownie123' },
      },
      {
        'id': { S: '5' },
        'name': { S: 'Emily Davis' },
        'email': { S: 'emily.davis@example.com' },
        'password': { S: 'davis789' },
      },
      {
        'id': { S: '6' },
        'name': { S: 'Michael Wilson' },
        'email': { S: 'michael.wilson@example.com' },
        'password': { S: 'wilson456' },
      },
      {
        'id': { S: '7' },
        'name': { S: 'Sophia Martinez' },
        'email': { S: 'sophia.martinez@example.com' },
        'password': { S: 'sophie123' },
      },
      {
        'id': { S: '8' },
        'name': { S: 'William Anderson' },
        'email': { S: 'william.anderson@example.com' },
        'password': { S: 'anderson456' },
      },
      {
        'id': { S: '9' },
        'name': { S: 'Olivia Taylor' },
        'email': { S: 'olivia.taylor@example.com' },
        'password': { S: 'olivia789' },
      },
      {
        'id': { S: '10' },
        'name': { S: 'James Brown' },
        'email': { S: 'james.brown@example.com' },
        'password': { S: 'brownie456' },
      },
      {
        'id': { S: '11' },
        'name': { S: 'Emma Wilson' },
        'email': { S: 'emma.wilson@example.com' },
        'password': { S: 'emma1234' },
      },
      {
        'id': { S: '12' },
        'name': { S: 'Alexander Johnson' },
        'email': { S: 'alexander.johnson@example.com' },
        'password': { S: 'alex789' },
      },
      {
        'id': { S: '13' },
        'name': { S: 'Ella Garcia' },
        'email': { S: 'ella.garcia@example.com' },
        'password': { S: 'ella456' },
      },
      {
        'id': { S: '14' },
        'name': { S: 'Noah Brown' },
        'email': { S: 'noah.brown@example.com' },
        'password': { S: 'noah1234' },
      },
      {
        'id': { S: '15' },
        'name': { S: 'Isabella Martinez' },
        'email': { S: 'isabella.martinez@example.com' },
        'password': { S: 'isabella789' },
      },
      {
        'id': { S: '16' },
        'name': { S: 'Mia Taylor' },
        'email': { S: 'mia.taylor@example.com' },
        'password': { S: 'mia456' },
      },
      {
        'id': { S: '17' },
        'name': { S: 'Benjamin Anderson' },
        'email': { S: 'benjamin.anderson@example.com' },
        'password': { S: 'benjamin1234' },
      },
      {
        'id': { S: '18' },
        'name': { S: 'Charlotte Wilson' },
        'email': { S: 'charlotte.wilson@example.com' },
        'password': { S: 'charlotte456' },
      },
      {
        'id': { S: '19' },
        'name': { S: 'Liam Johnson' },
        'email': { S: 'liam.johnson@example.com' },
        'password': { S: 'liam1234' },
      },
      {
        'id': { S: '20' },
        'name': { S: 'Ava Garcia' },
        'email': { S: 'ava.garcia@example.com' },
        'password': { S: 'ava789' },
      },
      {
        'id': { S: '21' },
        'name': { S: 'Lucas Brown' },
        'email': { S: 'lucas.brown@example.com' },
        'password': { S: 'lucas456' },
      },
      {
        'id': { S: '22' },
        'name': { S: 'Amelia Martinez' },
        'email': { S: 'amelia.martinez@example.com' },
        'password': { S: 'amelia1234' },
      },
      {
        'id': { S: '23' },
        'name': { S: 'Ethan Taylor' },
        'email': { S: 'ethan.taylor@example.com' },
        'password': { S: 'ethan789' },
      },
      {
        'id': { S: '24' },
        'name': { S: 'Harper Anderson' },
        'email': { S: 'harper.anderson@example.com' },
        'password': { S: 'harper456' },
      },
      {
        'id': { S: '25' },
        'name': { S: 'Mason Johnson' },
        'email': { S: 'mason.johnson@example.com' },
        'password': { S: 'mason1234' },
      },
      {
        'id': { S: '26' },
        'name': { S: 'Evelyn Garcia' },
        'email': { S: 'evelyn.garcia@example.com' },
        'password': { S: 'evelyn789' },
      },
      {
        'id': { S: '27' },
        'name': { S: 'Logan Brown' },
        'email': { S: 'logan.brown@example.com' },
        'password': { S: 'logan456' },
      },
      {
        'id': { S: '28' },
        'name': { S: 'Avery Martinez' },
        'email': { S: 'avery.martinez@example.com' },
        'password': { S: 'avery1234' },
      },
      {
        'id': { S: '29' },
        'name': { S: 'Sofia Taylor' },
        'email': { S: 'sofia.taylor@example.com' },
        'password': { S: 'sofia789' },
      },
      {
        'id': { S: '30' },
        'name': { S: 'Jackson Anderson' },
        'email': { S: 'jackson.anderson@example.com' },
        'password': { S: 'jackson456' },
      }
    ]



  useEffect(() => {
    if(props.Clicked){
      //console.log("====================")
      //console.log("Insert function initiated.")
      //console.log("====================")
      // setClicked(true)
      insert();
    }
  }, [props.Clicked])


  async function insert(){
    try {
      //console.log('Received event:', JSON.stringify(event, null, 2));
      
      //FOR MULTIPLE USER INSERTS IN 'users_arr' ARRAY
      // for(var i=0; i<user_arr.length; i++){
      //   const params = {
      //     TableName: 'broadcast',
      //     Item: user_arr[i],
      //   };
      //   await dynamo.putItem(params).promise();
      // }

      //SINGLE INSERT
      const params = {
        TableName: 'broadcast',
        Item:     
          {'id': { S: '' },
          'name': { S: '' },
          'email': { S: '' },
          'password': { S: '' },
        }
      };
      await dynamo.putItem(params).promise();
      
      //console.log('insert successful')
      setClicked(true)
      
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
    </div>
  );
}

export default InsertAWS;
