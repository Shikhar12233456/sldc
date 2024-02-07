import React from "react";
import {styles} from "../constant/styles";

const UpdateUserPassword = () => (
        <div className={'w-full h-full bg-blue-100 mt-10'}>
            <div className={'h-[100vh] w-full items-center'}>
                <form className={'w-full h-full items-center justify-self-start flex flex-col'}>
                    <h1 className={`${styles.heading}`}>Update User Password</h1>
                    <h1 className={`${styles.sub_heading}`}>Enter Email Address</h1>
                    <input type={'text'} className={'bg-white rounded h-[30px] w-[300px]'}/>
                    <h1 className={`${styles.sub_heading}`}>Enter Old Password</h1>
                    <input type={'text'} className={'bg-white rounded h-[30px] w-[300px]'}/>
                    <h1 className={`${styles.sub_heading}`}>Enter New Password</h1>
                    <input type={'text'} className={'bg-white rounded h-[30px] w-[300px]'}/>
                    <button className={'m-10 h-[50px] w-[100px] rounded bg-blue-700 font-semibold text-white'}>Update</button>
                </form>
            </div>
        </div>
);

export default UpdateUserPassword;