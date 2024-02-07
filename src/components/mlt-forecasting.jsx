import React from "react";
import {lgbrList, lgbrHeaderList, weakHeadList, weakData, monthHeadList, monthData} from "../constant/const";
import TableComponent from "./table-component";
const MltForecasting = () => (
    <div className={'px-5 py-5 w-[100vw] h-[100vh] bg-blue-100 flex flex-col justify-between'}>
        <div className={'w-full h-[46vh] flex flex-row justify-between'}>
            <div className={'w-[37vw] rounded-2xl bg-white flex flex-col'}>
                <div className={'my-4 mx-6 flex flex-row justify-between'}>
                    <h1 className={`font-semibold text-xl`}>LGBR Report (2023 - 2024)</h1>
                    <button className={'h-[34px] w-[70px] bg-blue-400 text-white rounded'}>Print As</button>
                </div>
                <div className={"m-2 overflow-scroll"}>
                    <TableComponent dataList = {lgbrList} headList = {lgbrHeaderList} border = {true}/>
                </div>
            </div>
            <div className={'w-[59vw] rounded-2xl bg-white flex flex-col'}>
                <div className={'my-4 mx-6 flex flex-row justify-between'}>
                    <h1 className={`font-semibold text-xl`}>Weekly Load Forecast</h1>
                    <button className={'h-[34px] w-[70px] bg-blue-400 text-white rounded'}>Print As</button>
                </div>
                <div className={"m-2 overflow-scroll"}>
                    <TableComponent dataList = {weakData} headList = {weakHeadList} border = {false}/>
                </div>
            </div>
        </div>
        <div className={'w-full h-[46vh] rounded-2xl bg-white flex flex-col'}>
            <div className={'my-4 mx-6 flex flex-row justify-between'}>
                <h1 className={`font-semibold text-xl`}>Monthly Load forecast</h1>
                <button className={'h-[34px] w-[70px] bg-blue-400 text-white rounded'}>Print As</button>
            </div>
            <div className={"m-2 overflow-scroll"}>
                <TableComponent dataList = {monthData} headList = {monthHeadList} border = {false}/>
            </div>
        </div>
    </div>
);

export default MltForecasting;