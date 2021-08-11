import { Component } from "react"
import ReactApexCharts from "react-apexcharts"
import React from 'react';
import "./main.css"

class ApexChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [80, 50, 67, 83],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                  
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: false,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Delivery', 'To Go', 'Dine In'],
        },
      
      
      };
    }

  

    render() {
      return (
        

<div id="chart">
    <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={250} />
</div>
         );
    }
}



export default ApexChart




