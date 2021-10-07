import React from 'react'
import { Card, Box, CardContent, Typography } from '@mui/material'
class GradeBar extends React.Component {
    render() {
        console.log("gamer")
        return (
            <React.Fragment>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            CLASS NAME
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            PERIOD
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            </React.Fragment>
        )
    }
}
export default GradeBar