import React from 'react';
import { DayAheadData } from "../constant/const";
import './Dayahead.css';

const DayAhead = () => {
  return (
      <div className={"p-10 h-[100vh] w-[100vw] flex flex-col items-center"}>
        <div className={`h-[10vh] w-[95vw] flex bg-white rounded-t-xl items-center justify-between`}>
          <h1 className={'ml-[42vw] align-middle text-xl font-semibold'}>Day Ahead Forecast</h1>
          <button className={'mr-10 h-[34px] w-[70px] bg-blue-400 text-white rounded align-bottom'}>Print As</button>
        </div>
      <div className="p-5 h-[90vh] w-[95vw] bg-white overflow-scroll rounded-bl-2xl">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 border-b border-grey">
          <thead className="text-xs text-white uppercase bg-white dark:text-black">
            <tr>
              <th scope="col" className="px-6 py-3 border">
                Time
              </th>
              <th scope="col" className="px-6 py-3 border">
                East Zone
              </th>
              <th scope="col" className="px-6 py-3 border">
                Central Zone
              </th>
              <th scope="col" className="px-6 py-3 border">
                West Zone
              </th>
              <th scope="col" className="px-6 py-3 border">
                Railway
              </th>
              <th scope="col" className="px-6 py-3 border">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {DayAheadData.map((data, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-50 border-b border-grey' : 'bg-white border-b border-grey'}>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black border">
                  {data[0]}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black border">
                  {data[1]}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black border">
                  {data[2]}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black border">
                  {data[3]}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black border">
                  {data[4]}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black border">
                  {(data[1] + data[2] + data[3] + data[4]).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default DayAhead;
