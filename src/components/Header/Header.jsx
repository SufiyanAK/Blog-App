import React from 'react';
import { useSelector } from 'react-redux';
import { authStatus } from '../../store/authSlice';
import { Container, LogoutBtn } from '../index';
import { NavLink } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

const Header = () => {
    const loginStatus = useSelector(authStatus);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !loginStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !loginStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: loginStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: loginStatus,
        },
    ];

    return (
        <Box sx={{ position: 'fixed', top: 0, py: '.75rem', boxShadow: 2, backgroundColor: '#003049' }}>
            <Container>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" color="white">SuBlog</Typography>
                    <Stack direction="row" spacing={2}>
                        {navItems.map(({ name, slug, active }, index) =>
                            active && (
                                <NavLink
                                    to={slug}
                                    key={index}
                                    style={({ isActive }) => ({
                                        color: isActive ? "blue" : "white",
                                        textDecoration: "none",
                                    })}
                                >
                                    {name}
                                </NavLink>
                            )
                        )}
                        {loginStatus && <LogoutBtn />}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;
