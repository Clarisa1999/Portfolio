import { Box, Link, Stack, useMediaQuery, useTheme } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

//export default function Contact() {

import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const ContactMobile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to your server)

    // For demonstration purposes, let's log the form data
    console.log("Form Data:", formData);
  };

  return (
    <Box
      component="div"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Center horizontally
        background: (theme) => theme.palette.background.paper,
      }}
    >
      <Stack sx={{ maxWidth: "70%" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: "10%" }}>
          Send me a message!
        </Typography>
        <Typography>
          Have a question, proposal, or simply want to send a greeting? Feel free to reach
          out!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Let's Chat
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "150px",
              paddingTop: "10%",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/rufaroclarisagapare/"
              target="_blank"
              underline="hover"
            >
              <LinkedIn
                sx={{
                  color: (theme) => (theme.palette.mode === "light" ? "blue" : "white"),
                  display: "inline",
                  fontSize: 40,
                }}
              ></LinkedIn>
            </Link>

            <Link href="https://github.com/Clarisa1999" target="_blank" underline="hover">
              <Instagram
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#d62976" : "white",
                  display: "inline",
                  fontSize: 40,
                }}
              ></Instagram>
            </Link>

            <Link href="https://youtu.be/awDLuwGDcoI" target="_blank" underline="hover">
              <GitHub
                sx={{
                  color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
                  display: "inline",
                  fontSize: 40,
                }}
              ></GitHub>
            </Link>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};

export default ContactMobile;
