import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

const PaymentForm = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const handleBillingCycleChange = (event, newBillingCycle) => {
    if (newBillingCycle !== null) {
      setBillingCycle(newBillingCycle);
    }
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Razorpay integration will be added here later
    console.log('Selected Plan:', selectedPlan);
    console.log('Billing Cycle:', billingCycle);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Unlock Full Access! Choose Your Plan
          </Typography>
          <ToggleButtonGroup
            value={billingCycle}
            exclusive
            onChange={handleBillingCycleChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            <ToggleButton value="monthly">Monthly</ToggleButton>
            <ToggleButton value="yearly">Yearly</ToggleButton>
          </ToggleButtonGroup>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card
                onClick={() => handlePlanChange('basic')}
                sx={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  border: selectedPlan === 'basic' ? '2px solid #5735BD' : '2px solid #ffffff',
                  minWidth: 150,
                  minHeight: 150,
                }}
              >
                <CardContent>
                  <Typography variant="h6">Basic</Typography>
                  <Typography variant="h6">{billingCycle === "monthly" ? "$30/month" : "$300/year"}</Typography>
                  {billingCycle === "yearly" && <i>16% savings</i>}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                onClick={() => handlePlanChange('standard')}
                sx={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  border: selectedPlan === 'standard' ? '2px solid #5735BD' : '2px solid #ffffff',
                  minWidth: 150,
                  minHeight: 150,
                }}
              >
                <CardContent>
                  <Typography variant="h6">Standard</Typography>
                  <Typography variant="h6">{billingCycle === "monthly" ? "$150/month" : "$1500/year"}</Typography>
                  {billingCycle === "yearly" && <i>16% savings</i>}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                onClick={() => handlePlanChange('advanced')}
                sx={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  border: selectedPlan === 'advanced' ? '2px solid #5735BD' : '2px solid #ffffff',
                  minWidth: 150,
                  minHeight: 150,
                }}
              >
                <CardContent>
                  <Typography variant="h6">Advanced</Typography>
                  <Typography variant="h8">Contact Sales</Typography>
                  {billingCycle === "yearly" && <i>20-30% savings</i>}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleSubmit}
            >
              Proceed
            </Button>
          </Box>
          <Button variant="contained" align="center" sx={{ mt: 2 }} fullWidth color='secondary'> 
            Start Your 3-Day Free Trial!
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PaymentForm;