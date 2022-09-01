import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chart } from "react-google-charts";

export default class Spending extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Chart
            chartType="PieChart"
            data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
            width="100%"
            height="400px"
            legendToggle
            />
        );
    }
}