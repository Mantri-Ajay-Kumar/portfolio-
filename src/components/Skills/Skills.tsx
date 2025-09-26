import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  useTheme,
  Tabs,
  Tab,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../../data/portfolioData";

const Skills: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleCategoryChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.paper,
      }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Technical Skills
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}>
            Technologies and tools I work with to bring ideas to life
          </Typography>
        </motion.div>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                height: 3,
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                minWidth: "auto",
                px: 3,
              },
            }}>
            {skills.map((category, index) => (
              <Tab key={index} label={category.category} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {skills.map((category, categoryIndex) => (
            <Fade
              key={categoryIndex}
              in={selectedCategory === categoryIndex}
              timeout={500}>
              <Grid
                item
                xs={12}
                sx={{
                  display:
                    selectedCategory === categoryIndex ? "block" : "none",
                }}>
                <Grid container spacing={3}>
                  {category.items.map((skill, skillIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={skillIndex}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: skillIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.02 }}>
                        <Card
                          sx={{
                            height: "100%",
                            background:
                              theme.palette.mode === "dark"
                                ? "linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)"
                                : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                            border: `1px solid ${theme.palette.divider}`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              boxShadow: theme.shadows[8],
                              borderColor: theme.palette.primary.main,
                            },
                          }}>
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                              }}>
                              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                {skill.name}
                              </Typography>
                              <Chip
                                label={`${skill.level}%`}
                                size="small"
                                sx={{
                                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              />
                            </Box>

                            <Box sx={{ position: "relative" }}>
                              <LinearProgress
                                variant="determinate"
                                value={skill.level}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: theme.palette.action.hover,
                                  "& .MuiLinearProgress-bar": {
                                    borderRadius: 4,
                                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                  },
                                }}
                              />

                              <motion.div
                                initial={{ width: 0 }}
                                animate={
                                  inView ? { width: `${skill.level}%` } : {}
                                }
                                transition={{
                                  duration: 1,
                                  delay: 0.5 + skillIndex * 0.1,
                                  ease: "easeOut",
                                }}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  height: 8,
                                  borderRadius: 4,
                                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                  boxShadow: `0 0 10px ${theme.palette.primary.main}50`,
                                }}
                              />
                            </Box>

                            {/* Skill level indicator */}
                            <Box sx={{ mt: 2 }}>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ fontStyle: "italic" }}>
                                {skill.level >= 90
                                  ? "Expert"
                                  : skill.level >= 75
                                  ? "Advanced"
                                  : skill.level >= 60
                                  ? "Intermediate"
                                  : "Learning"}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Fade>
          ))}
        </Grid>

        {/* Additional skills visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}>
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Other Skills & Interests
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1,
              }}>
              {[
                "Problem Solving",
                "Team Leadership",
                "Agile Methodologies",
                "Code Review",
                "Technical Writing",
                "UI/UX Design",
                "Open Source",
                "Continuous Learning",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}>
                  <Chip
                    label={skill}
                    sx={{
                      fontSize: "0.9rem",
                      py: 2.5,
                      px: 1,
                      backgroundColor: theme.palette.background.default,
                      border: `1px solid ${theme.palette.divider}`,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        borderColor: theme.palette.primary.main,
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
