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
      <Box width={1}>
        <Typography align="center" variant="subtitle1">
          DISCLAIMER:
        </Typography>
        <Typography align="center" variant="subtitle2">
          This is for informational purposes only!
        </Typography>
        <Typography align="center" variant="subtitle2">
          Consult a Real Estate professional for help!
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
