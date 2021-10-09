import React from 'react';
import { Typography, Backdrop, CircularProgress, Button, TextField, Paper, Grid } from '@mui/material';
export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, url: "", connected: false, name: "", room: "", message: "", users: [], messages: [], connecting: false, ready: false};
    }
    componentDidMount() {
        this.setState({ loading: true }, () => {
            fetch("/api/chat/url").then(resp => resp.json()).then(data => {
                this.setState({ loading: false, url: data.url });
            })
        })
    }
    button() {
        if (this.state.connected) {
            this.state.socket.close();
            this.setState({ connected: false });
        }
        else {
            this.connect(this.state.room,this.state.name)
        }
    }
    connect(room,name) {
        var creds = this.props.username + "@" + this.props.password;
        var socket = new WebSocket(this.state.url);
        this.setState({ socket: socket, connecting: true }, () => {
            console.log("Connecting to " + this.state.url);
            socket.onmessage = (event) => {
                var data = event.data
                console.log(data);
                if (data == "CRED") {
                    socket.send(creds);
                }
                else if (data == "NAME") {
                    socket.send(name);
                }
                else if (data == "ROOM") {
                    socket.send(room);
                    this.setState({ connecting: false, ready: true });
                } 
                else if (data == "NAME_FAIL") {
                    alert("Name/Room name rejected.");
                }
                else if (data.startsWith("{")) {
                    data = JSON.parse(data)
                    if (data.type == "message") {
                        this.setState({ messages: [...this.state.messages, "USER: MESSAGE".replace("MESSAGE",data.message).replace("USER",data.user) ]})
                    }
                    else if (data.type == "join") {
                        this.setState({ messages: [...this.state.messages, "User {} has joined.".replace("{}",data.user)] })
                    }
                    else if (data.type == "leave") {
                        this.setState({ messages: [...this.state.messages, "User {} left joined.".replace("{}",data.user)] })
                    }
                    else if (data.type == "list") {
                        this.setState({ messages: [...this.state.messages, "Currently connected users: " + data.people.join(",")] })
                    }
                }
            }
            socket.onopen = (ev) => {
                console.log("Connected to " + this.state.url);
                this.setState({ connected: true })
            }
            socket.onclose = (event) => {
                this.setState({ connected: false, messages: [], users: [] });
            }
        });     
    }
    onChange(evt) {
        //console.log(evt)
        this.setState({ [evt.target.id]: evt.target.value })
    }
    send_message() {
        if (this.state.message.length > 0) {
            this.state.socket.send(this.state.message);
            this.setState({ message: "" })
        }
    }
    render() {
        return (
            <Typography variant="body1">
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={this.state.loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
                <Grid item>    
                    <TextField id="room" disabled={ this.state.connected || this.state.connecting } autoComplete="off" placeholder="Room" value={this.state.room} onChange={this.onChange.bind(this)} />
                    <TextField id="name" disabled={ this.state.connected || this.state.connecting } autoComplete="off" placeholder="Name" value={this.state.name} onChange={this.onChange.bind(this)} />
                    <Button variant="contained" onClick={this.button.bind(this)} disabled={this.state.connecting } sx = {{ height: "100%" }}>{ this.state.connected ? "Disconnect" : "Connect" }</Button>
                    <br />
                </Grid> 
                <Grid item>
                    <br />
                    <Typography>{ this.state.connected ? "Room " + this.state.room : ""}</Typography>
                </Grid> 
                <Grid item>
                <br />
                <Paper elevation={5} sx = {{width:"100vh", height:"60vh"}}>
                    <br />
                    { this.state.messages.map((message,index) => { 
                        return <Typography sx = {{"margin-left":"1em"}} key={index}>{message}</Typography>
                    })}
                </Paper>
                </Grid>
                <Grid item>
                <TextField id="message" disabled={ !this.state.connected || this.state.connecting } autoComplete="off" sx = {{ width:"100vh" }} placeholder="Message" value={this.state.message} onChange={this.onChange.bind(this)} />
                <Button variant="contained" onClick= {this.send_message.bind(this)} disabled={ !this.state.connected || this.state.connecting } >Send</Button>
                </Grid> 
                </Grid>
            </Typography>
        )
    }
}