import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';
import "./videoplayer.css";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (
    <div className={"mainarea"}>
      {/* {stream && ( */}
      {(
        <div className={"user_area"}>

          {/* my video area  */}
          <div className={`my_video_area`} style={{
            width: callAccepted ? "180px" : "100%",
            height: callAccepted ? "150px" : "100%",
            top: callAccepted ? " " : "0",
            bottom: callAccepted ? "15px" : "0",
            left: callAccepted ? "" : "0",
            right: callAccepted ? "15px" : "0",
          }}>
            <span className='user_name'>{name || 'You'}</span>
            <video playsInline muted ref={myVideo} autoPlay className={"myvideo"} />
          </div>

          {/* other user video area  */}
          {callAccepted && (<div className={"user_video_area"} style={{
            zIndex: 10,
          }}>
            <span className='other_user_name'>{(callAccepted && !callEnded) ? call.name : "name"}</span>
            <video playsInline ref={userVideo} autoPlay className={"uservideo"} />
          </div> )}
        </div>
      )}

    </div>
  );
};

export default VideoPlayer;