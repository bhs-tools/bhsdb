import { get_schedule, get_gradebook } from '../../lib/clientvue'
import Spinner from '../spinner'
import { UserContext } from '../../lib/contexts';
import React from 'react';
export default class Period extends React.Component {
    static contextType = UserContext;
    render() {
    var { schedule, isLoading, isError } = get_schedule(this.context)
    var isLoadingg = isLoading
    var isErrorg = isError //TODO: make this not garbage, maybe a get_multiple func which takes in get_schedule and get_gradebook and does this automatically?
    var { gradebook, isLoading, isError } = get_gradebook(this.context)
    if (isLoading || isLoadingg) return <Spinner />
    if (isError || isErrorg) return <div>Error!</div>
    if (this.props.period === undefined) {
        var period = 1
    } else {
        var period = this.props.period
    }
    /*console.log("in render for Period()")
    console.log(schedule)
    console.log(gradebook)*/
    var perioddata = schedule.ClassLists.ClassListing[period-1]
    var gradedata = gradebook.Courses.Course[period-1]
    return (
        <span>{ perioddata.CourseTitle } in room { perioddata.RoomName }</span>
    )
    }
}
