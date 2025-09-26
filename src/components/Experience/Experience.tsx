import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// Custom Timeline components using Material-UI
import {
  Work,
  ExpandMore,
  Circle,
  LocationOn,
  CalendarMonth,
  CheckCircleOutline,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../../data/portfolioData";

const Experience: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id="experience"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
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
            Professional Experience
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}>
            My journey through different roles and companies
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}>
          {experiences.map((exp, index) => (
            <Box key={exp.id} sx={{ position: "relative", mb: 6 }}>
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: 80,
                    width: 2,
                    height: "calc(100% + 24px)",
                    bgcolor: "primary.main",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                />
              )}

              {/* Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: 60,
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: exp.current ? "primary.main" : "grey.400",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: exp.current
                    ? `0 0 0 4px ${theme.palette.primary.main}33`
                    : "none",
                  border: `3px solid ${theme.palette.background.paper}`,
                }}>
                <Work sx={{ color: "white", fontSize: 20 }} />
              </Box>

              {/* Content layout */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 4,
                  flexDirection: { xs: "column", md: "row" },
                  position: "relative",
                  zIndex: 3,
                }}>
                {/* Left side - Date and location (hidden on mobile) */}
                <Box
                  sx={{
                    flex: 1,
                    display: { xs: "none", md: "block" },
                    textAlign: index % 2 === 0 ? "right" : "left",
                    pr: index % 2 === 0 ? 4 : 0,
                    pl: index % 2 === 0 ? 0 : 4,
                    maxWidth: "300px",
                  }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}>
                      <CalendarMonth
                        sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }}
                      />
                      {exp.period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <LocationOn
                        sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }}
                      />
                      {exp.location}
                    </Typography>
                  </motion.div>
                </Box>

                {/* Main content card */}
                <Box sx={{ flex: 1, px: { xs: 0, md: 2 }, maxWidth: "500px" }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}>
                    <Card
                      sx={{
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
                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              mb: 1,
                            }}>
                            <Typography
                              variant="h5"
                              component="span"
                              sx={{ fontWeight: 600 }}>
                              {exp.title}
                            </Typography>
                            {exp.current && (
                              <Chip
                                label="Current"
                                size="small"
                                color="primary"
                                sx={{ ml: 1 }}
                              />
                            )}
                          </Box>

                          <Typography
                            variant="h6"
                            color="primary"
                            sx={{ mb: 1 }}>
                            {exp.company}
                          </Typography>

                          <Box
                            sx={{
                              display: { xs: "block", md: "none" },
                              mb: 2,
                            }}>
                            <Typography variant="body2" color="text.secondary">
                              <CalendarMonth
                                sx={{
                                  fontSize: 16,
                                  mr: 0.5,
                                  verticalAlign: "middle",
                                }}
                              />
                              {exp.period}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <LocationOn
                                sx={{
                                  fontSize: 16,
                                  mr: 0.5,
                                  verticalAlign: "middle",
                                }}
                              />
                              {exp.location}
                            </Typography>
                          </Box>
                        </Box>

                        <List dense sx={{ mb: 2 }}>
                          {exp.description.slice(0, 2).map((desc, i) => (
                            <ListItem key={i} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <Circle
                                  sx={{ fontSize: 8, color: "primary.main" }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={desc}
                                primaryTypographyProps={{
                                  variant: "body2",
                                  color: "text.secondary",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>

                        {exp.description.length > 2 && (
                          <Accordion
                            sx={{
                              backgroundColor: "transparent",
                              boxShadow: "none",
                              "&:before": { display: "none" },
                            }}>
                            <AccordionSummary
                              expandIcon={<ExpandMore />}
                              sx={{ px: 0, minHeight: "auto" }}>
                              <Typography variant="body2" color="primary">
                                View more details
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: 0 }}>
                              <List dense>
                                {exp.description.slice(2).map((desc, i) => (
                                  <ListItem key={i} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                      <Circle
                                        sx={{
                                          fontSize: 8,
                                          color: "primary.main",
                                        }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={desc}
                                      primaryTypographyProps={{
                                        variant: "body2",
                                        color: "text.secondary",
                                      }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </AccordionDetails>
                          </Accordion>
                        )}

                        {exp.projects && exp.projects.length > 0 && (
                          <Box sx={{ mt: 2 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ mb: 1, fontWeight: 600 }}>
                              Key Project:
                            </Typography>
                            {exp.projects.map((project, pIndex) => (
                              <Card
                                key={pIndex}
                                sx={{
                                  p: 2,
                                  mb: 2,
                                  backgroundColor:
                                    theme.palette.background.default,
                                  border: `1px solid ${theme.palette.divider}`,
                                }}>
                                <Typography
                                  variant="subtitle2"
                                  sx={{ fontWeight: 600, mb: 1 }}>
                                  {project.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ mb: 1 }}>
                                  {project.description}
                                </Typography>
                                <List dense>
                                  {project.achievements.map(
                                    (achievement, aIndex) => (
                                      <ListItem
                                        key={aIndex}
                                        sx={{ px: 0, py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                          <CheckCircleOutline
                                            sx={{
                                              fontSize: 16,
                                              color: "success.main",
                                            }}
                                          />
                                        </ListItemIcon>
                                        <ListItemText
                                          primary={achievement}
                                          primaryTypographyProps={{
                                            variant: "caption",
                                            color: "text.secondary",
                                          }}
                                        />
                                      </ListItem>
                                    )
                                  )}
                                </List>
                              </Card>
                            ))}
                          </Box>
                        )}

                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 0.5,
                            mt: 2,
                          }}>
                          {exp.technologies.map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor:
                                  theme.palette.background.default,
                                border: `1px solid ${theme.palette.divider}`,
                                fontSize: "0.75rem",
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
