
"use client";
import {useState, useEffect} from 'react'

import MessageForm from './features/message_form'
import LoginForm from './login/login_form'
import LoginHeader from './features/login_header'
import SendMail from './features/send_mail'

export default function Home() {
  const [LoggedIn, setLoggedIn] = useState(false)
  const [User, setUser] = useState(null)
  const [SendData, setSendData] = useState(false)
  const [ArrayCleaned, setArrayCleaned] = useState(false)
  const [SendList, setSendList] = useState([])
  const [TriggerLogout, setTriggerLogout] = useState(false)

  useEffect(() => {
    if(LoggedIn){
        console.log("====================")
        console.log("Login passed to homepage.")
        console.log("====================")
    }
  }, [LoggedIn])

  useEffect(() => {
    if(SendData){
        console.log("====================")
        console.log("Recipient Data successfully set.")
        console.log(SendData)
        console.log("====================")
    }
  }, [SendData])

  useEffect(() => {
    if(SendList){
        console.log("====================")
        console.log("Send list successfully set on home page.")
        console.log(SendList)
    }
  }, [SendList])

  useEffect(() => {
    if(User){
      console.log("====================")
      console.log("User data successfully set on home page.")
      console.log(User)
      console.log("====================")
    }
  }, [User])

  useEffect(() => {
    if(SendList && User){
      var temp_list = SendList
      console.log("====================")
      console.log("Removing current user from send list...")
      try{
        for(var i=0; i<temp_list.length; i++){
          if(temp_list[i]["id"] == User["id"]){
            console.log("User match found.")
            temp_list.splice(i, 1)
            console.log("User removed. New list:")
            console.log(temp_list)
            setSendList(temp_list)
            setArrayCleaned(true)
          }
        }
      }catch{}
      console.log("====================")
    }
  }, [SendList, User, ArrayCleaned])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span>BROADCAST MESSAGE DEMO</span>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-gray via-gray dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LoginHeader LoggedIn={LoggedIn} User={User} setTriggerLogout={setTriggerLogout}/>
          </a>
        </div>
      </div>

      {/* <div>
        <MessageForm/>
      </div>
      <div>
        <SelectUsers/>
      </div> */}
      <div>
        {/* <InsertAWS Clicked={Clicked}/>
        <button onClick={clickedHandler}>Insert</button> */}
        <div>
        {!LoggedIn ?           
            <div>
              <LoginForm setLoggedIn={setLoggedIn} TriggerLogout={TriggerLogout} setUser={setUser} setSendList={setSendList}/>
            </div>
        : <div>
            <div>
              <MessageForm User={User} SendList={SendList} setSendData={setSendData} ArrayCleaned={ArrayCleaned}/>
            </div>
            {/* <div>
              <SendMail SendList={SendList}/>
            </div> */}
          </div>
        }
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* INSERT BOTTOM DATA HERE */}

        </a>
      </div>
    </main>
  
  )
}


// @refresh reset