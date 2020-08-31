import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'; //Bar, Line, Pie,Polar and Radar can be used as well
class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['','','','','','','','','','','','','',''],
                datasets:[
                    {
                        label:'Temp',
                        data:[
                            11,
                            22,
                            56,
                            10,
                            112,
                            24,
                            34,
                            56,
                            89,
                            11,
                            34,
                            12,
                            45,
                            0
                        ],
                        backgroundColor:[
                            'rgba(255,99,0,.6)'
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