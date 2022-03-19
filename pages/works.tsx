import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import Link from "../src/Link";

export default function Works() {
  return (
    <>
      <Box sx={{ height: 20 }}></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Card
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "auto" }}>
            <Typography component="span" variant="h6" gutterBottom>
              mogyuchi.com
            </Typography>
            <IconButton
              component={Link}
              href="https://github.com/Mogyuchi/mogyuchi.com"
              target="_brank"
              rel="noreferrer noopener"
            >
              <OpenInNewIcon />
            </IconButton>
            <Typography variant="body1" color="text.secondary">
              このサイトのプロジェクトです。Next.js + MUI +
              TypeScriptで書いています。
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "auto" }}>
            <Typography component="span" variant="h6" gutterBottom>
              cam
            </Typography>
            <IconButton
              component={Link}
              href="https://github.com/Mogyuchi/cam"
              target="_brank"
              rel="noreferrer noopener"
            >
              <OpenInNewIcon />
            </IconButton>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ overflowWrap: "anywhere" }}
            >
              インカメラの映像を左右反転させずにリアルタイム表示するアプリが欲しかったので作りました。
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "auto" }}>
            <Typography component="span" variant="h6" gutterBottom>
              jmahook
            </Typography>
            <IconButton
              component={Link}
              href="https://github.com/Mogyuchi/jmahook"
              target="_brank"
              rel="noreferrer noopener"
            >
              <OpenInNewIcon />
            </IconButton>
            <Typography variant="body1" color="text.secondary">
              🚧
              気象庁防災情報XMLフォーマット形式電文をWebhookに転送するアプリです。
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "auto" }}>
            <Typography component="span" variant="h6" gutterBottom>
              Chihuyufan-ts
            </Typography>
            <IconButton
              component={Link}
              href="https://github.com/Mogyuchi/Chihuyufan-ts"
              target="_brank"
              rel="noreferrer noopener"
            >
              <OpenInNewIcon />
            </IconButton>
            <Typography variant="body1" color="text.secondary">
              <Link
                href="https://github.com/Hirosukt"
                target="_brank"
                rel="noreferrer noopener"
              >
                Hirosukt
              </Link>
              のDiscordサーバー用のBotです。
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "auto" }}>
            <Typography component="span" variant="h6" gutterBottom>
              discoraw
            </Typography>
            <IconButton
              component={Link}
              href="https://github.com/Mogyuchi/discoraw-js"
              target="_brank"
              rel="noreferrer noopener"
            >
              <OpenInNewIcon />
            </IconButton>
            <Typography variant="body1" color="text.secondary">
              Discordのイベントを全てコンソールに出力するアプリです。yarn@berryのゼロインストールを採用しています。
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "auto" }}>
            <Typography component="span" variant="h6" gutterBottom>
              文化祭サイト
            </Typography>
            <IconButton
              component={Link}
              href="https://info.bshs.gakushuin.ac.jp/hououfes2021/"
              target="_brank"
              rel="noreferrer noopener"
            >
              <OpenInNewIcon />
            </IconButton>
            <Typography variant="body1" color="text.secondary">
              Angularで作りました。PWA化し、インストール可能にしています。
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "auto" }}>
            <Typography component="span" variant="h6" gutterBottom>
              TwiStHook
            </Typography>
            <IconButton
              component={Link}
              href="https://github.com/Mogyuchi/TwiStHook"
              target="_brank"
              rel="noreferrer noopener"
            >
              <OpenInNewIcon />
            </IconButton>
            <Typography variant="body1" color="text.secondary">
              Twitter Filtered StreamをWebhookに転送するアプリです。
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ height: 20 }}></Box>
    </>
  );
}
Works.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
