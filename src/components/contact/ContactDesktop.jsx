import React from "react";
import { Box, Paper, Stack, TextField, Button, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import Reveal from "../common/Reveal";
import useContactForm from "./useContactForm";

const ContactDesktop = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <Box
      component="div"
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: (theme) => theme.palette.background.default,
        py: 10,
        px: 2,
      }}
    >
      <Reveal style={{ width: "100%", maxWidth: 960 }}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* Left — emerald info panel */}
          <Box
            sx={{
              flex: 1,
              p: 6,
              color: "#fff",
              background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Let's connect
            </Typography>
            <Typography sx={{ opacity: 0.92, lineHeight: 1.8, mb: 5 }}>
              Have a question, a proposal, or simply want to say hello? Drop me a message
              and I'll get back to you soon.
            </Typography>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <MailOutlineIcon />
              <Typography sx={{ fontWeight: 500 }}>gaparerufaro@gmail.com</Typography>
            </Stack>
          </Box>

          {/* Right — form panel */}
          <Box
            sx={{
              flex: 1.15,
              p: 6,
              backgroundColor: (theme) => theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Send me a message
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={status === "sending"}
                endIcon={status === "sending" ? null : <SendIcon />}
                sx={{ mt: 2 }}
              >
                {status === "sending" ? "Sending..." : "Let's Chat"}
              </Button>

              {status === "success" && (
                <Typography sx={{ mt: 2, textAlign: "center", color: "primary.main" }}>
                  Thanks! Your message has been sent — I'll be in touch soon. 🎉
                </Typography>
              )}
              {status === "error" && (
                <Typography sx={{ mt: 2, textAlign: "center", color: "error.main" }}>
                  Something went wrong. Please try again, or email me directly at
                  gaparerufaro@gmail.com.
                </Typography>
              )}
            </form>
          </Box>
        </Paper>
      </Reveal>
    </Box>
  );
};

export default ContactDesktop;
