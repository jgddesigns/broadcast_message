import {useEffect} from 'react';

export default function LoginHeader(props: any) {

    useEffect(() => {
        if(props.LoggedIn){
            console.log("====================")
            console.log("User Login passed to login header.")
            console.log(props.User)
            console.log("====================")
        }
    }, [props.LoggedIn])

    const logoutHandler = (e: any) => {
        e.preventDefault()
        props.setTriggerLogout(true)
    }

    return (
        <div>
            <div className="text-xl cursor-default">
                {props.LoggedIn ? 
                    <div className="grid grid-cols-2">
                        <div>
                            Current User: {props.User["name"]} 
                        </div>
                        <div>
                            <button className="text-blue-400 cursor-pointer ml-[32px]" onClick={e => logoutHandler(e)}>Log Out</button>
                        </div>
                    </div>
                : 
                    <div className="ml-72">
                        <span className="italic">Logged Out</span>
                    </div>
                }
            </div>
        </div> 
    );
}
