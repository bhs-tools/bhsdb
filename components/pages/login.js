import React from 'react';
import Button from '@mui/material/Button';
import { TextField, Typography, Grid } from '@mui/material';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }
    handleUsernameChange(evt) {
        this.setState({ username: evt.target.value });
    }
    handlePasswordChange(evt) {
        this.setState({ password: evt.target.value });
    }
    handleLogin() {
        this.props.login(this.state.username, this.state.password);
    }
    render() {
        return (
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
                <Grid item>    
                    <Typography variant="h3">Login</Typography><br />
                </Grid> 
                <Grid item>
                    <TextField id="username" autoComplete="off" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} /><br /><br />
                    <TextField type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} /><br /><br />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={this.handleLogin.bind(this)}> Login </Button> 
                </Grid> 
            </Grid>
        )
    }
}