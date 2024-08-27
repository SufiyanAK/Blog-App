import { TextField } from '@mui/material'
import React, { forwardRef, useId } from 'react'

const SelectButton = ({ options, label, ...props }, ref) => {
    const id = useId();
    return (
        <>
            <TextField
                select
                size='small'
                id={id}
                ref={ref}
                label={label}
                {...props}
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            style: {
                                maxHeight: 180,
                                overflowY: 'auto',
                            },
                        },
                    },
                }}
            >
                {options?.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

        </>
    )
}

export default forwardRef(SelectButton)