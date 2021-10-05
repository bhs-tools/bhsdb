import React from 'react'
import { get_student_info } from '../lib/clientvue'
import { Avatar, Typography, Skeleton } from '@mui/material';
import { UserContext } from '../lib/contexts';
export default class UserInfo extends React.Component {
    static contextType = UserContext;
    render() {
        const { student_info, isLoading, isError } = get_student_info(this.context)
        if (this.props.loggedIn) {
            if ( isLoading || isError ) {
                return <Skeleton variant="circular"><Avatar /></Skeleton>
            }
            return (
                    <React.Fragment>
                        <Avatar alt="pfp" src={"data:image/png;base64,"+ student_info.Photo}/>
                        <Typography sx={{ marginLeft: "1em" }}>{ student_info.FormattedName }</Typography>
                    </React.Fragment>
                )
        } else {
            return ""
        }
        
    }
}