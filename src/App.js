import React, { useState } from 'react';
import { CssBaseline, Container, Button, Dialog, DialogContent } from '@mui/material';
import PaymentForm from './components/PaymentForm';
import PaymentFormTwo from './components/PaymentFormTwo';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open Payment Form
        </Button>
        
        {/* <Dialog open={open} onClose={handleClose}> */}
          {/* <DialogContent> */}
            {/* <PaymentForm /> */}
          {/* </DialogContent> */}
        {/* </Dialog> */}
        <PaymentFormTwo open={open} onClose={handleClose}/>
      </Container>
    </div>
  );
}

export default App;
