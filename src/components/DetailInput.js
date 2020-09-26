import React, { useState, useEffect } from 'react';
// Material-UI
import { Box, Grid, Slider, Typography } from '@material-ui/core';

const DetailInput = () => {
  const [amountOwed, setAmountOwed] = useState(0);
  const [commissionRate, setCommissionRate] = useState(0);
  const [transferTaxRate, setTransferTaxRate] = useState(0);
  const [attorneyFee, setAttorneyFee] = useState(0);
  const [otherFees, setOtherFees] = useState(0);
  const [amountEarned, setAmountEarned] = useState(0);

  useEffect(() => {
    setAmountEarned(
      130000 -
        (130000 * (commissionRate + transferTaxRate) +
          attorneyFee +
          otherFees +
          amountOwed)
    );
  }, [amountOwed, commissionRate, transferTaxRate, attorneyFee, otherFees]);

  return (
    <Box m={2}>
      <Typography variant="h4">Give Me The Deets:</Typography>
      <Grid>
        <Grid item style={{ display: 'flex' }}>
          <Typography variant="body2" gutterBottom style={{ flexGrow: 1 }}>
            Amount Owed:
          </Typography>
          <Typography variant="caption" style={{ flexShrink: 1 }}>
            ${amountOwed}
          </Typography>
        </Grid>
        <Grid item>
          <Slider
            value={amountOwed}
            onChange={(e, value) => setAmountOwed(value)}
            aria-label="amountOwed"
            max={500000}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item style={{ display: 'flex' }}>
          <Typography variant="body2" gutterBottom style={{ flexGrow: 1 }}>
            Commission Rate (%):
          </Typography>
          <Typography variant="caption" style={{ flexShrink: 1 }}>
            {Math.trunc(commissionRate * 100)}%
          </Typography>
        </Grid>
        <Grid item>
          <Slider
            value={commissionRate}
            onChange={(e, value) => setCommissionRate(value)}
            aria-label="commissionRate"
            max={1}
            step={0.01}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item style={{ display: 'flex' }}>
          <Typography variant="body2" gutterBottom style={{ flexGrow: 1 }}>
            Transfer Tax Rate (%):
          </Typography>
          <Typography variant="caption" style={{ flexShrink: 1 }}>
            {Math.trunc(transferTaxRate * 100)}%
          </Typography>
        </Grid>
        <Grid item>
          <Slider
            value={transferTaxRate}
            onChange={(e, value) => setTransferTaxRate(value)}
            aria-label="transferTaxRate"
            max={1}
            step={0.01}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item style={{ display: 'flex' }}>
          <Typography variant="body2" gutterBottom style={{ flexGrow: 1 }}>
            Attorney Fee:
          </Typography>
          <Typography variant="caption" style={{ flexShrink: 1 }}>
            ${attorneyFee}
          </Typography>
        </Grid>
        <Grid item>
          <Slider
            value={attorneyFee}
            onChange={(e, value) => setAttorneyFee(value)}
            aria-label="attorneyFee"
            max={5000}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item style={{ display: 'flex' }}>
          <Typography variant="body2" gutterBottom style={{ flexGrow: 1 }}>
            Other Fees:
          </Typography>
          <Typography variant="caption" style={{ flexShrink: 1 }}>
            ${otherFees}
          </Typography>
        </Grid>
        <Grid item>
          <Slider
            value={otherFees}
            onChange={(e, value) => setOtherFees(value)}
            aria-label="otherFees"
            max={5000}
          />
        </Grid>
      </Grid>
      <Typography>Estimate: {amountEarned}</Typography>
    </Box>
  );
};

export default DetailInput;
