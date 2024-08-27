import { TextField } from '@mui/material'
import React, { forwardRef, useId } from 'react'

const Input = forwardRef(({ label, type = 'text', ...props }, ref) => {
    const id = useId();
    return (
        <>
            <TextField
                id={id}
                ref={ref}
                type={type}
                size='small'
                label={label}
                {...props}
            />
        </>
    )
})

export default Input