import useMusicPlayer from "../hooks/useMusicPlayer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Stack from "@mui/material/Stack";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const styled = {
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "#a4e377",
};
const sx = {
  fontSize: "60px",
  "&:hover": {
    color: "#56DC6D",
  },
};

function Controller() {
  const {
    playPreviousTrack,
    playTrack,
    playNextTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();
  const handleTogglePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };
  return (
    <Stack spacing={2} direction="row">
      <button onClick={() => playPreviousTrack()} style={styled}>
        <SkipPreviousIcon sx={{ ...sx, fontSize: "40px" }} />
      </button>
      <button onClick={() => handleTogglePlay()} style={styled}>
        {isPlaying ? <PauseCircleIcon sx={sx} /> : <PlayCircleIcon sx={sx} />}
      </button>
      <button onClick={() => playNextTrack()} style={styled}>
        <SkipNextIcon sx={{ ...sx, fontSize: "40px" }} />
      </button>
    </Stack>
  );
}

export default Controller;
