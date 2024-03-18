import React, { useState, useEffect } from 'react'

import SendMail from './send_mail'

import {Watch} from 'react-loader-spinner'

export default function MessageForm(props: any) {
  const [SendMap, setSendMap] = useState(Object)
  const [Mapped, setMapped] = useState(false)
  const [ToArray, setToArray] = useState([])
  const [Send, setSend] = useState(false)
  const [Message, setMessage] = useState('')
  const [MessageSent, setMessageSent] = useState(false)
  const [MessageLoad, setMessageLoad] = useState(false)


  useEffect(() => {
    if(props.User){
        console.log("====================")
        console.log("User data passed to message form.")
        console.log(props.User)
        console.log("====================")
    }
  }, [props.User])


  useEffect(() => {
    if(props.ArrayCleaned){
      var sendMap = Object.keys(props.SendList).map(key => ({
        key: key,
        value: props.SendList[key]
      }));
      setSendMap(sendMap)
      setMapped(true)
    }
  }, [props.ArrayCleaned])


  const toHandler = (e: any) => {
    var temp_arr: any = ToArray 
    if(e.target.checked && !temp_arr.includes(e.target.value)){
      temp_arr.push(e.target.value)
    }else{
      for(var i=0; i<temp_arr.length; i++){
        if(e.target.value == temp_arr[i]){
          temp_arr.splice(i, 1)
          i = temp_arr.length
        }
      }
    }
    setToArray(temp_arr)
    console.log(temp_arr)
  }

  const sendHandler = () => {
    console.log("Send Button Pressed")
    console.log(ToArray)
    setSend(true)
  }

  const messageHandler = (e: any) => {
    setMessage(e.target.value)
  }

  const resetHandler = () => {
    setMessageSent(false)
  }

  return (
    <div>
      {!MessageSent ?
      <div className="grid grid-flow-row grid-auto grid-cols-1 gap-12 text-xl">
          <div className="grid grid-rows-1 grid-cols-2 mt-[150px] w-[400px]">
              <span>
                  From:
              </span>
              <textarea className="w-[300px] h-[50px] p-[10px] resize-none" value={props.User["email"]} disabled/>
          </div>

          <div className="grid grid-flow-row grid-auto grid-cols-1 mt-[50px] h-[400px] w-[800px] overflow-auto" id="send_div">
            <span>
              To:
            </span>
            <span>
              {Mapped ? SendMap.map(result => {
                return (
                  <div className="grid grid-rows-1 grid-cols-2" key={result.id} id={result.value.id}>
                    <span className="ml-[10%] w-[200px] mt-[12px]">{result.value.name}</span> 
                    <input type="checkbox" className="w-[20px]" value={result.value.email} onChange={(e)=>toHandler(e)}/>
                  </div>
                )
              }): null}
            </span>
          </div>

          <div className="grid grid-rows-1 grid-cols-3 mt-[50px] w-[800px]">
              <div>
                <span>
                  Message:
                </span>
              </div>
              <div>
                <textarea className="h-[300px] w-[600px] p-[10px] resize-none" onChange={(e) =>messageHandler(e)}/>
              </div>
          </div>
          <div>
            <SendMail Send={Send} setSend={setSend} ToArray={ToArray} Message={Message} setMessageSent={setMessageSent} setMessageLoad={setMessageLoad}/>
          </div>
          <div className="grid grid-rows-1 grid-cols-1 mt-[200px] center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl" onClick={sendHandler}>
                Submit
            </button>
          </div>
      </div>
      : !MessageLoad ? 
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        : 
          <div className="grid grid-rows-2 grid-cols-1 gap-12 text-4xl text-green-400">
            <span>
              Message has been sent successfully!
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-36 rounded" onClick={resetHandler}>
              Reset Form
            </button>
          </div>
      }
    </div>
  );
}


// @refresh reset