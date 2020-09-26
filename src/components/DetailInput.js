import React, { useState } from 'react';
// Material-UI
import { Box, Slider, Typography } from '@material-ui/core';

const DetailInput = () => {
  const [amountOwed, setAmountOwed] = useState(0);
  const [commissionRate, setCommissionRate] = useState(0);
  const handleAmountOwedChange = (e, value) => setAmountOwed(value);
  return (
    <Box m={2}>
      <Typography variant="h4">Give Me The Deets:</Typography>
      <Slider
        value={amountOwed}
        onChange={handleAmountOwedChange}
        aria-label="amountOwed"
        max={1000000}
      />
      <Slider
        value={commissionRate}
        onChange={(e, value) => setCommissionRate(value)}
        aria-label="commissionRate"
      />
    </Box>
  );
};

export default DetailInput;
