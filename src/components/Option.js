import React, { useContext, useState } from 'react'
import { TextField,Grid,Typography,Container,Paper } from '@mui/material'
import{ CopyToClipboard }from 'react-copy-to-clipboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@mui/material/Button';

import PhoneIcon from '@mui/icons-material/Phone';
import { SocketContext } from '../socketContext';
export default function Option({children}) {
  
  const {me,callAccepted,name,setName,callEnded,leaveCall,callUser}=useContext(SocketContext)
  const [idToCall,setIdToCall]=useState('')
 
  return (
    <Container className="containerOption">
      <Paper elevation={10} className="paperOption">
        <form className="rootOption" noValidate autoComplete="off">
          <Grid container className="gridContainerOption">
            <Grid item xs={12} md={6} className="paddingOption">
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className="marginOption">
                <Button variant="contained" color="primary" fullWidth startIcon={<AssignmentIcon fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6}  className="paddingOption">
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneIcon fontSize="large" />} fullWidth onClick={leaveCall} className="marginOption">
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<PhoneIcon fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className="marginOption">
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};