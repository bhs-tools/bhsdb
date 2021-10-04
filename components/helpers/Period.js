import { get_schedule } from '../../lib/clientvue'
import Spinner from '../spinner'
import { UserContext } from '../../lib/contexts';
import React from 'react';
export default class Period extends React.Component {
    static contextType = UserContext;
    render() {
    var { schedule, isLoading, isError } = get_schedule(this.context)
    if (isLoading) return <Spinner />
    if (isError) return <div>Error!</div>
    if (this.props.period === undefined) {
        var period = 1
    } else {
        var period = this.props.period
    }
    var perioddata = schedule.content.ClassLists.ClassListing[period-1]
    return (
        <span>{ perioddata.CourseTitle } in room { perioddata.RoomName }</span>
    )
    }
}
