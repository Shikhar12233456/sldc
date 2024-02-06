import React from "react";
import backgroundImage from '../constant/bg_image.webp'
const Login = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-no-repeat bg-bottom"
            style={{backgroundImage: `url('${backgroundImage}')`}}>
            <div className={"mx-32 my-40 p-6 w-[500px] h-[300px] bg-blue-950 rounded-2xl flex-col justify-between"}>
                <h1 className={"font-medium text-white text-2xl"}>SLDC, MP, Jabalpur</h1>
                    <form className={'flex-col items-center justify-between'}>
                        <input type={"text"} placeholder={"Email Address"} className={"m-4 w-[400px] h-[30px] rounded placeholder:pl-2"}/>
                        <input type={"text"} placeholder={"Password"} className={"m-4 w-[400px] h-[30px] rounded placeholder:pl-2"}/>
                        <button className={'h-[50px] w-[70px] mx-4 bg-white text-black rounded'}>Login</button>
                        <button className={'text-white'}>forgot password?</button>
                    </form>
            </div>
        </div>
    );
}

export  default Login;