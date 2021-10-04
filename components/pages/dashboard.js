import React from 'react';
import StudentName from '../helpers/studentName';
import { UserContext } from '../BHSDB';
export default class Dashboard extends React.Component {
    static contextType = UserContext;
    render() {
        return (
            <div>
                Hello <StudentName context={this.context} />!
            </div>
        )
    }
}