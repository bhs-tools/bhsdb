import React from 'react'
import GradeBar  from '../GradeBar'
import { Grid, Paper, Box, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

export default class GradesPage extends React.Component {
    render() {
        console.log("oh god gradespage")
        return (
            <Box>
            <Grid container sx={{ textAlign: "center" }} spacing={2}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <GradeBar period={1} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <GradeBar period={2} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <GradeBar period={3} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <GradeBar period={4} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <GradeBar period={5} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <GradeBar period={6} />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Box>
        )
    }
}