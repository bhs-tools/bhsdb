import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
export default class PageNav extends React.Component {
    render() {
        if (this.props.loggedIn) {
            return (
                <BottomNavigation
                    showLabels
                    value={this.props.selected}
                    onChange={(event, newValue) => {
                        this.props.setpage(newValue)
                    }}
                    sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                        <BottomNavigationAction label="Grades" icon={<BookIcon />} value="grades"/>
                        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} value="dashboard"/>
                        <BottomNavigationAction label="Messages" icon={<ChatIcon />} value="messages"/>
                        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} value="settings"/>
                </BottomNavigation>
            )
        } else {
            return ""
        }
    }
}