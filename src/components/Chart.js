import React, { Component } from 'react';
import {Bar, Line, Pie,Polar, Radar} from 'react-chartjs-2';
class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['','','','','',''],
                datasets:[
                    {
                        label:'Temp',
                        data:[
                            11,
                            22,
                            56,
                            10,
                            112,
                            24
                        ],
                        backgroundColor:[
                            'rgba(255,99,0,1.6)'
                        ]

                    }

                ]
            }
        }
    }
    render(){
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{}}
                />
            </div>
        )
    }
}
export default Chart;