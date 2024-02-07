// import Logo from "../static/images/logo.png";
// import ChartContainer from "./GraphValue";
// import GraphValue from "./GraphValue";
import { reportData } from "../Const/Const";
// import ApexCharts from "apexcharts";
// import ReactApexCharts from "react-apexcharts";
import Chart from "react-apexcharts"
const Graph = () => {
//   const imgStyle = {
//     verticalAlign: "middle",
//     width: "40",
//   };
  const state = {
    options: {        
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
    chart: {
        type: 'area'
    },
    stroke: {
        curve: 'smooth',
      },
    series: [
        {
         type:'area',
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
  };
  return (
    <>
      <div className={"w-full h-full flex flex-col justify-between bg-blue-50"}>
        {/* <div>
        <h3 className={"ml-10 mt-10 text-xl"}>
        <img src={Logo} alt="Logo"/>
        <span>SLDC, MP, Jabalpur</span>
        </h3>
      </div> */}
        <div className={"p-10 m-10 flex flex-row justify-between"}>
          <h1 className={"font-semibold"}>Central Zone-October, 2021</h1>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Print As{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      {/* Graph */}
        <div>
        <Chart
            options={state.options}            
            series={state.series}            
            width={"1500"}
            height={"300"}
        />
        </div>
               {/* Table  */}
        <div>
          <div className={"flex flex-row ml-10 mt-10"}>
            <h1 className={"font-semibold"}>Average: 4.08%</h1>
            {/* <h1 className={"font-semibold"}>East Zone</h1> */}
          </div>
          <div className={"p-10 m-10 bg-white rounded-2xl shadow-md"}>
            {/* <h1>30 Jun 2021</h1> */}
            <div className={"flex my-2 flex-row justify-between"}>
              <h1 className={"font-semibold"}>Time</h1>
              <h1 className={"font-semibold"}>Forecast</h1>
              <h1 className={"font-semibold"}>Actual</h1>
              <h1 className={"font-semibold"}>Error</h1>
            </div>
            {reportData.map((itemList, index) => (
              <div
                className={`p-2 ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                } flex flex-row justify-between`}
              >
                {itemList.map((item) => (
                  <h1 className={"mx-10"}>{item}</h1>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Graph;
