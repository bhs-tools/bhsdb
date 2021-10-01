import React from 'react';
import Login from './pages/login'
import Header from './Header'
import Dashboard from './pages/dashboard'
import { verify } from '../lib/clientvue';
export default class BHSDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, username:"",password:"", page:""};
      }
    login(username,password) {
        // do login things
        verify(username,password).then((isValid) => {
            if (isValid) {
                this.setState({loggedIn: true, username, password, page:"dashboard"})
            } else {
                alert("Invalid username or password")
            }
        })
    }
    logout() {
        this.setState({loggedIn: false, data:{}, page:""})
    }    
    render() {
        if (!this.state.loggedIn) {
            var page = <Login login={this.login.bind(this)}/>
        } else {
            switch (this.state.page) {
                case "dashboard":
                    var page = <Dashboard username={this.state.username} password={this.state.password}/>
                    break;
                default:
                    var page = <div> 404? </div>
            }
            
        }
        return (
            <div>
                <Header loggedIn={this.state.loggedIn}/>
                <div id="content" className="flex flex-col items-center justify-center min-h-screen py-2">
                    { page }
                </div>
            </div>
        )
    }
}