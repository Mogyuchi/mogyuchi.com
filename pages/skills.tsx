import { ExpandLess, ExpandMore } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import type { ReactElement } from "react";
import * as React from "react";
import Layout from "../components/layout";
import Link from "../src/Link";

export default function Skills() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: "50em", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            触れたことのあるもの
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick1}>
          <ListItemText primary="TypeScript" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Angular" />
              <IconButton
                sx={{ flex: 0 }}
                href="https://angular.jp/"
                target="_brank"
                rel="noreferrer noopener"
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Next.js" />
              <IconButton
                sx={{ flex: 0 }}
                href="https://nextjs.org/"
                target="_brank"
                rel="noreferrer noopener"
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Discord.js" />
              <IconButton
                sx={{ flex: 0 }}
                href="https://discord.js.org/"
                target="_brank"
                rel="noreferrer noopener"
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItem>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="Dart" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Flutter" />
              <IconButton
                sx={{ flex: 0 }}
                LinkComponent={Link}
                href="https://flutter.dev/"
                target="_brank"
                rel="noreferrer noopener"
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="DartWeb" />
              <IconButton
                sx={{ flex: 0 }}
                href="https://dart.dev/web"
                target="_brank"
                rel="noreferrer noopener"
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItem>
          </List>
        </Collapse>
        <ListItem>
          <ListItemText primary="Rust" />
        </ListItem>
        <ListItemButton onClick={handleClick3}>
          <ListItemText primary="C#" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Discord.NET" />
              <IconButton
                sx={{ flex: 0 }}
                href="https://discordnet.dev/"
                target="_brank"
                rel="noreferrer noopener"
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="WPF" />
              <IconButton
                sx={{ flex: 0 }}
                href="https://docs.microsoft.com/ja-jp/visualstudio/designers/getting-started-with-wpf"
                target="_brank"
                rel="noreferrer noopener"
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </>
  );
}

Skills.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
