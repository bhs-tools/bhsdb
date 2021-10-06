import { FormControlLabel, Switch } from '@mui/material'
export default function ToggleSetting(props) {
    return (
        <FormControlLabel checked={props.checked} onChange={(evt) => props.handleChange(evt,props.id)} control={<Switch />} label={props.label} />
    )
}