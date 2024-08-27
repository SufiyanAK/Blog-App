import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authServices from '../../appwriteServices/auth'
import { Button } from '@mui/material'

const LogoutBtn = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        authServices.userLogout()
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <>
            <Button
                onClick={handleLogout}
                sx={{
                    display: 'inline-block',
                    px: '1.5rem',
                    py: '0.5rem',
                    transition: '0.2s linear',
                    borderRadius: '2rem',
                    '&:hover': {
                        backgroundColor: '#42a5f5'
                    }
                }}>
                Logout
            </Button>
        </>
    )
}

export default LogoutBtn