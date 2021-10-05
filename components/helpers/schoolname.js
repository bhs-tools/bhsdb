import { get_school_info } from '../../lib/clientvue'
import Spinner from '../spinner'
import { UserContext } from '../../lib/contexts';
import React from 'react';
export default class Schoolname extends React.Component {
    static contextType = UserContext;
    render() {
    var { school_info, isLoading, isError } = get_school_info(this.context)
    if (isLoading) return <Spinner />
    if (isError) return <div>Error!</div>
    return (
        <span>{ school_info.School }</span>
    )
    }
}
