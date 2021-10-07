import React from 'react'
import { Card, Box, CardContent, Typography } from '@mui/material'
import { UserContext } from '../lib/contexts'
import { get_gradebook } from '../lib/clientvue'
import Spinner from './spinner'
export default class GradeBar extends React.Component {
    static contextType = UserContext;
    render() {
        console.log("gamer")
        const { gradebook, isLoading, isError } = get_gradebook(this.context)
        if (isLoading || isError) {
            return <Spinner />
        }
        var period = this.props.period-1
        var gradedata = gradebook.Courses.Course[period]
        var marks = gradedata.Marks.Mark
        return (
            <React.Fragment>
            <Card variant="outlined" raised={true} sx={{ display: 'flex'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', 'minWidth': '33%' }}>
                    <CardContent sx={{ flex: '1 0 auto', 'minWidth': "33%" }}>
                        <Typography component="div" variant="h5">
                            { gradedata.Title }
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Period { period+1 }
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', 'minWidth': '33%' }}>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', 'minWidth': '33%' }}>
                    <CardContent sx={{ flex: '1 0 auto', 'minWidth': "33%" }}>
                        <Typography component="div" variant="h5">
                            { marks.CalculatedScoreString }
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            ({ marks.CalculatedScoreRaw }%)
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            </React.Fragment>
        )
    }
}