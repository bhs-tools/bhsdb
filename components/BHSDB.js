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
                alert("Invalid username or password") // who uses alerts in 2021?
            }
        })
    }
    logout() {
        this.setState({loggedIn: false, username:"", password:"", page:""}) 
    }    
    render() {
        if (!this.state.loggedIn) {
            var page = <Login login={this.login.bind(this)}/>
        } else {
            switch (this.state.page) {
                case "dashboard":
                    var Thispage = Dashboard
                    break;
            }
            page = <Thispage username={this.state.username} password={this.state.password} /> // there is prob a better way to do this
            
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