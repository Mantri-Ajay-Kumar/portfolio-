import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Twitter,
  Favorite,
} from '@mui/icons-material';
import { personalInfo } from '../../data/portfolioData';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub />, url: personalInfo.github, label: 'GitHub' },
    { icon: <LinkedIn />, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Email />, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((link) => (
              <IconButton
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>

          <Divider sx={{ width: '100px', my: 1 }} />

          {/* Copyright */}
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            © {currentYear} {personalInfo.name}. Made with
            <Favorite
              sx={{
                fontSize: 16,
                color: theme.palette.error.main,
                animation: 'pulse 1.5s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.2)',
                  },
                  '100%': {
                    transform: 'scale(1)',
                  },
                },
              }}
            />
            using React & Material-UI
          </Typography>

          <Typography variant="caption" color="text.secondary" align="center">
            All rights reserved. Feel free to connect!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
