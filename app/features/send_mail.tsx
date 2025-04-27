import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import credentials from '../credentials/emailjs.js'

export default function SendMail(props: any) {

  useEffect(() => {
    if(props.Send){
        console.log(props.ToArray)
        console.log("====================")
        console.log("Send email initiated.")
        console.log(props.Message)
        sendEmail()
        console.log("====================")
    }
  }, [props.Send])


  const buildList = () => {
    console.log(props.ToArray)
    var send_str = ''
    for(var i=0; i<props.ToArray.length; i++){
      i < props.ToArray.length-1 ? send_str = send_str + props.ToArray[i] + "," : send_str = send_str + props.ToArray[i]
    }

    console.log("====================")
    console.log("Email message content:")
    console.log(send_str)
    console.log("====================")

    var params = {
      from: 'Sender Name <jdunntestacct@gmail.com>',
      to: send_str,
      subject: 'Form Submission',
      text: props.Message ? props.Message : "No message included."
    }

    return params
  }

  const sendEmail = () => {
    props.setMessageSent(true)
    emailjs.send(credentials[0], credentials[1], buildList(), {
      publicKey: credentials[2],
    }).then(
        () => {
          console.log('SUCCESS!');
          props.setSend(false)
          props.setMessageLoad(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          props.setSend(false)
        },
      ).finally(
        () =>{
          console.log("dsdasfgf")
          
        }
      )
  };

  return (
    <div>

    </div>
  );
};