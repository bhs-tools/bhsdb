import React from 'react';
export default class Login extends React.Component {
    render() {
        return (
            <div> <button className="border-2" onClick={this.props.login}> Login Placeholder, Click Here! </button> </div>
        )
    }
}