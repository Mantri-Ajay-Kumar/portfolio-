import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  useTheme,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowDown,
  LocationOn,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

import Typed from "react-typed";

const Hero: React.FC = () => {
  const theme = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <GitHub />, url: personalInfo.github, label: "GitHub" },
    { icon: <LinkedIn />, url: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <Email />, url: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(personalInfo);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}>
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.1)"
              } 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * (i % 2 === 0 ? 0.5 : -0.5),
              y: mousePosition.y * (i % 2 === 0 ? -0.5 : 0.5),
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "primary.light" : "white",
                    fontWeight: 500,
                  }}>
                  Hello, I'm
                </Typography>
                <Chip
                  label="Open to Opportunities"
                  sx={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontSize: "0.75rem",
                    height: "24px",
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%": { opacity: 1 },
                      "50%": { opacity: 0.7 },
                      "100%": { opacity: 1 },
                    },
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  color: "white",
                  mb: 2,
                  textShadow: "3px 3px 6px rgba(0,0,0,0.4)",
                  background:
                    "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}>
                {personalInfo.name}
              </Typography>

              <Box sx={{ mb: 3, height: "40px" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "primary.light" : "white",
                    fontWeight: 500,
                  }}>
                  <Typed
                    strings={[
                      personalInfo.title,
                      "React.js Developer",
                      ".NET Core Specialist",
                      "Full Stack Engineer",
                      "Cloud Solutions Architect",
                      "System Design Expert",
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={2000}
                    loop
                  />
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === "dark" ? "grey.300" : "white",
                  mb: 3,
                  maxWidth: "500px",
                  opacity: 0.9,
                }}>
                {personalInfo.subtitle}
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <Chip
                  icon={<LocationOn />}
                  label={personalInfo.location}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    "& .MuiChip-icon": {
                      color: "white",
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = `${process.env.PUBLIC_URL}${personalInfo.resume}`;
                    link.download = "Mantri_Ajay_Kumar_Resume.pdf";
                    link.click();
                  }}
                  sx={{
                    backgroundColor: "#2196F3",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#1976D2",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 24px rgba(33,150,243,0.4)",
                    },
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                  }}>
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={scrollToAbout}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 24px rgba(255,255,255,0.2)",
                    },
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                  }}>
                  View Portfolio
                </Button>
                <Button
                  variant="text"
                  size="large"
                  href="#contact"
                  sx={{
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                  }}>
                  Let's Connect
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}>
                    <IconButton
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.2)",
                          transform: "translateY(-3px)",
                        },
                        transition: "all 0.3s ease",
                      }}>
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}>
                <Avatar
                  src={`${process.env.PUBLIC_URL}${personalInfo.profileImage}`}
                  alt={personalInfo.name}
                  sx={{
                    width: { xs: 250, md: 350 },
                    height: { xs: 250, md: 350 },
                    border: "5px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    fontSize: "4rem",
                    fontWeight: "bold",
                  }}
                  onError={(e) => {
                    console.error(
                      "Image failed to load:",
                      personalInfo.profileImage
                    );
                    console.error(
                      "Full path:",
                      `${process.env.PUBLIC_URL}${personalInfo.profileImage}`
                    );
                    console.error("Error event:", e);
                  }}
                  onLoad={() => {
                    console.log(
                      "Image loaded successfully:",
                      personalInfo.profileImage
                    );
                    console.log(
                      "Full path:",
                      `${process.env.PUBLIC_URL}${personalInfo.profileImage}`
                    );
                  }}>
                  {personalInfo.name.charAt(0)}
                </Avatar>

                {/* Decorative elements around avatar */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    border: "2px dashed rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    animation: "rotate 20s linear infinite",
                    "@keyframes rotate": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          <IconButton
            onClick={scrollToAbout}
            sx={{
              color: "white",
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": {
                  transform: "translateY(0)",
                },
                "40%": {
                  transform: "translateY(-10px)",
                },
                "60%": {
                  transform: "translateY(-5px)",
                },
              },
            }}>
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
