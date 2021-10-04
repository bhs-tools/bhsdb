import React from 'react';
import StudentName from '../helpers/studentName';

export default class Dashboard extends React.Component {
    
    render() {
        return (
            <div>
                Hello <StudentName />!
            </div>
        )
    }
}