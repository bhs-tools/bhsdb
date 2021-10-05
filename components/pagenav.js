import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
export default class PageNav extends React.Component {
    render() {
        if (this.props.loggedIn) {
            return (
                <BottomNavigation
                    showLabels
                    value={this.props.selected}
                    onChange={(event, newValue) => {
                        this.props.setpage(newValue)
                    }}>
                        <BottomNavigationAction label="Grades" icon={<BookIcon />} value="grades"/>
                        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} value="dashboard"/>
                        <BottomNavigationAction label="Messages" icon={<ChatIcon />} value="messages"/>
                </BottomNavigation>
            )
        } else {
            return ""
        }
    }
}