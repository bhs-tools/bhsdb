import React from 'react';
import Login from './pages/login'
import Header from './Header'
import Dashboard from './pages/dashboard'
import { verify, api_grabber } from '../lib/clientvue';
import { UserContext } from '../lib/contexts';
import { Box } from '@mui/system';

const loading = {loading: true,error: false,data: {}}
export default class BHSDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, username:"",password:"", content:{get_student_info: loading,get_schedule:loading, get_gradebook:loading,get_school_info:loading}, page:""};
      }
    login(username,password) {
        // do login things
        verify(username,password).then((isValid) => {
            if (isValid) {
                this.setState({loggedIn: true, username, password, page:"dashboard"},this.get_content.bind(this))
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
               get_student_info: loading,
               get_schedule: loading,
               get_gradebook: loading,
               get_school_info: loading
           }
       })
       // fetch all studentvue content here
       console.log("in gamer get_content")
       api_grabber("get_student_info",this.state.username,this.state.password).then((js) => {
        this.update_content("get_student_info",js)
        })
        api_grabber("get_schedule",this.state.username,this.state.password).then((js) => {
            this.update_content("get_schedule",js)
        })
        api_grabber("get_gradebook",this.state.username,this.state.password).then((js) => {
            this.update_content("get_gradebook",js)
        })
        api_grabber("get_school_info",this.state.username,this.state.password).then((js) => {
            this.update_content("get_school_info",js)
        })
    }
    update_content(contenttype,content) {
        var oldobj = this.state.content
        oldobj[contenttype] = {
            loading: false,
            error: false,
            data: content
        }
        this.setState({content:oldobj}) // todo: this is prob a bad idea
    }
    render() {
        if (!this.state.loggedIn) {
            var page = <Login login={this.login.bind(this)}/>
        } else {
            switch (this.state.page) {
                case "dashboard":
                    var page = <Dashboard />
                    break;
            }
            
        }
        return (
            <div>
                <Header loggedIn={this.state.loggedIn}/>
                <UserContext.Provider value={this.state.content}>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                    { page }
                </Box>
                </UserContext.Provider>
            </div>
        )
    }
}