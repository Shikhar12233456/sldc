import React from "react";
import {styles} from "../constant/styles";
import Dropdown from "./dropdown";
import {accessList} from "../constant/const";

const CreateUser = () => (
    <div className={'w-full h-full bg-blue-100'}>
        <div className={'h-[450px] w-full items-center'}>
            <form className={'w-full h-full items-center justify-self-start flex flex-col'}>
                <h1 className={`${styles.heading}`}>Create User</h1>
                <h1 className={`${styles.sub_heading}`}>Enter Email Address</h1>
                <input type={'text'} className={'bg-white rounded h-[30px] w-[300px]'}/>
                <h1 className={`${styles.sub_heading}`}>Select Role</h1>
                <Dropdown list = {accessList}/>
                <button className={'m-10 h-[50px] w-[100px] rounded bg-blue-700 font-semibold text-white'}>Create</button>
            </form>
        </div>
        <div className={'pl-20 pb-40 align-baseline'}>
            <h1> Summary of operators</h1>
            <h1>&#9899; Operator for SLDC operators</h1>
            <h1>&#9899; Discom1_Operator for East Zone</h1>
            <h1>&#9899; Discom2_Operator for Central Zone</h1>
            <h1>&#9899; Discom3_Operator for West Zone</h1>
            <h1>&#9899; Customer1_Operator for  Railway</h1>
        </div>
    </div>
);

export default CreateUser;