import React, { useState } from 'react';
// Material-UI
import { Box, Slider, Typography } from '@material-ui/core';

const DetailInput = () => {
  const [amountOwed, setAmountOwed] = useState(0);
  const [commissionRate, setCommissionRate] = useState(0);
  const [transferTaxRate, setTransferTaxRate] = useState(0);
  const [attorneyFee, setAttorneyFee] = useState(0);
  const [otherFees, setOtherFees] = useState(0);

  return (
    <Box m={2}>
      <Typography variant="h4">Give Me The Deets:</Typography>
      <Slider
        value={amountOwed}
        onChange={(e, value) => setAmountOwed(value)}
        aria-label="amountOwed"
        max={500000}
        step={0.01}
      />
      <Slider
        value={commissionRate}
        onChange={(e, value) => setCommissionRate(value)}
        aria-label="commissionRate"
      />
      <Slider
        value={transferTaxRate}
        onChange={(e, value) => setTransferTaxRate(value)}
        aria-label="transferTaxRate"
      />
      <Slider
        value={attorneyFee}
        onChange={(e, value) => setAttorneyFee(value)}
        aria-label="attorneyFee"
        max={5000}
        step={0.01}
      />
      <Slider
        value={otherFees}
        onChange={(e, value) => setOtherFees(value)}
        aria-label="otherFees"
        max={5000}
        step={0.01}
      />
    </Box>
  );
};

export default DetailInput;
