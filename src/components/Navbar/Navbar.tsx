import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Fade,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Brightness4,
  Brightness7,
  Download,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled
            ? theme.palette.background.paper
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease-in-out",
          "& .MuiToolbar-root": {
            color: theme.palette.mode === "dark" ? "white" : "text.primary",
          },
        }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleMenuClick("#home")}>
                {personalInfo.name.split(" ")[0]}
              </Typography>
            </motion.div>

            {!isMobile ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {menuItems.map((item, index) => (
                    <Fade in key={item.label} timeout={300 * (index + 1)}>
                      <Button
                        color="inherit"
                        onClick={() => handleMenuClick(item.href)}
                        sx={{
                          position: "relative",
                          color:
                            theme.palette.mode === "dark"
                              ? "white"
                              : "text.primary",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            width: 0,
                            height: 2,
                            backgroundColor: theme.palette.primary.main,
                            transition: "all 0.3s ease",
                            transform: "translateX(-50%)",
                          },
                          "&:hover::after": {
                            width: "80%",
                          },
                        }}>
                        {item.label}
                      </Button>
                    </Fade>
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <IconButton
                    onClick={toggleDarkMode}
                    color="inherit"
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? "white"
                          : "text.primary",
                    }}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>

                  {personalInfo.resume && (
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      href={personalInfo.resume}
                      download
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                        },
                        transition: "all 0.3s ease",
                      }}>
                      Resume
                    </Button>
                  )}
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: theme.palette.background.paper,
          },
        }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                onClick={() => handleMenuClick(item.href)}
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            {personalInfo.resume && (
              <ListItem sx={{ mt: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<Download />}
                  href={personalInfo.resume}
                  download>
                  Download Resume
                </Button>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
