import React from 'react';

const Dropdown = (props) => {
    const {list} = props;
    return (
        <div className="h-[30px] w-[300px] flex items-center justify-center">
            <select id="dropdown" className="p-2 border border-gray-300 rounded w-[300px]">
                {
                    list.map((value, index)=> (
                        <option value="$value">{value}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default Dropdown;
