import * as React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Avatar,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import Draggable from 'react-draggable';
import { deepPurple } from '@mui/material/colors';

function PaperComponent(props) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

export default function SellClick({Company}) {
  const marginRef = useRef(Math.floor(Math.random() * 21) - 10); // random margin once
  const [open, setOpen] = React.useState(false);
  const [selldata,setselldata]=React.useState({
    Quantity:0,
    PricePerQuantity:0,
    TotalPrice:0,
    Margin:0,
    Company:Company
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlechangeinput=(event)=>{
  console.log(event.target.name);
  console.log(event.target.value);
  console.log("Margin:", marginRef.current);
  setselldata((currdata)=>{
return {...currdata , [event.target.name]:event.target.value,Margin: marginRef.current}
    })
  }
  const handlesubmit=(event)=>{
     event.preventDefault();
    console.log(selldata);
     const total=(selldata.Quantity * selldata.PricePerQuantity)*selldata.Margin;
      axios.post("/addsell", {
    Quantity:selldata.Quantity,
    PricePerQuantity:selldata.PricePerQuantity,
    TotalPrice:total,
    Margin:selldata.Margin,
    Company:Company
  }, {
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    setselldata({
    Quantity:0,
    PricePerQuantity:0,
    TotalPrice:0,
    Margin:0,
    Company:Company
    })
  }
  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        <Avatar sx={{ bgcolor: deepPurple [500], cursor: "pointer" }}>S</Avatar>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
>
        <DialogTitle
          style={{ cursor: 'move', fontWeight: 600 }}
          id="draggable-dialog-title"
        >
          sell The Stock
        </DialogTitle>

        <DialogContent >
          <Box
            component="form"
            onSubmit={handlesubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 1,
              minWidth: 350,
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              type="number"
              name="Quantity"
              label="Qty."
              variant="outlined"
              inputProps={{ min: 1, max: 100 }}
              fullWidth
              onChange={handlechangeinput}
              value={selldata.Quantity}
            />
            <TextField
              type="number"
              name="PricePerQuantity"
              label="Price / Qty."
              variant="outlined"
              fullWidth
              inputProps={{ min: 1}}
              onChange={handlechangeinput}
              value={selldata.PricePerQuantity}
            />
            <TextField
            type="number"
              name="TotalPrice"
              label="Total Price"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              value={(selldata.Quantity * selldata.PricePerQuantity)*selldata.Margin}
            />
            <DialogActions sx={{ pr: 2, pb: 2 ,mr:5}}>
        <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">
            Confirm Sell
            </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
