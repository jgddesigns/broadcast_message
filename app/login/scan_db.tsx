import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

export default function ScanDB(props: any) {
  const [response, setResponse] = useState('')
  // const [Login, setLogin] = useState(false);
  var user_found = false

  useEffect(() => {
    if(props.Submit){
        console.log("Submit passed to scan database.")
        getDB()
    }
  }, [props.Data])

  useEffect(() => {
    if(props.Data){
        console.log(props.Data)
    }
  }, [props.Data])

  useEffect(() => {
    console.log("login - " + props.Login)
    if(props.Login){
      console.log("Login Successful")
    }else{
      console.log("Login Unsuccessful")    
    }
  }, [props.Login])

  AWS.config.update({
    region: '', 
    accessKeyId: '', 
    secretAccessKey: '', 
  });

  const dynamo = new AWS.DynamoDB.DocumentClient();

  const loginHandler = (user: any) => {
    console.log("Login Successful")
    console.log("User:")
    console.log(user)
    props.setLogin(true)
    props.setUserData(user)
  }

  async function getDB(){
    try {
      console.log('Received event:', JSON.stringify(event, null, 2));
      
      const params = {   
        TableName: 'broadcast',
        Item: {
            'email': { S: props.Data[0] },
            'password': { S: props.Data[1] },
        },
      };
    
      var response = await dynamo.scan(params).promise();
      console.log("db scanned")
      console.log(response["Items"])
      var db_rows: any = []
      response["Items"] ? db_rows = response["Items"] : null

      props.setSendList(db_rows)

      for (var i=0; i<db_rows.length; i++){
        if(db_rows[i]["email"] == props.Data[0] && db_rows[i]["password"] == props.Data[1]){
          console.log("match found")
          console.log(db_rows[i])
          loginHandler(db_rows[i])
          i = db_rows.length
          user_found = true
        }
      }

      if(!user_found){
        console.log("Login Unsuccessful")
      }
    }catch(err){
      console.error('Error:', err);
      return {
        statusCode: 500,
        body: JSON.stringify('An error occurred')
      };
    }
  }

  return (
    <div>
      {/* <button onClick={getDB}>Scan DB</button>
      <p>{response}</p> */}
    </div>
  );
}
