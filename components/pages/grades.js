import React from 'react'
import { GradeBar } from '../GradeBar'
import { Grid, Paper, Box, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class GradesPage extends React.Component {
    render() {
        console.log("oh god gradespage")
        return (
            <Box>
            <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <Item><GradeBar period={1} /></Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item><GradeBar period={2} /></Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item><GradeBar period={3} /></Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item><GradeBar period={4} /></Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item><GradeBar period={5} /></Item>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}