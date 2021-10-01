import React from 'react';
import Login from './pages/login'
export default class BHSDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, data: {}, page:""};
      }
    login(username,password) {
        // do login things
        this.setState({loggedIn: true})
    }
    logout() {
        this.setState({loggedIn: false, data:{}, page:""})
    }    
    render() {
        if (!this.state.loggedIn) {
            return <Login login={this.login.bind(this)} />
        }
        return (
            <div> Placeholder </div>
        )
    }
}