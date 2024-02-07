import React from "react";

const TableComponent = (props) => {
    const {dataList, headList, border} = props;
    return(
        <table className={"m-2 text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 border-b border-grey"}>
            <thead className="text-xs text-white uppercase bg-white dark:text-black">
            <tr className={'border-y-2'}>
                {
                    headList.map((value, index)=> (
                        <th scope="col" className={`px-6 py-3 font-semibold text-base font-bold ${border === true ? "border": ""}`}>
                            {value}
                        </th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {
                dataList.map((elements, index)=> (
                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50 border-b border-grey' : 'bg-white border-b border-grey'}>
                        {
                            elements.map((val, index)=> (
                                <td className={`px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black ${border === true ? "border": "border-y-2"}`}>
                                    {val}
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default TableComponent;
