import React from 'react';
import { DayAheadData } from "../constant/const";
import './Dayahead.css';

const Dayahead = () => {
  return (
    <div className="container-table">
      <div className="relative overflow-x-auto shadow-md border">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 border-b border-grey">
          <caption className="p-5 text-lg font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-black dark:bg-white">
            Day Ahead Load Forecast
          </caption>
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

export default Dayahead;
