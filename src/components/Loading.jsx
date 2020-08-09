import React from 'react';
import { Spinner } from 'react-bootstrap';
import {  Typography } from '@material-ui/core';
import {TiNews} from 'react-icons/ti';
import Skeleton from '@material-ui/lab/Skeleton';

const Loading = () => {
    return(
            <div className="Loading-Container-News-Header">
                    <div className="Loading-News-Header">
                        <Typography variant="h5">
                        <TiNews /> PH trending topics
                        </Typography>
                    </div>
                    <div className="Loading-Container-News">
                        <div className="Spinners">
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="light" />
                        <Spinner animation="grow" variant="dark" />
                        </div>
                        <div className="Linear-Loading">
                            <Skeleton variant="circle" width={40} height={40} />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton variant="circle" width={40} height={40} />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
            </div>
    )
}
export default Loading;
