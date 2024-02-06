import Navbar from "./Components/Navbar"
import Header from "../src/Components/Header"
import Chart from "react-apexcharts";
function App() {
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
    <div >
      {/* <Header/> */}
      {/* <Graph/> */}
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
