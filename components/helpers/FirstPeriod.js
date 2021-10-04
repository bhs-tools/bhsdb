import { get_schedule } from '../../lib/clientvue'
import Spinner from '../spinner'
import { UserContext } from '../../lib/contexts';
import React from 'react';
export default class FirstPeriod extends React.Component {
    static contextType = UserContext;
    render() {
    var { schedule, isLoading, isError } = get_schedule(this.context)
    if (isLoading) return <Spinner />
    if (isError) return <div>Error!</div>
    return (
        <span>{ schedule.content.ClassLists.ClassListing[0].CourseTitle }</span>
    )
    }
}
