import React, { Component } from 'react';
import CountUp from 'react-countup';
import { FaArrowAltCircleUp } from 'react-icons/fa';

class CountryTable extends Component {
    render() { 
        const {countries,
            onSortByTotal,
            onSortByCountryName,
            onSortByTotalDeaths,
            onSortByTotalRecoveries,
            onSortByTotalActiveCases
        } = this.props;
        return ( 
            <div>
                <div className="Scrollable">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr className="tr">
                        <th><a href="/" style={{color:"white"}} onClick={onSortByCountryName}>
                            Country <FaArrowAltCircleUp /></a></th>
                        <th><a href="/" style={{color:"white"}} onClick={onSortByTotal}>
                            Total Cases <FaArrowAltCircleUp /></a></th>
                        <th><a href="/" style={{color:"white"}} onClick={onSortByTotalDeaths}>
                            Total Deaths <FaArrowAltCircleUp /></a></th>
                        <th><a href="/" style={{color:"white"}} onClick={onSortByTotalRecoveries}>
                            Total Recoveries <FaArrowAltCircleUp /></a></th>
                        <th><a href="/" style={{color:"white"}} onClick={onSortByTotalActiveCases}>
                            Active Cases <FaArrowAltCircleUp /></a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map(country => (
                        <tr key={country.name}>

                            <td>{country.name}</td>
                            <td><CountUp start={0} end={country.total} duration={2.5} separator={","} /></td>
                            <td><CountUp start={0} end={country.totaldeaths} duration={2.5} separator={","} /></td>
                            <td><CountUp start={0} end={country.totalrecoveries} duration={2.5} separator={","} /></td>
                            <td><CountUp start={0} end={country.totalactivecases} duration={2.5} separator={","} /></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}
 
export default CountryTable;