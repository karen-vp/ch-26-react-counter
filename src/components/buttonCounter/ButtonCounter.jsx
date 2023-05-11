import ButtonMui from '@mui/material/Button';
import React from 'react';

export const ButtonCounter = ({ children, setCounter, newValue, startIcon }) => {

    return (
        <>
            <ButtonMui variant="contained" startIcon={startIcon} onClick={() => setCounter(newValue)}>
                {children}
            </ButtonMui>
        </>
    )
}
