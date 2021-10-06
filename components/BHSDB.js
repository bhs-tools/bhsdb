import React from 'react';
import Login from './pages/login'
import Header from './Header'
import Dashboard from './pages/dashboard'
import CookiesRaw from 'js-cookie';
import { verify, api_grabber } from '../lib/clientvue';
import { UserContext } from '../lib/contexts';
import { Box, CircularProgress, Backdrop } from '@mui/material';
import PageNav from './pagenav';
import NotFound from './pages/notfound';
import SettingsPage from './pages/settings';
const loading = {loading: true,error: false,data: {}}
const defaultsettings = {testsetting: false, testsetting2: true}
const Cookies = CookiesRaw.withAttributes({ secure: true, expires: 7 })
export default class BHSDB extends React.Component {
    constructor(props) {
        super(props);
        Cookies.set("bhsdb","1")
        this.state = {settings:defaultsettings, loggingIn: false, loggedIn: false, username:"",password:"", content:{get_student_info: loading,get_schedule:loading, get_gradebook:loading,get_school_info:loading, refresh: this.get_content.bind(this)}, page:""};
        
      }
    login(username,password) {
        // do login things
        this.setState({"loggingIn": true}, () => {
            verify(username,password).then((isValid) => {
                if (isValid) {
                    this.setState({loggedIn: true, username, password, page:"dashboard"},this.get_content.bind(this))
                    Cookies.set("username",username, { expires: 7 })
                    Cookies.set("password", password, { expires: 7 })
                } else {
                    alert("Invalid username or password") // who uses alerts in 2021?
                }
                this.setState({loggingIn: false})
            })
        })   
    }
    logout() {
        this.setState({loggedIn: false, username:"", password:"", content: {}, page:""}) 
        Cookies.delete("username")
        Cookies.delete("password")
        Cookies.delete("settings")
    }
    get_content() {
       /*this.setState({
           content: {
               get_student_info: loading,
               get_schedule: loading,
               get_gradebook: loading,
               get_school_info: loading
           }
       })*/
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
        var err = false
        if (content.code == "ERROR") {
            err = true
        }
        oldobj[contenttype] = {
            loading: false,
            error: err,
            data: content.content
        }
        this.setState({content:oldobj}) // todo: this is prob a bad idea
    }
    setpage(newpage) {
        this.setState({page:newpage})
    }
    setSettings(x) {
        this.setState({settings: x})
        Cookies.set("settings",JSON.stringify(x))
    }
    componentDidMount() {
        console.log("Setup refresh")
        this.refreshtimer = setInterval(() => {
            if (this.state.loggedIn) {
                console.log("Refreshing...")
                this.get_content()
            }
        },1*60*1000) // 5 minutes
        if (Cookies.get("settings") != undefined) {
            console.log("loading settings")
            this.setSettings(JSON.parse(Cookies.get("settings")))
        }
        var username = Cookies.get("username")
        var password = Cookies.get("password")
        if (username != undefined && password != undefined) {
            this.login(username,password)
        }
    }
    componentWillUnmount() {
        console.log("Stopping refresh")
        clearInterval(this.refreshtimer)
    }
    render() {
        if (!this.state.loggedIn) {
            var page = <Login login={this.login.bind(this)}/>
        } else {
            switch (this.state.page) {
                case "dashboard":
                    var page = <Dashboard />
                    break;
                case "settings":
                    var page = <SettingsPage setSettings={this.setSettings.bind(this)} defaultsettings={this.state.settings}/>
                    break;
                default:
                    var page = <NotFound />
            }
            
        }
        return (
            <UserContext.Provider value={this.state.content}>
                <div style={{"minHeight": "100vh"}}>
                    <Header loggedIn={this.state.loggedIn}/>
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={this.state.loggingIn}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        { page }     
                    </Box>
                    <PageNav loggedIn={this.state.loggedIn} selected={this.state.page} setpage={this.setpage.bind(this)}/> 
                </div>
            </UserContext.Provider>
            
        )
    }
}
