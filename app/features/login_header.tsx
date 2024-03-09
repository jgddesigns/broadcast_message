import Image from "next/image";
import {useState, useEffect} from 'react';



export default function LoginHeader(props: any) {
    const [LoggedIn, setLoggedIn] = useState(false);
    const [User, setUser] = useState([]);

    useEffect(() => {
        if(props.LoggedIn){
            console.log("====================")
            console.log("User Login passed to login header.")
            console.log(props.User)
            console.log("====================")
        }
    }, [props.LoggedIn])

    return (
        <div>
            <div>
                {props.LoggedIn ? 
                    <div className="grid grid-rows-2">
                        <div>
                            Current User: {props.User["name"]} 
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                            </div>
                            <div>
                                <span className="text-size-sm text-blue-400 cursor-pointer" onClick={props.setTriggerLogout(true)}>Log Out</span>
                            </div>
                        </div>
                    </div>
                : null}
            </div>
        </div> 
    );
}
