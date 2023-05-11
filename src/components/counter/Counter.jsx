import React, { useState } from 'react';
import { ButtonCounter } from '../buttonCounter/ButtonCounter';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ButtonGroup, Container, Grid, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';



export const Counter = ({ initialValue = 100, increment = 1, decrement = 1 }) => {

    const [count, setCounter] = useState(initialValue)
    return (
        <>
            <Container sx={{ border: 2, bgcolor: 'grey' }} maxWidth={'sm'}>

                <Grid sx={{m:0, bgcolor:'#111', color:'white'}} container spacing={2}>
                    <Grid md={8} xs={12}>
                        <Typography color={purple[700]} variant='h1' align='center'>Counter</Typography>
                    </Grid>
                    <Grid md={4} xs={12}>
                        <Typography color={purple[900]} variant='h2' align='center'>{count}</Typography>
                    </Grid>
                    <Grid md={12}>

                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <ButtonCounter startIcon={<AddCircleOutlineIcon />} setCounter={setCounter} newValue={count + increment}></ButtonCounter>
                            <ButtonCounter startIcon={<RemoveIcon />} setCounter={setCounter} newValue={count - decrement}></ButtonCounter>
                            <ButtonCounter startIcon={<RestartAltIcon />} setCounter={setCounter} newValue={initialValue}> Reset </ButtonCounter>
                        </ButtonGroup>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

