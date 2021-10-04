import React from 'react';
import StudentName from '../helpers/studentName';
import FirstPeriod from '../helpers/FirstPeriod'
export default class Dashboard extends React.Component {
    
    render() {
        return (
            <div>
                Hello <StudentName />!<br />
                Your first period is <FirstPeriod />
            </div>
        )
    }
}