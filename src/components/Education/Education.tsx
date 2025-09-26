import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  School,
  CalendarMonth,
  LocationOn,
  EmojiEvents,
  CardMembership,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../../data/portfolioData";

const Education: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id="education"
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
            Education & Certifications
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}>
            My academic background and professional certifications
          </Typography>
        </motion.div>

        {/* Education Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}>
              <School fontSize="large" color="primary" />
              Education
            </Typography>
          </Grid>

          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={edu.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}>
                <Card
                  sx={{
                    height: "100%",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)"
                        : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                    border: `2px solid ${theme.palette.divider}`,
                    borderLeft: `5px solid ${theme.palette.primary.main}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: theme.shadows[8],
                      transform: "translateY(-5px)",
                    },
                  }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: theme.palette.primary.main,
                      }}>
                      {edu.degree}
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {edu.institution}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        mb: 2,
                      }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CalendarMonth fontSize="small" />
                        {edu.period}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <LocationOn fontSize="small" />
                        {edu.location}
                      </Typography>
                    </Box>

                    {edu.grade && (
                      <Chip
                        icon={<EmojiEvents />}
                        label={edu.grade}
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Certifications Section */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}>
              <CardMembership fontSize="large" color="primary" />
              Certifications
            </Typography>
          </Grid>

          {/* {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    height: "100%",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: "all 0.3s ease",
                    cursor: cert.link ? "pointer" : "default",
                    "&:hover": {
                      boxShadow: theme.shadows[8],
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-5px)",
                    },
                  }}
                  onClick={() => {
                    if (cert.link) {
                      window.open(cert.link, "_blank");
                    }
                  }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                      }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <CardMembership sx={{ color: "white", fontSize: 30 }} />
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: 600, mb: 1 }}>
                      {cert.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      align="center"
                      color="primary"
                      sx={{ mb: 1 }}>
                      {cert.issuer}
                    </Typography>

                    <Typography
                      variant="caption"
                      align="center"
                      color="text.secondary"
                      display="block"
                      sx={{ mb: 1 }}>
                      {cert.date}
                    </Typography>

                    {cert.credentialId && (
                      <Typography
                        variant="caption"
                        align="center"
                        display="block"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontStyle: "italic",
                        }}>
                        ID: {cert.credentialId}
                      </Typography>
                    )}

                    {cert.link && (
                      <Typography
                        variant="caption"
                        align="center"
                        display="block"
                        color="primary"
                        sx={{
                          mt: 1,
                          textDecoration: "underline",
                          "&:hover": {
                            color: theme.palette.primary.dark,
                          },
                        }}>
                        View Certificate →
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))} */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
