import { Button } from '@mui/material'
import React from 'react'

export const Botton = ({ children, backgroundColor = '#e63946', type = 'button', color = 'white', ...props }) => {
    return (
        <>
            <Button
                type={type}
                sx={{ backgroundColor: { backgroundColor }, color: { color } }}>
                {children}
            </Button>
        </>
    )
}