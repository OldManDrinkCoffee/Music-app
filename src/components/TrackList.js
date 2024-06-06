import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "start",
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  cursor: "pointer",
  "&:hover": { backgroundColor: "#eab5ca" },
  display: "flex",
  justifyContent: "center",
  margin: "15px",
}));

const TrackList = () => {
  const {
    trackList,
    currentTrackIndex,
    playTrack,
    // currentTrackIndex,
  } = useMusicPlayer();

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)

        <Item
          className="song-title"
          onClick={() => playTrack(index)}
          key={index}
        >
          <Stack spacing={2} direction="row" alignItems="center" width={"100%"}>
            {currentTrackIndex === index ? (
              <HeadphonesIcon />
            ) : (
              <PauseCircleIcon />
            )}{" "}
            <Typography>{track.name}</Typography>
          </Stack>
        </Item>
      ))}
    </Box>

    // </Stack>
  );
};

export default TrackList;