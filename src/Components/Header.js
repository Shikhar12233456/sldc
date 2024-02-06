import React from "react";
// import LineGraph from "./chart";
// import Chart from "./chart";
import {hrData, loadData} from "../Const/Const";
const Home = () => {
    return (
        <div className={"w-full h-full flex flex-row justify-between bg-blue-50"}>
            <div className={"w-1/2 flex flex-col justify-between"}>
                <h2 className={"ml-10 mt-10 text-xl"}>East Zone Lead</h2>
                <div className={"h-80 ml-10 mb-10 w-full px-20 py-20 shadow-md rounded-2xl bg-white"}>
                    <div className={"h-16 flex flex-row justify-between"}>
                        <div className={"flex flex-col justify-between"}>
                            <h1 className={"font-semibold"}>Today's chart (30 May 2021)</h1>
                            <div className={"flex flex-row"}>
                                <div className="flex items-center mr-10">
                                    <input type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                                    <label htmlFor="disabled-radio-1" className="ms-2 text-sm font-medium text-orange-400">Forecast</label>
                                </div>
                                <div className="flex items-center mr-10">
                                    <input type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                                    <label htmlFor="disabled-radio-1" className="ms-2 text-sm font-medium text-teal-400">Actual</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                                    <label htmlFor="disabled-radio-1" className="ms-2 text-sm font-medium text-black-200">Both</label>
                                </div>
                            </div>
                        </div>
                        <div className="relative inline-block text-left">
                            <button className={"border-4 rounded border-black-50"}>11:00-12:00</button>
                        </div>
                    </div>
                </div>
                <div className={"h-72 w-full ml-10 mb-10 shadow-md rounded-2xl bg-white"}>
                    <div className={"my-5 mx-10 flex flex-row justify-between"}>
                        <h1 className={"font-semibold"}> Hour Ahead Forecast</h1>
                        <h1 className={"font-medium"}>prev next</h1>
                    </div>
                    <div className={"my-5 mx-10 flex flex-row justify-between"}>
                        <h1>  </h1>
                        <h1 className={"font-semibold"}> East Zone</h1>
                        <h1 className={"font-semibold"}> Central Zone</h1>
                        <h1 className={"font-semibold"}> West Zone</h1>
                        <h1 className={"font-semibold"}> Railway</h1>
                        <h1 className={"font-semibold"}> Total</h1>

                    </div>
                    {
                        hrData.map((item, index) => (
                            <div className={`p-2 mx-10 ${index % 2 === 1 ? "bg-blue-50" : "bg-white"} flex flex-row justify-between`}>
                                {
                                    item.map((str)=> (
                                        <h1>{str}</h1>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={"w-2/5 p-10 m-10 bg-white rounded-2xl shadow-md"}>
                <div className={"flex flex-row justify-between"}>
                    <h1 className={"font-semibold"}>Today's Electricity Load</h1>
                    <h1 className={"font-semibold"}>East Zone</h1>
                </div>
                <h1>30 Jun 2021</h1>
                <div className={"flex mx-10 my-4 flex-row justify-between"}>
                    <h1 className={"font-semibold"}>Time</h1>
                    <h1 className={"font-semibold"}>Actual</h1>
                    <h1 className={"font-semibold"}>Forecast</h1>
                </div>
                    {
                        loadData.map((itemList, index)=>(
                            <div className={`p-2 ${index %2 ===0 ? "bg-blue-50" : "bg-white"} flex flex-row justify-between`}>
                                {itemList.map((item)=>(
                                    <h1 className={'mx-10'}>{item}</h1>
                                ))}
                            </div>
                        ))
                    }
            </div>
        </div>
    );
}

export default Home;