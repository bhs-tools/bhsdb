import { get_student_info } from '../../lib/clientvue'
import Spinner from '../spinner'
import { UserContext } from '../../lib/contexts';
import React from 'react';
export default class StudentName extends React.Component {
    static contextType = UserContext;
    render() {
    console.log("render!")
    console.log(this.context)
    var { student_info, isLoading, isError } = get_student_info(this.context)
    if (isLoading) return <Spinner />
    if (isError) return <div>Error!</div>
    return (
        <span>{ student_info.content.FormattedName }</span>
    )
    }
}

