import React from "react";
import {styles} from "../constant/styles";

const ResetPassword = () => (
    <div className={"pl-5 pt-2 h-[100vh] w-full bg-blue-100 overflow-hidden flex flex-col"}>
        <h1 className={`${styles.light_heading}`}>Reset Password</h1>
        <div className={'ml-4 mr-10 w-[95vw] h-[0.5px] bg-black'}/>
        <h1 className={`${styles.sub_heading}`}>Old Password</h1>
        <input className={'h-[40px] w-[80vw] rounded'}/>
        <h1 className={`${styles.sub_heading}`}>New Password</h1>
            <input className={'h-[40px] w-[80vw]'}/>
        <div className={'mx-10 my-4 rounded'}>
                <h1>&#8226; Your password can't be too similar to your other personal information</h1>
                <h1>&#8226; Your password must contain at least 8 characters</h1>
                <h1>&#8226; Your password can't be commonly used password</h1>
                <h1>&#8226; Your password can't be entirely numeric</h1>
                <h1>&#8226; Customer1_Operator for  Railway</h1>
        </div>
        <h1 className={`${styles.sub_heading}`}>New Password Confirmation</h1>
        <input className={'h-[40px] w-[80vw] rounded'}/>
            <button className={'my-4 h-[50px] w-[200px] font-semibold text-blue-400 rounded border-2 border-blue-400'}>Reset Password</button>
    </div>
);

export default ResetPassword;