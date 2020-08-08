import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
    
    
    render(){
        const {
            allCountryTotal,
            allCountryTotalDeaths,
            allCountryTotalRecoveries,
            allCountryTotalActiveCases
        } = this.props;
        
        const data = {
            
            labels: ['Infected', 'Recovered', 'Active', 'Deaths'],
            datasets: [
              {
                label: 'Global',
                fill: false,
                lineTension: 0.1,
                backgroundColor: [
                  'rgba(255,102,0,0.8)',
                  'rgba(102,255,102,0.8)',
                  'rgba(51,153,153,0.8)',
                  'rgba(153,0,0,0.8)'
                ],
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [allCountryTotal, allCountryTotalRecoveries, allCountryTotalActiveCases, allCountryTotalDeaths]
              }
            ]
          };
        return(
                <Bar
                data={data}
                />
        )
    }

}
export default Chart;