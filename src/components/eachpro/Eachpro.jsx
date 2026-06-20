import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Card, CardContent, Chip, Stack } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Eachpro(props) {
  const { heading, body, link, tech = [] } = props;

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: 3,
        borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 36px rgba(16, 185, 129, 0.18)",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700, mb: 1.5 }}>
          {heading}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 2.5 }}
        >
          {body}
        </Typography>

        {tech.length > 0 && (
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{ mb: 3 }}
          >
            {tech.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                variant="outlined"
                sx={{
                  fontWeight: 500,
                  color: "primary.main",
                  borderColor: "primary.main",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "rgba(16, 185, 129, 0.08)"
                      : "rgba(52, 211, 153, 0.12)",
                }}
              />
            ))}
          </Stack>
        )}

        <Box>
          <Button
            href={link}
            target="_blank"
            rel="noopener"
            variant="outlined"
            color="primary"
            endIcon={<LaunchIcon />}
          >
            View project
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
