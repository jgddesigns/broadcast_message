import {useState, useEffect} from 'react'
import Button from 'react'
import ScanDB from './scan_db'

export default function Logout(props: any) {

  useEffect(() => {
    if(props.TriggerLogout){
      //console.log("====================")
      //console.log("Logout triggered on login form.")
      //console.log(props.TriggerLogout)
      //console.log("====================")
      logoutHandler()
    }
  }, [props.TriggerLogout])

  const logoutHandler = () => {
    props.setData([""])
    props.setSubmit(false)
    props.setLogin(false)
    props.setLoggedIn(false)
    props.setTriggerLogout(false)
  }

  return (
    <div>

    </div>
  );
}

