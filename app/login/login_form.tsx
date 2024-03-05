import {useState, useEffect} from 'react'
import Button from 'react'
import ScanDB from './scan_db'

export default function LoginForm(props: any) {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Submit, setSubmit] = useState(false)
  const [Data, setData] = useState([""])
  const [Login, setLogin] = useState(false)
  const [UserData, setUserData] = useState([])


  useEffect(() => {
    if(Submit){
        submitProcess()
    }
  }, [Submit])

  useEffect(() => {
    if(Login){
        console.log("Login passed to login page.")
        console.log(UserData)
        
        Login ? props.setLoggedIn(Login) : console.log("User login broken on LoginForm page.")
        UserData ? props.setUser(UserData) : console.log("User data broken on LoginForm page.")
    }
  }, [Login])

  const emailHandler = (value: any) => {
    // console.log(value)
    setEmail(value)
    // validateEmail(value)
  }

  const passwordHandler = (value: any) => {
    // console.log(value)
    setPassword(value)
    // validatePassword(e.target.value)
  }

  const validateEmail = (e: any) => {
    setPassword(e.target.value)
  }

  const validatePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const submitHandler = (e: any) => {
    const TempData: string[] | null = [Email, Password]
    setData(TempData)
    setSubmit(true)
  }

  const submitProcess = () => {
    console.log(Data[0])
    console.log(Data[1])
  }



  return (
    <div>
        <div className="grid grid-rows-3">

                <div className="grid grid-rows-2 grid-cols-2">
                    <span>
                        Email:
                    </span>
                    <textarea className="w-[300px]" onChange={(e) => emailHandler(e.target.value)}/>
                </div>

                <div className="grid grid-rows-2 grid-cols-2">
                    <span>
                        Password:
                    </span>

                    <textarea className="w-[300px]" onChange={(e) => passwordHandler(e.target.value)}/>
                </div>

                <div className="grid grid-rows-2 grid-cols-2">
                    <span>

                    </span>

                    <button onClick={submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </div>
     
    
        <ScanDB Data={Data} Login={Login} setLogin={setLogin} setUserData={setUserData} setSendList={props.setSendList}/>
    </div>
  );
}

