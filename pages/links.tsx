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
    backgroundColor: "#fff",
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
const AccountButton = (props: {
  color: string;
  service: string;
  user: string;
  link: string | undefined;
}) => {
  const ColorButton = createButton(props.color);
  if (props.link) {
    return (
      <Link href={props.link} target="_brank" rel="noreferrer noopener">
        <ColorButton variant="outlined">
          <Typography variant="h5">{props.service}</Typography>
          <Typography variant="body1">{props.user}</Typography>
        </ColorButton>
      </Link>
    );
  } else {
    return (
      <ColorButton variant="outlined">
        <Typography variant="h5">{props.service}</Typography>
        <Typography variant="body1">{props.user}</Typography>
      </ColorButton>
    );
  }
};

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
      <AccountButton
        color="#5865f2"
        service="Discord"
        user="Mogyuchi#0918"
        link={undefined}
      ></AccountButton>
      <AccountButton
        color="#f00074"
        service="Instagram"
        user="Mogyuchi"
        link="https://www.instagram.com/mogyuchi/"
      ></AccountButton>
      <AccountButton
        color="#1d9bf0"
        service="Twitter"
        user="@Mogyuchi"
        link="https://twitter.com/Mogyuchi"
      ></AccountButton>
      <AccountButton
        color="rgb(0, 0, 0)"
        service="Steam"
        user="Mogyuchi"
        link="https://steamcommunity.com/id/Mogyuchi"
      ></AccountButton>
      <AccountButton
        color="#222222"
        service="GitHub"
        user="Mogyuchi"
        link="https://github.com/Mogyuchi"
      ></AccountButton>
      <AccountButton
        color="#55c500"
        service="Qiita"
        user="Mogyuchi"
        link="https://qiita.com/Mogyuchi"
      ></AccountButton>
      <AccountButton
        color="#3EA8FF"
        service="Zenn"
        user="Mogyuchi"
        link="https://zenn.dev/mogyuchi"
      ></AccountButton>
    </Box>
  );
}

Links.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
