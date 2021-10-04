import React from 'react';
import { AppBar, Toolbar, IconButton, MenuIcon, Typography } from '@mui/material';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <AppBar position="static">
                <Toolbar variant="dense"><Typography variant="h6" color="inherit" component="div">
                BHSDB
                </Typography></Toolbar>
            </AppBar>
        )
    }
}