import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';


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

  //test data
  // const emailParams = {
  //   from: 'Sender Name <jdunntestacct@gmail.com>',
  //   to: 'jdunn7008@gmail.com,jasongeorgedunn@csus.edu',
  //   subject: 'Form Submission',
  //   text: 'test sending'
  // };

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
    emailjs.send('service_fpq9kbl', 'template_wc6gkfd', buildList(), {
      publicKey: 'hmXhYjWMKHyV8viSP',
    }).then(
        () => {
          console.log('SUCCESS!');
          props.setSend(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          props.setSend(false)
        },
      );
  };

  return (
    <div>

    </div>
  );
};