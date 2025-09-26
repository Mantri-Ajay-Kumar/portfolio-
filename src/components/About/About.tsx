import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { WorkHistory, Code, School, EmojiEvents } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData } from "../../data/portfolioData";

const About: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: <WorkHistory fontSize="large" />,
      value: `${aboutData.yearsOfExperience}+`,
      label: "Years Experience",
      color: theme.palette.primary.main,
    },
    {
      icon: <Code fontSize="large" />,
      value: `${aboutData.projectsCompleted}+`,
      label: "Projects Completed",
      color: theme.palette.secondary.main,
    },
    {
      icon: <School fontSize="large" />,
      value: `${aboutData.technologies}+`,
      label: "Technologies",
      color: theme.palette.success.main,
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      value: `${aboutData.certifications}+`,
      label: "Certifications",
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Box
      id="about"
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
            About Me
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}>
            Passionate developer dedicated to creating innovative solutions
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Box>
                {aboutData.description.map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    paragraph
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                      mb: 2,
                    }}>
                    {paragraph}
                  </Typography>
                ))}
              </Box>

              <Divider sx={{ my: 4 }} />

              <Box>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  What I Do
                </Typography>
                <Grid container spacing={2}>
                  {[
                    ".NET 8 & Cloud Development",
                    "Solution Architecture",
                    "AWS & Terraform IaC",
                    "Performance Engineering",
                    "API Design & Microservices",
                    "Team Leadership & Mentoring",
                  ].map((skill, index) => (
                    <Grid item xs={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.1 * index }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: theme.palette.background.paper,
                            border: `1px solid ${theme.palette.divider}`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-5px)",
                              boxShadow: theme.shadows[4],
                              borderColor: theme.palette.primary.main,
                            },
                          }}>
                          <Typography variant="body2" align="center">
                            {skill}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}>
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
                            transform: "translateY(-5px)",
                            boxShadow: theme.shadows[8],
                          },
                        }}>
                        <CardContent sx={{ textAlign: "center", py: 4 }}>
                          <Box
                            sx={{
                              display: "inline-flex",
                              p: 2,
                              borderRadius: "50%",
                              backgroundColor: `${stat.color}20`,
                              color: stat.color,
                              mb: 2,
                            }}>
                            {stat.icon}
                          </Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 700,
                              color: stat.color,
                              mb: 1,
                            }}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.label}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4 }}>
                <Card
                  sx={{
                    p: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                    border: `2px solid ${theme.palette.primary.main}40`,
                  }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Current Focus
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Currently focused on building scalable web applications
                    using modern JavaScript frameworks and cloud-native
                    technologies. Always eager to learn new technologies and
                    take on challenging projects.
                  </Typography>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
