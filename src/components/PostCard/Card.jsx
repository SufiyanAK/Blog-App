import React from 'react'
import databaseServices from '../../appwriteServices/database'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'

const Card = ({ $id, title, featureImage }) => {
    return (
        <>
            <Link to={`/post/${$id}`}>
                <Box sx={{ width: '100%', backgroundColor: '#f1faee', borderRadius: 4, p: 3 }}>
                    <Stack direction='row' sx={{ justifyContent: 'center', mb: 3, width: '100%' }}>
                        <img src={databaseServices.getFilePreview(featureImage)} alt={title} />
                    </Stack>
                    <Typography variant='h2'
                        sx={{ fontSize: '1.6rem', color: '#1d3557' }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Link>
        </>
    )
}

export default Card