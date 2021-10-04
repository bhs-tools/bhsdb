import React from 'react';
import StudentName from '../helpers/studentName';
import Period from '../helpers/Period'
import Spinner from '../spinner'
import { Typography } from '@mui/material';
export default class Dashboard extends React.Component {
    
    render() {
        return (
            <Typography variant="body1">
                Hello <StudentName />!<br />
                Periods:
                <ol>
                    <li><Period /></li>
                    <li><Period period={2} /></li>
                    <li><Period period={3}/></li>
                    <li><Period period={4}/></li>
                    <li><Period period={5}/></li>
                </ol>
                <p> spinners! <Spinner /> <Spinner /> <Spinner /> spin! </p>
            </Typography>
        )
    }
}
