import React from "react"
import { Typography, FormGroup } from "@mui/material"
import ToggleSetting from "../settings/togglesetting"
export default class SettingsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.defaultsettings
    }
    changeSettingToggle(evt,set) {
        //console.log(evt)
        //console.log(set)
        //console.log(evt.target.checked)
        this.setState({[set]: evt.target.checked}, () => {
            this.props.setSettings(this.state)
        })   
    }
    render() {
        return (
            <Typography variant="body1">
                BHSDB V0.1 <br />
                <FormGroup>
                    <ToggleSetting checked={this.state.testsetting} handleChange={this.changeSettingToggle.bind(this)} label="Test setting (does nothing)" id="testsetting"/>
                    <ToggleSetting checked={this.state.testsetting2} handleChange={this.changeSettingToggle.bind(this)} label="Test setting 2 (does nothing)" id="testsetting2"/>
                </FormGroup>
            </Typography>
        )
    }
}