import React, { useEffect, useState } from 'react'
import { env } from './envImports/envVariables'
import { useDispatch } from 'react-redux';
import authServices from './appwriteServices/auth'
import { login, logout } from './store/authSlice';
import { Box, colors, Typography } from '@mui/material';
import { Footer, Header } from './components';

const App = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getUser()
      .then((data) => {
        if (data) {
          dispatch(login(data))
          return;
        }
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, []);

  return loading ? (
    <>
      <Box>
        <Header />
        <Footer />
      </Box>
    </>
  ) : <Typography>Logout</Typography>
}

export default App