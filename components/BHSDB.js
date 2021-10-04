import React from 'react';
import Login from './pages/login'
import Header from './Header'
import Dashboard from './pages/dashboard'
import { verify } from '../lib/clientvue';
import { UserContext } from '../lib/contexts';
export default class BHSDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, username:"",password:"", data:{}, page:""};
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
        this.setState({loggedIn: false, username:"", password:"", content: {}, page:""}) 
    }
    get_content() {
       this.setState({
           content: {
               get_student_info: {
                   loading: true,
                   error: false,
                   data: {}
               }
           }
       })
       // fetch all studentvue content here
    }
    render() {
        if (!this.state.loggedIn) {
            var page = <Login login={this.login.bind(this)}/>
        } else {
            switch (this.state.page) {
                case "dashboard":
                    var Thispage = <Dashboard />
                    break;
            }
            
        }
        return (
            <div>
                <Header loggedIn={this.state.loggedIn}/>
                <UserContext.Provider value={this.state.content}>
                <div id="content" className="flex flex-col items-center justify-center min-h-screen py-2">
                    { page }
                </div>
                </UserContext.Provider>
            </div>
        )
    }
}