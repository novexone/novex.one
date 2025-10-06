import React from "react";
import { 
  Box, 
  Typography, 
  useTheme, 
  Container,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Grid,
  IconButton,
  Link
} from "@mui/material";
import { 
  GitHub, 
  Email, 
  Language,
  Security 
} from "@mui/icons-material";

const MainContent = () => {
  const theme = useTheme();

  const techStack = [
    { name: 'Python', years: 4, progress: 100 },
    { name: 'JavaScript', years: 2, progress: 67 },
    { name: 'Rust', years: 0.5, progress: 17 },
    { name: 'C', years: 0.5, progress: 17 }
  ];

  const interests = ['System Design', 'System Programming', 'Open Source'];

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 4,
        gap: 4,
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: theme.palette.text.primary,
            fontFamily: '"Roboto Mono", "Roboto", monospace',
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "3.5rem" },
            mb: 2,
          }}
        >
          NOVEX ONE
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            letterSpacing: "0.02em",
            mb: 2,
          }}
        >
          Full Stack Developer | Open Source Contributor
        </Typography>

        {/* Social Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 3 }}>
          <IconButton
            component={Link}
            href="https://novex.one/"
            target="_blank"
            sx={{ color: theme.palette.text.primary }}
          >
            <Language />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:dev@novex.one"
            sx={{ color: theme.palette.text.primary }}
          >
            <Email />
          </IconButton>
          <IconButton
            component={Link}
            href="https://github.com/novexone"
            target="_blank"
            sx={{ color: theme.palette.text.primary }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component={Link}
            href="https://tryhackme.com/p/novexone"
            target="_blank"
            sx={{ color: theme.palette.text.primary }}
          >
            <Security />
          </IconButton>
        </Box>

        {/* Quote */}
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            color: theme.palette.text.secondary,
            maxWidth: "600px",
            mx: "auto",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          "Building elegant solutions with a focus on performance, security, and privacy - because your data should remain yours"
        </Typography>
      </Box>

      {/* About Section */}
      <Card sx={{ backgroundColor: theme.palette.background.paper, mb: 3 }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Roboto Mono", "Roboto", monospace',
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            const developer = {"{"}
          </Typography>
          <Box sx={{ pl: 2, fontFamily: '"Roboto Mono", "Roboto", monospace' }}>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              currentFocus: <span style={{ color: theme.palette.text.primary }}>'Full Stack Development'</span>,
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              interests: [
              {interests.map((interest, index) => (
                <span key={index} style={{ color: theme.palette.text.primary }}>
                  '{interest}'{index < interests.length - 1 ? ', ' : ''}
                </span>
              ))}
              ],
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mt: 1 }}>
              os: <span style={{ color: theme.palette.text.primary }}>'Arch Linux'</span>,
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              devEnv: {"{"}
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                editor: <span style={{ color: theme.palette.text.primary }}>'Neovim'</span>,
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                terminal: <span style={{ color: theme.palette.text.primary }}>'Alacritty'</span>,
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                multiplexer: <span style={{ color: theme.palette.text.primary }}>'tmux'</span>
              </Typography>
            </Box>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              {"},"}
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mt: 1 }}>
              goals2025: <span style={{ color: theme.palette.text.primary }}>'Contribute to major open source projects'</span>
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Roboto Mono", "Roboto", monospace',
              mt: 1,
              color: theme.palette.text.primary,
            }}
          >
            {"};"}
          </Typography>
        </CardContent>
      </Card>

      {/* Tech Experience */}
      <Card sx={{ backgroundColor: theme.palette.background.paper }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Roboto Mono", "Roboto", monospace',
              mb: 3,
              color: theme.palette.text.primary,
            }}
          >
            Tech Experience
          </Typography>
          <Grid container spacing={2}>
            {techStack.map((tech, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Roboto Mono", "Roboto", monospace',
                        color: theme.palette.text.primary,
                      }}
                    >
                      {tech.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Roboto Mono", "Roboto", monospace',
                        color: theme.palette.text.secondary,
                        fontSize: "0.9rem",
                      }}
                    >
                      {tech.years} year{tech.years !== 1 ? 's' : ''}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={tech.progress}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: theme.palette.divider,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: theme.palette.text.primary,
                      },
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* GitHub Stats Placeholder */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            fontFamily: '"Roboto Mono", "Roboto", monospace',
          }}
        >
          Let's build something amazing together.
        </Typography>
      </Box>
    </Container>
  );
};

export default MainContent;
