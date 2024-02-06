import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import VideoPlayer from './components/VideoPlayer';
import Option from './components/Option';
import Notification from './components/Notification';



export default function App() {
  
  return (
    <div className="wrapper" >
      <AppBar className="appBar" position="static" color="inherit">
      <Typography variant="h2" align='center'>
       Video Chat
       </Typography>
      </AppBar>
      <VideoPlayer />
      <Option>
        <Notification />
      </Option>
    </div>
  );
}
