import { Box } from '@mui/material'
import React from 'react'

const Container = ({ children }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: '80rem', mx: 'auto', px: '1rem' }}>
            {children}
        </Box>
    )
}

export default Container