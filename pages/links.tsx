import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import Link from "../src/Link";
import * as React from "react";

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
        maxWidth: "50em",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <DiscordButton variant="outlined">
        <Typography variant="h5">Discord</Typography>
        <Typography variant="body1">Mogyuchi#0918</Typography>
      </DiscordButton>
      <Link
        href="https://www.instagram.com/mogyuchi/"
        target="_brank"
        rel="noreferrer noopener"
      >
        <InstagramButton variant="outlined">
          <Typography variant="h5">Instagram</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </InstagramButton>
      </Link>
      <Link
        href="https://twitter.com/Mogyuchi"
        target="_brank"
        rel="noreferrer noopener"
      >
        <TwitterButton variant="outlined">
          <Typography variant="h5">Twitter</Typography>
          <Typography variant="body1">@Mogyuchi</Typography>
        </TwitterButton>
      </Link>
      <Link
        href="https://www.reddit.com/user/Mogyuchi"
        target="_brank"
        rel="noreferrer noopener"
      >
        <RedditButton variant="outlined">
          <Typography variant="h5">Reddit</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </RedditButton>
      </Link>
      <Link
        href="https://steamcommunity.com/id/Mogyuchi"
        target="_brank"
        rel="noreferrer noopener"
      >
        <SteamButton variant="outlined">
          <Typography variant="h5">Steam</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </SteamButton>
      </Link>
      <Link
        href="https://github.com/Mogyuchi"
        target="_brank"
        rel="noreferrer noopener"
      >
        <GitHubButton variant="outlined">
          <Typography variant="h5">GitHub</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </GitHubButton>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCOv3KOCGFmw9CH9iTa_tETQ"
        target="_brank"
        rel="noreferrer noopener"
      >
        <YouTubeButton variant="outlined">
          <Typography variant="h5">YouTube</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </YouTubeButton>
      </Link>
      <Link
        href="https://www.twitch.tv/mogyuchi"
        target="_brank"
        rel="noreferrer noopener"
      >
        <TwitchButton variant="outlined">
          <Typography variant="h5">Twitch</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </TwitchButton>
      </Link>
      <Link
        href="https://qiita.com/Mogyuchi"
        target="_brank"
        rel="noreferrer noopener"
      >
        <QiitaButton variant="outlined">
          <Typography variant="h5">Qiita</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </QiitaButton>
      </Link>
      <Link
        href="https://www.tiktok.com/@mogyuchi"
        target="_brank"
        rel="noreferrer noopener"
      >
        <TikTokButton variant="outlined">
          <Typography variant="h5">TikTok</Typography>
          <Typography variant="body1">Mogyuchi</Typography>
        </TikTokButton>
      </Link>
    </Box>
  );
}

Links.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
