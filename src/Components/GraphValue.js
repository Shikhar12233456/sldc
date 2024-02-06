import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const firstSeries = [123, 276, 310, 212, 240, 156, 98];
const secondSeries = [165, 210, 287, 144, 190, 167, 212];
const thirdSeries = [56, 140, 195, 46, 123, 78, 95];
const ChartContainer = () => {
  return <Chart>
        <ChartTitle text="Units sold" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} title={{
        text: 'Months'
      }} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="area" data={firstSeries} />
          <ChartSeriesItem type="area" data={secondSeries} />
          <ChartSeriesItem type="area" data={thirdSeries} />
        </ChartSeries>
      </Chart>;
};
ReactDOM.render(<ChartContainer />, document.querySelector('my-app'));
export default ChartContainer;