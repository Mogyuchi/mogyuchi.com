import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react";
import Layout from "../components/layout";

const createButton = (color: string) => {
  return styled(Button)<ButtonProps>(({ theme }) => ({
    flexDirection: "column",
    color: color,
    borderColor: color,
    textTransform: "none",
    width: "12.2em",
    height: "6em",
    "&:hover": {
      color: theme.palette.getContrastText(color),
      backgroundColor: color,
      borderColor: color,
    },
  }));
};
const DiscordButton = createButton("#5865f2");
const InstagramButton = createButton("#f00074");
const TwitterButton = createButton("#1d9bf0");
const RedditButton = createButton("#ff4500");
const SteamButton = createButton("rgb(0, 0, 0)");
const GitHubButton = createButton("#222222");
const YouTubeButton = createButton("#ff0000");
const TwitchButton = createButton("#9146ff");
const QiitaButton = createButton("#55c500");
const TikTokButton = createButton("#afafaf");

export default function Links() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "50em",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <DiscordButton variant="outlined">
        <Typography variant="h5">Discord</Typography>
        <Typography variant="body1">Mogyuchi#0918</Typography>
      </DiscordButton>
      <InstagramButton variant="outlined">
        <Typography variant="h5">Instagram</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </InstagramButton>
      <TwitterButton variant="outlined">
        <Typography variant="h5">Twitter</Typography>
        <Typography variant="body1">@Mogyuchi</Typography>
      </TwitterButton>
      <RedditButton variant="outlined">
        <Typography variant="h5">Reddit</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </RedditButton>
      <SteamButton variant="outlined">
        <Typography variant="h5">Steam</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </SteamButton>
      <GitHubButton variant="outlined">
        <Typography variant="h5">GitHub</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </GitHubButton>
      <YouTubeButton variant="outlined">
        <Typography variant="h5">YouTube</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </YouTubeButton>
      <TwitchButton variant="outlined">
        <Typography variant="h5">Twitch</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </TwitchButton>
      <QiitaButton variant="outlined">
        <Typography variant="h5">Qiita</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </QiitaButton>
      <TikTokButton variant="outlined">
        <Typography variant="h5">TikTok</Typography>
        <Typography variant="body1">Mogyuchi</Typography>
      </TikTokButton>
    </Box>
  );
}

Links.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
