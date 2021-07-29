import React from 'react';

import CountUp from 'react-countup';
import cx from 'classnames';
import classes from '../../assets/css/cards/cards.module.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

const Cards = (props) =>{

    let updateDate = new Date(props.data.lastUpdate).toDateString();

    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.activeCases)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active Cases </Typography>
                        {props.data.confirmed && 
                            <Typography variant="h5">
                                <CountUp 
                                    start={0}
                                    end={props.data.confirmed.value}
                                    duration={2}
                                    separator=","
                                />
                            </Typography>}
                        <Typography color="textSecondary">{updateDate} </Typography>
                        <Typography variant="body2">Number of active cased of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>People Recovered </Typography>
                        {props.data.recovered && 
                            <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={props.data.recovered.value}
                                duration={2}
                                separator=","
                            />
                        </Typography>}
                        <Typography color="textSecondary">{updateDate}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Deaths </Typography>
                        {props.data.deaths && 
                            <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={props.data.deaths.value}
                                duration={2}
                                separator=","
                            />
                            </Typography>}
                        <Typography color="textSecondary">{updateDate} </Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards; 