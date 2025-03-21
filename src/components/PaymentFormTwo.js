import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { CheckCircle } from "@mui/icons-material";

// **Styled Components for Precision**
const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  backgroundColor: "#fff",
  boxShadow: 24,
  padding: theme.spacing(4),
  borderRadius: 10,
}));

const PlanCard = styled(Paper)(({ selected, planColor }) => ({
  padding: "16px",
  textAlign: "center",
  cursor: "pointer",
  border: selected ? `2px solid ${planColor}` : "2px solid #ddd",
  boxShadow: selected ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
  transition: "all 0.3s",
  "&:hover": {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
}));

const FeatureList = styled("ul")({
  listStyleType: "none",
  padding: 0,
  margin: "10px 0",
  "& li": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "5px",
    fontSize: "14px", // Set font size here
  },
});

// **Main Pricing Modal Component**
const PricingModal = ({ open, handleClose }) => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const plans = [
    {
      id: "basic",
      title: "Basic",
      price: billingCycle === "monthly" ? "$30/mo" : "$300/yr",
      color: "#7B61FF",
      features: [
        "No Credit Card Required",
        "Cloud Cost Optimization",
        "AWS Account Integration",
        "Risk & Compliance Strategies",
        "3 Parallel User Accounts",
      ],
    },
    {
      id: "standard",
      title: "Standard",
      price: billingCycle === "monthly" ? "$150/mo" : "$1200/yr",
      color: "#2F70D1",
      features: [
        "For Startups (Cloud Usage Up To $20K)",
        "Budgeted Cost Distribution",
        "Integrations with Jira, Jenkins",
        "Storage Usage Optimization",
      ],
    },
    {
      id: "advanced",
      title: "Advanced",
      price: "Contact Sales",
      color: "#E88932",
      features: [
        "Custom Enterprise Solutions",
        "Dedicated Account Manager",
        "Advanced Security Features",
        "Unlimited User Accounts",
      ],
    },
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContainer>
        {/* Header */}
        <Typography variant="h5" align="center" fontWeight="bold" mb={2}>
          Unlock Full Access! Choose Your Plan
        </Typography>

        {/* Currency & Billing Toggle */}
        <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={2}>
          <Typography variant="body2">USD</Typography>
          <Switch
            checked={currency === "INR"}
            onChange={() => setCurrency(currency === "USD" ? "INR" : "USD")}
          />
          <Typography variant="body2">INR</Typography>
        </Box>

        <ToggleButtonGroup
          value={billingCycle}
          exclusive
          onChange={(_, value) => value && setBillingCycle(value)}
          sx={{ display: "flex", justifyContent: "center", mb: 1 }}
        >
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="yearly">Yearly</ToggleButton>
        </ToggleButtonGroup>
        <Typography variant="body2" align="center" color="primary">
          Save Up To 35% With Yearly Billing
        </Typography>

        {/* Pricing Plans */}
        <Grid container spacing={2} mt={2}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={4} key={plan.id}>
              <PlanCard
                selected={selectedPlan === plan.id}
                planColor={plan.color}
                onClick={() => setSelectedPlan(plan.id)}
                sx={{ borderRadius: 3, py: 2 }}
              >
                <Typography variant="h6">{plan.title}</Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    color: selectedPlan === plan.id ? plan.color : "text.primary",
                  }}
                >
                  {plan.price}
                </Typography>
              </PlanCard>
            </Grid>
          ))}
        </Grid>

        {/* Feature Sections */}
        <Grid container spacing={2} mt={3} sx={{ background: "#EEF4FF", borderRadius:4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Basic Plan Features:
            </Typography>
            <FeatureList>
              {plans[0].features.map((feature, index) => (
                <li key={index}>
                  <CheckCircle sx={{ color: "#0F993E" }} /> {feature}
                </li>
              ))}
            </FeatureList>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FeatureList>
              {plans[1].features.map((feature, index) => (
                <li key={index}>
                  <CheckCircle sx={{ color: "#0F993E" }} /> {feature}
                </li>
              ))}
            </FeatureList>
          </Grid>
        </Grid>

        {/* CTA Buttons */}
        <Box mt={3} textAlign="center">
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(96.69deg, #48A1FA -1.71%, #541CB0 98.6%)",
              color: "#fff",
              padding: "12px",
              borderRadius: "5px",
            }}
          >
            Proceed
          </Button>
          <Button
            variant="body2"
            mt={2}
            color="secondary"
            fullWidth
            sx={{
              background: "#4899F60D",
              color: "#2D64BF",
              padding: "12px",
              marginTop: "10px",
              borderRadius: "5px",
              '&:hover': {
                background: "#EEF4FF",
              },
            }}
          >
            Start Your 3-Day Free Trial!
          </Button>
        </Box>
      </ModalContainer>
    </Modal>
  );
};

export default PricingModal;
