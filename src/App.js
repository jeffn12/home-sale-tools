import React from 'react';
// Components
import DetailInput from './components/DetailInput';
// Material-UI
import { Box, Typography } from '@material-ui/core';

function App() {
  return (
    <Box className="App" m={2}>
      <Typography variant="h4" align="center">
        Home Sale Cost Estimator
      </Typography>
      <DetailInput />
    </Box>
  );
}

export default App;
