import React from 'react';
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Avatar } from '@mui/material';
import UserInfo from './userinfo'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <React.Fragment>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                BHSDB
                </Typography>
                <UserInfo loggedIn={this.props.loggedIn}/>
                </Toolbar>
            </AppBar>
            </React.Fragment>

        )
    }
}