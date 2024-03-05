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
                    <div>
                        Current User: {props.User["name"]} 
                    </div>
                : null}
            </div>
        </div> 
    );
}
