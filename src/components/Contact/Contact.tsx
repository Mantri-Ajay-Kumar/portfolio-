import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
  Twitter,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../../data/portfolioData";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const contactInfo = [
    {
      icon: <Email />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: theme.palette.primary.main,
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: theme.palette.secondary.main,
    },
    {
      icon: <LocationOn />,
      title: "Location",
      value: personalInfo.location,
      link: "#",
      color: theme.palette.success.main,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: personalInfo.linkedin,
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: <GitHub />,
      url: personalInfo.github,
      label: "GitHub",
      color: theme.palette.mode === "dark" ? "#fff" : "#333",
    },
    {
      icon: <Twitter />,
      url: "https://twitter.com",
      label: "Twitter",
      color: "#1DA1F2",
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSnackbarMessage(
        "Message sent successfully! I will get back to you soon."
      );
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSnackbarMessage("Failed to send message. Please try again later.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
        position: "relative",
      }}>
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: `linear-gradient(180deg, transparent 0%, ${theme.palette.primary.main}10 100%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" ref={ref} sx={{ position: "relative" }}>
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
            Get In Touch
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}>
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Let's Connect
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                I'm always interested in hearing about new opportunities and
                exciting projects. Don't hesitate to reach out!
              </Typography>

              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}>
                  <Card
                    sx={{
                      mb: 2,
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)"
                          : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                      border: `1px solid ${theme.palette.divider}`,
                      transition: "all 0.3s ease",
                      cursor: info.link !== "#" ? "pointer" : "default",
                      "&:hover": {
                        boxShadow: theme.shadows[8],
                        borderColor: info.color,
                      },
                    }}
                    onClick={() => {
                      if (info.link !== "#") {
                        window.open(info.link, "_blank");
                      }
                    }}>
                    <CardContent
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          backgroundColor: `${info.color}20`,
                          color: info.color,
                        }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {info.title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Social Links */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Follow Me
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}>
                      <IconButton
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: link.color,
                          backgroundColor: `${link.color}20`,
                          "&:hover": {
                            backgroundColor: `${link.color}30`,
                            transform: "translateY(-3px)",
                          },
                          transition: "all 0.3s ease",
                        }}>
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)"
                      : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Send Me a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        variant="outlined"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                          },
                          transition: "all 0.3s ease",
                        }}>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
