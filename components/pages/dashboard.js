import React from 'react';
import StudentName from '../helpers/studentName';
import Period from '../helpers/Period'
export default class Dashboard extends React.Component {
    
    render() {
        return (
            <div>
                Hello <StudentName />!<br />
                Periods:
                <ol>
                    <li>1. <Period /></li>
                    <li>2. <Period period={2} /></li>
                    <li>3. <Period period={3}/></li>
                    <li>4. <Period period={4}/></li>
                    <li>5. <Period period={5}/></li>
                </ol>
            </div>
        )
    }
}