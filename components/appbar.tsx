import ChatIcon from "@mui/icons-material/Chat";
import HandymanIcon from "@mui/icons-material/Handyman";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LinkIcon from "@mui/icons-material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "../src/Link";
import * as React from "react";

const pages = ["about", "works", "skills", "links"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              lg: 1200,
              xl: 1536,
            },
          },
        })
      }
    >
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              sx={{
                mr: 2,
                color: "white",
                display: { xs: "none", sm: "block" },
              }}
              component={Link}
              href="/"
            >
              <Typography variant="h6" noWrap component="div">
                もぎゅち
              </Typography>
            </Button>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="メニューを開く"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={page}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <Button
                sx={{ color: "white", display: "block" }}
                component={Link}
                href="/"
              >
                <Typography variant="h6" noWrap component="div">
                  もぎゅち
                </Typography>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  component={Link}
                  href={page}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex", md: "none" },
              }}
            ></Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", sm: "flex", md: "none" },
              }}
            >
              <Tooltip title="About">
                <IconButton
                  component={Link}
                  href="/about"
                  size="large"
                  aria-label="アバウトページへ移動"
                  color="inherit"
                >
                  <ChatIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Works">
                <IconButton
                  component={Link}
                  href="/works"
                  size="large"
                  aria-label="作品ページへ移動"
                  color="inherit"
                >
                  <Inventory2Icon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Skills">
                <IconButton
                  component={Link}
                  href="/skills"
                  size="large"
                  aria-label="スキルページへ移動"
                  color="inherit"
                >
                  <HandymanIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Links">
                <IconButton
                  component={Link}
                  href="/links"
                  size="large"
                  aria-label="外部リンク一覧ページへ移動"
                  color="inherit"
                >
                  <LinkIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
