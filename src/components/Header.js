import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import Typography from "@mui/material/Typography";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="marquee-container">
      <Typography variant="h5" className="marquee-text">
        Playing: {currentTrackName}
      </Typography>
    </div>
  );
}

export default Header;