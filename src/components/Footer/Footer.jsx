import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const icons = [
    {
        icon: <FacebookIcon />
    },
    {
        icon: <InstagramIcon />
    },
    {
        icon: <LinkedInIcon />
    },
    {
        icon: <XIcon />
    }
];

const Footer = () => {
    return (
        <Box sx={{ position: 'fixed', bottom: 0 }}>
            <Typography variant="h4">Sufiyan.</Typography>
            <Stack direction="row" spacing={2}>
                {icons.map(({ icon }, index) => (
                    <Box key={index}>
                        {icon}
                    </Box>
                ))}
            </Stack>
            <Typography variant="body2">© 2024 Sufiyan. All rights reserved.</Typography>
        </Box>
    );
}

export default Footer;
