import React from "react";
import {userList} from "../constant/const";
import Dropdown from "./dropdown";
import {styles} from "../constant/styles";
const DeleteUser = () => (
    <div className={'h-[100vh] w-full bg-blue-100'}>
        <form className={'w-full h-full items-center justify-self-start flex flex-col'}>
            <h1 className={`${styles.heading}`}>Delete User</h1>
            <h1 className={`${styles.sub_heading}`}>Select Email Address</h1>
            <Dropdown list = {userList}/>
            <button className={'m-10 h-[50px] w-[100px] rounded bg-blue-700 font-semibold text-white'}>Delete</button>
        </form>
    </div>
);

export default DeleteUser;