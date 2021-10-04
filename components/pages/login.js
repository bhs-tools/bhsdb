import React from 'react';
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
            <div>
                <h1 className="font-bold text-center m-1">Login</h1>
                <input className="border w-full m-1" id="username" autoComplete="off" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}></input><br />
                <input className="border w-full m-1" type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}></input><br />
                <button className="w-full border-2 m-1 text-center" onClick={this.handleLogin.bind(this)}> Login </button> 
            </div>
        )
    }
}