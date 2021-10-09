import React from 'react'
import { get_student_info, is_refreshing } from '../lib/clientvue'
import { Avatar, Typography, Skeleton, IconButton } from '@mui/material';
import { UserContext } from '../lib/contexts';
import LoopIcon from '@mui/icons-material/Loop'
export default class UserInfo extends React.Component {
    static contextType = UserContext;
    refresh() {
        this.context.refresh()
    }
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
                        <IconButton color="secondary" className={ is_refreshing(this.context) ? "spin" : "" } aria-label="refresh" onClick={this.refresh.bind(this)}>
                            <LoopIcon />
                        </IconButton>
                    </React.Fragment>
                )
        } else {
            return ""
        }
        
    }
}