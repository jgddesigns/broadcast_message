import {useState, useEffect} from 'react'
import Button from 'react'
import ScanDB from './scan_db'

export default function LoginForm(props: any) {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Login, setLogin] = useState(false)
  const [UserData, setUserData] = useState([])
  const [ValidEmail, setValidEmail] = useState(false)
  const [ValidPassword, setValidPassword] = useState(false)
  const [ValidationMessage, setValidationMessage] = useState("")

  const submit_class = ["bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-default", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"]
  const [SubmitClass, setSubmitClass] = useState(submit_class[0])
  const login_str = "Login Unsuccessful. Please check the credentials."

  useEffect(() => {
    if(props.Submit){
        submitProcess()
    }
  }, [props.Submit])

  useEffect(() => {
    if(!props.Login && props.Submit){
        setValidationMessage(login_str)
    }
  }, [props.Login && props.Submit])

  useEffect(() => {
    if(Login){
        console.log("Login passed to login page.")
        console.log(UserData)
        
        Login ? props.setLoggedIn(Login) : console.log("User login broken on LoginForm page.")
        UserData ? props.setUser(UserData) : console.log("User data broken on LoginForm page.")
    }
  }, [Login])

  // useEffect(() => {
  //   if(props.Logout){
  //     console.log("====================")
  //     console.log("Logout triggered on login form.")
  //     console.log(props.Logout)
  //     console.log("====================")
  //     logoutHandler()
  //   }
  // }, [props.Logout])

  const emailHandler = (value: any) => {
    setEmail(value)
    validateEmail(value)
  }

  const passwordHandler = (value: any) => {
    setPassword(value)
    validatePassword(value)
  }

  const validateEmail = (value: any) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var email_str = "\n\n" + "Email is invalid."

    setValidationMessage(ValidationMessage.replace(login_str, ""))

    !ValidationMessage.includes(email_str) ? setValidationMessage(ValidationMessage + email_str) : null

    if (!re.test(value)){
      console.log("====================")
      console.log("Email is invalid.")
      console.log("====================")  
      setValidEmail(false)
      return false
    }
    setValidationMessage(ValidationMessage.replace(email_str, ""))
    console.log("====================")
    console.log("Email confirmed as valid.")
    console.log("====================")  
    setValidEmail(true)
    checkValidity(true, ValidPassword)
    return true
  }

  const validatePassword = (value: any) => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    var chars = 1
    var i = 1
    var chars_str = "\n\n" + "Password needs at least 2 special characters."
    var len_str = "\n\n" + "Password needs at least 8 characters."

    setValidationMessage(ValidationMessage.replace(login_str, ""))

    while(chars < 2 && i < value.length-1){
      format.test(value[i]) ? chars++ : null
      console.log(chars)
      i++
    }

    if(chars < 2){
      console.log("====================")
      console.log("Password needs at least 2 special characters.")
      !ValidationMessage.includes(chars_str) ? setValidationMessage(ValidationMessage + chars_str) : null
      console.log("====================")
    }else{
      setValidationMessage(ValidationMessage.replace(chars_str, ""))
    }

    if(value.length < 8){
      console.log("====================")
      !ValidationMessage.includes(len_str) ? setValidationMessage(ValidationMessage + len_str) : null
      console.log("Password needs at least 8 characters.")
      console.log("====================")   
    }else{
      setValidationMessage(ValidationMessage.replace(len_str, ""))
    }

    if((chars < 2) || (value.length < 8)){
      console.log("====================")
      console.log("Password is invalid.")
      console.log("====================")  
      setValidPassword(false)
      console.log(ValidEmail)
      return false
    }

    console.log("====================")
    console.log("Password confirmed as valid.")
    console.log("====================")  
    setValidationMessage("")
    setValidPassword(true)
    checkValidity(ValidEmail, true)
    return true
  }

  const checkValidity = (email: any, password: any) => {
    console.log(email)
    console.log(password)
    if(email && password){
      console.log("====================")
      console.log("Both login fields confirmed as valid.")
      console.log("====================")
      setSubmitClass(submit_class[1]) 
    }else{
      console.log("====================")
      console.log("Login fields are invalid.")
      console.log("====================")
      setSubmitClass(submit_class[0])
    } 
  }

  const submitHandler = (e: any) => {
    const TempData: string[] | null = [Email, Password]
    props.setData(TempData)
    props.setSubmit(true)
  }

  const submitProcess = () => {
    console.log("====================")
    console.log("Login Data:")
    console.log(props.Data[0])
    console.log(props.Data[1])
    console.log("====================")
  }

  return (
    <div>
        <div className="grid grid-rows-3 text-2xl">
          <div className="grid grid-rows-2 grid-cols-2">
              <span>
                  Email:
              </span>
              <textarea className="w-[400px] h-[60px] resize-none p-[10px]" onChange={(e) => emailHandler(e.target.value)}/>
          </div>

          <div className="grid grid-rows-2 grid-cols-2">
              <span>
                  Password:
              </span>

              <textarea className="w-[400px] h-[60px] resize-none p-[10px]" onChange={(e) => passwordHandler(e.target.value)}/>
          </div>
          
          <div className="text-red-500"> 
            {ValidationMessage}
          </div> 

          <div className="grid grid-rows-2 grid-cols-2">
              <span>
              </span>

              <button onClick={submitHandler} className={SubmitClass}>
                  Submit
              </button>
          </div>
        </div>
     
        <ScanDB Submit={props.Submit} Data={props.Data} Login={Login} setLogin={setLogin} setUserData={setUserData} setSendList={props.setSendList}/>
    </div>
  );
}

