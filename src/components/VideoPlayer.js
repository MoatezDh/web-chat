import React, { useContext } from 'react'
import {Grid ,Typography,Paper} from '@mui/material'
import {SocketContext}  from '../socketContext'
export default function VideoPlayer() {
  const {name,callAccepted,myVideo,userVideo,callEnded/*,stream*/,call} =useContext(SocketContext)
 
  return (
   
    <Grid container className='gridContainer'> 
   
        <Paper className="paper">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className="video" />
          </Grid>
        </Paper>
    
      {callAccepted && !callEnded &&(
      <Paper className="Paper" style={{ margin: '10px' }}>
      <Grid item xs={12} md={6}> 
      <Typography variant='h4'  gutterBottom>{call.name||'Name'}</Typography>
      <video playsInline  ref={userVideo} autoPlay className='video'/>
      </Grid>
    </Paper>
    )}
       
       
    </Grid>
  )
}
