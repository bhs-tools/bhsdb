import React from 'react';
import TestStudentInfo from '../test-student-info';

export default class Dashboard extends React.Component {
    render() {
        return <TestStudentInfo username={this.props.username} password={this.props.password}/>
    }
}