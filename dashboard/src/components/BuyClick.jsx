import * as React from 'react';
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
import { deepOrange } from '@mui/material/colors';

let addbuyurl="http://localhost:8080/addbuy";

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

export default function BuyClick({Company}) {
  const [open, setOpen] = React.useState(false);
  const [buydata,setbuydata]=React.useState({
    Quantity:0,
    PricePerQuantity:0,
    TotalPrice:0,
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
  setbuydata((currdata)=>{
return {...currdata , [event.target.name]:event.target.value}
    })
  }
  const handlesubmit=(event)=>{
     event.preventDefault();
    console.log(buydata);
     const total = buydata.Quantity * buydata.PricePerQuantity;
     console.log(total);
    
    axios.post(addbuyurl, {
    Quantity: buydata.Quantity,
    PricePerQuantity: buydata.PricePerQuantity,
    TotalPrice:total,
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

    setbuydata({
    Quantity:0,
    PricePerQuantity:0,
    TotalPrice:0,
    Company:Company
    })
  }
  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        <Avatar sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}>B</Avatar>
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
          Buy The Stock
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
              value={buydata.Quantity}
            />
            <TextField
              type="number"
              name="PricePerQuantity"
              label="Price / Qty."
              variant="outlined"
              inputProps={{ min: 1}}
              fullWidth
              onChange={handlechangeinput}
              value={buydata.PricePerQuantity}
            />
            <TextField
            type="number"
              name="TotalPrice"
              label="Total Price"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              value={buydata.Quantity * buydata.PricePerQuantity}
            />
            <DialogActions sx={{ pr: 2, pb: 2 ,mr:5}}>
        <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">
            Confirm Buy
            </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
