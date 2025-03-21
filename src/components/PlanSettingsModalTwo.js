import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

const PlanSettingsModal = ({ open, handleClose }) => {
  const [users, setUsers] = useState(1);
  const [clouds, setClouds] = useState(1);
  const basePlanPrice = 30;
  const userPrice = 10;
  const cloudPrice = 20;
  const totalPrice = basePlanPrice + users * userPrice + clouds * cloudPrice;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: 2,
          p: 3,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Current Plan Settings
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Update Your Plan, Add Users & Clouds, And Pay With Your Next Bill.
        </Typography>

        {/* Plan Status */}
        <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: 2 }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2">
              Current Plan{" "}
              <span
                style={{
                  backgroundColor: "#D0AFFF",
                  color: "#6F42C1",
                  padding: "3px 10px",
                  borderRadius: 5,
                  fontWeight: 500,
                }}
              >
                BASIC PLAN
              </span>
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              fontWeight="bold"
              fontSize={18}
            >
              ${basePlanPrice}/mo
            </Typography>
          </Grid>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            • User Invite Limit - 2 Users <br />• Cloud Connection Limit - 2
            Clouds
          </Typography>
        </Paper>

        {/* Add More Users */}
        <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold">
            Add More Users
          </Typography>
          <Typography variant="body2" color="textSecondary">
            You Can Increase Your Limit Of Users With Chosen Plan
          </Typography>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="body2">Per User Price - ${userPrice}</Typography>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => setUsers(Math.max(0, users - 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ fontWeight: "bold", mx: 1 }}>{users}</Typography>
              <IconButton onClick={() => setUsers(users + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Grid>
        </Paper>

        {/* Add More Clouds */}
        <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold">
            Add More Clouds
          </Typography>
          <Typography variant="body2" color="textSecondary">
            You Can Increase Your Limit Of Cloud Connections With Chosen Plan
          </Typography>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="body2">Per Cloud Price - ${cloudPrice}</Typography>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => setClouds(Math.max(0, clouds - 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ fontWeight: "bold", mx: 1 }}>{clouds}</Typography>
              <IconButton onClick={() => setClouds(clouds + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Grid>
        </Paper>

        {/* Next Month Billing Amount */}
        <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold">
            Next Month Billing Amount
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your Final Billing Amount Including Additional Changes For Next Month
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            align="right"
            fontWeight="bold"
            fontSize={20}
          >
            ${totalPrice}/mo
          </Typography>
        </Paper>

        {/* Pay Now */}
        <Paper
          variant="outlined"
          sx={{
            mt: 2,
            p: 2,
            borderRadius: 2,
            bgcolor: "#F8F9FA",
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            Current Payable Amount
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your Current Payable Amount For Additional Changes
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            align="right"
            fontWeight="bold"
            fontSize={20}
          >
            ${totalPrice - basePlanPrice}
          </Typography>
        </Paper>

        {/* Pay Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#007BFF",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: 16,
            py: 1.5,
            borderRadius: 2,
            "&:hover": { bgcolor: "#0056b3" },
          }}
        >
          Pay ${totalPrice - basePlanPrice} & save
        </Button>
      </Box>
    </Modal>
  );
};

export default PlanSettingsModal;
