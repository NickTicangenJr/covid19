import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Loading = () => {
    return(
            <div className="Table-Loading">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th style={{color:"white"}}>
                            Country <FaArrowAltCircleUp /></th>
                        <th style={{color:"white"}}>
                            Total Cases <FaArrowAltCircleUp /></th>
                        <th style={{color:"white"}}>
                            Total Deaths <FaArrowAltCircleUp /></th>
                        <th style={{color:"white"}}>
                            Total Recoveries <FaArrowAltCircleUp /></th>
                        <th style={{color:"white"}}>
                            Active Cases <FaArrowAltCircleUp /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
    )
}
export default Loading;