import React, { useState, useEffect } from 'react'

import SendMail from './send_mail'

export default function MessageForm(props: any) {
  const [Loaded, setLoaded] = useState(false)
  const [SendMap, setSendMap] = useState(Object)
  const [Mapped, setMapped] = useState(false)
  const [ToArray, setToArray] = useState([])
  const [Send, setSend] = useState(false)
  const [Message, setMessage] = useState('')


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

  return (
    <div className="grid grid-flow-row grid-auto grid-cols-1 gap-12">
        <div className="grid grid-rows-1 grid-cols-2 mt-[70px] w-[400px]">
            <span className="text-lg">
                From:
            </span>
            <textarea className="w-[300px] resize-none" value={props.User["email"]} disabled/>
        </div>

        <div className="grid grid-flow-row grid-auto grid-cols-1 mt-[50px] w-[800px]" id="send_div">
          <span className="text-lg">
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
              <span className="text-lg">
                Message:
              </span>
            </div>
            <div className="col-span-2">
              <textarea className="h-[300px] w-[600px] p-[10px] resize-none" onChange={(e) =>messageHandler(e)}/>
            </div>
        </div>
        <div>
          <SendMail Send={Send} setSend={setSend} ToArray={ToArray} Message={Message}/>
        </div>
        <div className="grid grid-rows-1 grid-cols-1 mt-[200px] center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendHandler}>
              Submit
          </button>
        </div>
    </div>
  );
}


// @refresh reset