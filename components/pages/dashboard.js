import React from 'react';
import StudentName from '../helpers/studentName';
import Period from '../helpers/Period'
import Spinner from '../spinner'
import { Typography } from '@mui/material';
import Schoolname from '../helpers/schoolname';
export default class Dashboard extends React.Component {
    
    render() {
        return (
            <Typography variant="body1">
                Hello <StudentName />!<br />
                Periods:
                <ol>
                    <li><Period period={1} /></li>
                    <li><Period period={2} /></li>
                    <li><Period period={3}/></li>
                    <li><Period period={4}/></li>
                    <li><Period period={5}/></li>
                    <li><Period period={6}/></li>
                </ol>
                <p> spinners! <Spinner /> <Spinner /> <Spinner /> spin! </p>
                <p>You go to <Schoolname />!</p>
            </Typography>
        )
    }
}
