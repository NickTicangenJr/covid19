import React, { Component } from 'react';
import axios from 'axios';
import CountryTable from './CountryTable';
import {Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import Chart from './Chart';
import TableLoading from './TableLoading';


class Covid extends Component {
    state = { 
        newsStatus: [],
        countries: [],
        articles: [],
        allCountryTotal: 0,
        allCountryTotalDeaths: 0,
        allCountryTotalRecoveries: 0,
        allCountryTotalActiveCases: 0
     }
    
    
    apiCovid = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv';
    async componentDidMount(){
            const responseCovid = await axios.get(this.apiCovid);
            const rows = responseCovid.data.split('\n');



            const countries = [];

            let allCountryTotal = 0;
            let allCountryTotalDeaths = 0;
            let allCountryTotalRecoveries = 0;
            let allCountryTotalActiveCases = 0;
            let allTimeUpdated;
            

            for(let i = 1; i < rows.length; i++){
                const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                const countryName = row[0].replace(/"/g, "");
                const total = Number(row[4]);
                const totalDeaths = Number(row[5]);
                const totalRecoveries = Number(row[6]);
                const totalActiveCases = Number(row[7]);
                const timeUpdated = new Date(row[1]).toLocaleDateString();

                if(countryName !== ""){
                    countries.push({
                        name: countryName,
                        total: total,
                        totaldeaths: totalDeaths,
                        totalrecoveries: totalRecoveries,
                        totalactivecases: totalActiveCases,
                        timeupdated: timeUpdated
                    });
                    allCountryTotal += total;
                    allCountryTotalDeaths += totalDeaths;
                    allCountryTotalRecoveries += totalRecoveries;
                    allCountryTotalActiveCases += totalActiveCases;
                    allTimeUpdated = timeUpdated;
                }
            }
            this.setState({
                countries: countries,
                allCountryTotal: allCountryTotal,
                allCountryTotalDeaths: allCountryTotalDeaths,
                allCountryTotalRecoveries: allCountryTotalRecoveries,
                allCountryTotalActiveCases: allCountryTotalActiveCases,
                allTimeUpdated: allTimeUpdated
            });
    }
// SORT==========SORT==========SORT==========SORT==========SORT==========SORT==========SORT==========
    
//Total cases====Total cases====Total cases====Total cases====Total cases====
    sortByTotal = (a, b) => {
        if(a.total < b.total) return 1;
        else if(a.total > b.total) return -1;
        else return 0;
    }
    handleOnSortByTotal = (event) => {
        event.preventDefault();
        const countries = [...this.state.countries];
        countries.sort(this.sortByTotal)
        this.setState({countries});
    }
//Total cases====Total cases====Total cases====Total cases====Total cases====

//Country name====Country name====Country name====Country name====Country name====
    sortByCountryName = (a, b) => {
        if(a.name < b.name) return -1;
        else if(a.name > b.name) return 1;
        else return 0;
    }
    handleOnSortByCountryName = (event) => {
        event.preventDefault();
        const countries = [...this.state.countries];
        countries.sort(this.sortByCountryName)
        this.setState({countries});
    }
//Country name====Country name====Country name====Country name====Country name====

//Total deaths====Total deaths====Total deaths====Total deaths====Total deaths====
    sortByTotalDeaths = (a, b) => {
        if(a.totaldeaths < b.totaldeaths) return 1;
        else if(a.totaldeaths > b.totaldeaths) return -1;
        else return 0;
    }
    handleOnSortByTotalDeaths = (event) => {
        event.preventDefault();
        const countries = [...this.state.countries];
        countries.sort(this.sortByTotalDeaths)
        this.setState({countries});
    }
//Total deaths====Total deaths====Total deaths====Total deaths====Total deaths====

//Total recoveries====Total recoveries====Total recoveries====Total recoveries====
    sortByTotalRecoveries = (a, b) => {
        if(a.totalrecoveries < b.totalrecoveries) return 1;
        else if(a.totalrecoveries > b.totalrecoveries) return -1;
        else return 0;
    }
    handleOnsortByTotalRecoveries = (event) => {
        event.preventDefault();
        const countries = [...this.state.countries];
        countries.sort(this.sortByTotalRecoveries)
        this.setState({countries});
    }
//Total recoveries====Total recoveries====Total recoveries====Total recoveries====

//Active cases====//Active cases====//Active cases====//Active cases====//Active cases====
    sortByActiveCases = (a, b) => {
        if(a.totalactivecases < b.totalactivecases) return 1;
        else if(a.totalactivecases > b.totalactivecases) return -1;
        else return 0;
    }
    handleOnsortByActiveCases = (event) => {
        event.preventDefault();
        const countries = [...this.state.countries];
        countries.sort(this.sortByActiveCases)
        this.setState({countries});
    }
//Active cases====//Active cases====//Active cases====//Active cases====//Active cases====

    // SORT==========SORT==========SORT==========SORT==========SORT==========SORT==========SORT==========



    render() { 
        const {countries,
            allCountryTotal,
            allCountryTotalDeaths,
            allCountryTotalRecoveries,
            allCountryTotalActiveCases,
            allTimeUpdated,
        } = this.state;
        return ( 
        <div className="Covid-Container">
            <div className="Container-CardandNews">
                        <div className="Container-Card">
                        <Card className="Card-Global">
                            <CardContent className="Card-Global-Content">
                                    <span className="Card-Header">INFECTED</span>
                                <Typography style={{fontWeight: 'bold', color: '#F6F6F6'}}>
                                    <h4>
                                        <CountUp start={0} end={allCountryTotal} duration={5} separator={","} />
                                    </h4>
                                    <hr style={{borderTop: "2px solid rgba(255,102,0,0.8)"}}/>
                                </Typography>
                            </CardContent>
                            <CardContent className="Card-Global-Content">
                                <span className="Card-Header">RECOVERED</span>
                                <Typography style={{fontWeight: 'bold', color: '#F6F6F6'}}>
                                    <h4>
                                        <CountUp start={0} end={allCountryTotalRecoveries} duration={5} separator={","} />
                                    </h4>
                                    <hr style={{borderTop: "2px solid rgba(102,255,102,0.8)"}}/>
                                </Typography>
                            </CardContent>
                            <CardContent className="Card-Global-Content">
                                <span className="Card-Header">ACTIVE CASES</span>
                                <Typography style={{fontWeight: 'bold', color: '#F6F6F6'}}>
                                    <h4>
                                        <CountUp start={0} end={allCountryTotalActiveCases} duration={5} separator={","} />
                                    </h4>
                                    <hr style={{borderTop: "2px solid rgba(51,153,153,0.8)"}}/>
                                </Typography>
                            </CardContent>
                            <CardContent className="Card-Global-Content">
                                <span className="Card-Header">DEATHS</span>
                                <Typography style={{fontWeight: 'bold', color: '#F6F6F6'}}>
                                    <h4>
                                        <CountUp start={0} end={allCountryTotalDeaths} duration={5} separator={","} />
                                    </h4>
                                    <hr style={{borderTop: "2px solid rgba(153,0,0,0.8)"}}/>
                                </Typography>
                            </CardContent>
                            <CardContent className="Card-Global-Content">
                                <Typography>
                                {
                                    allCountryTotal === 0 ?
                                    <span style={{ color: 'grey'}}>...</span> :
                                    <span style={{ color: 'grey'}} className="font-date">Last updated{": "+allTimeUpdated}</span>
                                }
                                </Typography>
                            </CardContent>
                        </Card>
                        </div>
                    
            </div>
                    <div className="Container-Chart">
                    <Chart
                            allCountryTotal={allCountryTotal}
                            allCountryTotalDeaths={allCountryTotalDeaths}
                            allCountryTotalRecoveries={allCountryTotalRecoveries}
                            allCountryTotalActiveCases={allCountryTotalActiveCases}
                    />
                    </div>
                    <div className="Table">
                    {
                        allCountryTotal === 0 ?
                        <TableLoading /> :
                        <CountryTable
                        countries={countries}
                        onSortByTotal={this.handleOnSortByTotal}
                        onSortByCountryName={this.handleOnSortByCountryName}
                        onSortByTotalDeaths={this.handleOnSortByTotalDeaths}
                        onSortByTotalRecoveries={this.handleOnsortByTotalRecoveries}
                        onSortByTotalActiveCases={this.handleOnsortByActiveCases} />
                    }
                    </div>
                    
                    
                       
                        

        </div>
        );
    }
}
 
export default Covid;
