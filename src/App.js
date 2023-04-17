import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


import { deepmerge } from '@mui/utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const theme = createTheme(deepmerge());

const App = () => (
    <GoogleOAuthProvider clientId={`741497810018-64s68mgu4lmc7t0nr84gd3aahspqkf69.apps.googleusercontent.com`}>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    </ThemeProvider>
    </GoogleOAuthProvider>
);

export default App;