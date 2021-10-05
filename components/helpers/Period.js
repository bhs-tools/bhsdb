import { get_schedule, get_gradebook } from '../../lib/clientvue'
import Spinner from '../spinner'
import { UserContext } from '../../lib/contexts';
import React from 'react';
export default class Period extends React.Component {
    static contextType = UserContext;
    render() {
    var { schedule, isLoading, isError } = get_schedule(this.context)
    var { gradebook, isLoadingg, isErrorg } = get_gradebook(this.context)
    if (isLoading || isLoadingg) return <Spinner />
    if (isError || isErrorg) return <div>Error!</div>
    if (this.props.period === undefined) {
        var period = 1
    } else {
        var period = this.props.period
    }
    var perioddata = schedule.ClassLists.ClassListing[period-1]
    var gradedata = gradebook.Courses.Course[period-1]
    return (
        <span>{ perioddata.CourseTitle } in room { perioddata.RoomName } with grade { gradedata.Marks.Mark.CalculatedScoreString } ({ gradedata.Marks.Mark.CalculatedScoreRaw }%)</span>
    )
    }
}
