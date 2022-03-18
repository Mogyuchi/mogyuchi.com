import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import type { ReactElement } from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <ThemeProvider
      theme={(theme: Theme) =>
        createTheme({
          ...theme,
          breakpoints: {
            values: {
              xs: 0,
              sm: 360,
              md: 430,
              lg: 1155,
              xl: 1536,
            },
          },
        })
      }
    >
      <Box sx={{ display: { xs: "block", lg: "none" }, height: 30 }}></Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "grid" },
          flexDirection: { xs: "row", lg: "" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: { xs: "wrap", lg: "" },
          height: { lg: 700 },
          width: "100%",
          gridTemplateColumns: { lg: "repeat(3, 1fr)" },
          gridTemplateRows: { lg: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            gridRowStart: 1,
            gridRowEnd: 4,
            gridColumn: 2,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image src="/avatar.svg" alt="Avatar" width={300} height={300} />
        </Box>
        <Card
          sx={{
            display: "flex",
            height: "6em",
            width: "24em",
            justifySelf: { xs: "center", lg: "end" },
            alignSelf: { xs: "center", lg: "end" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, objectFit: "contain", flex: "auto" }}
            image="/home/people_search.svg"
            alt=""
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Pronouns
            </Typography>
            <Typography variant="h5" color="text.secondary">
              ae/aer
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            height: "6em",
            width: "24em",
            justifySelf: { xs: "center", lg: "start" },
            alignSelf: { xs: "center", lg: "end" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, objectFit: "contain", flex: "auto" }}
            image="/home/heart.svg"
            alt=""
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              SO
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Omnisexual
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            height: "6em",
            width: "24em",
            justifySelf: { xs: "center", lg: "center" },
            alignSelf: { xs: "center", lg: "center" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, objectFit: "contain", flex: "auto" }}
            image="/home/pride.svg"
            alt=""
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              GI
            </Typography>
            <Typography variant="h5" color="text.secondary">
              ???
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            height: "6em",
            width: "24em",
            justifySelf: { xs: "center", lg: "center" },
            alignSelf: { xs: "center", lg: "center" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, objectFit: "contain", flex: "auto" }}
            image="/home/japan.svg"
            alt=""
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Nation
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Japan
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            height: "6em",
            width: "24em",
            justifySelf: { xs: "center", lg: "end" },
            alignSelf: { xs: "center", lg: "start" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, objectFit: "contain", flex: "auto" }}
            image="/home/developer.svg"
            alt=""
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Workspace
            </Typography>
            <Typography variant="h5" color="text.secondary">
              iPad Pro 5th gen
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            height: "6em",
            width: "24em",
            justifySelf: { xs: "center", lg: "start" },
            alignSelf: { xs: "center", lg: "start" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, objectFit: "contain", flex: "auto" }}
            image="/home/birthday.svg"
            alt=""
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Birthday
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Sep 18, 2002
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ height: 20 }}></Box>
    </ThemeProvider>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
