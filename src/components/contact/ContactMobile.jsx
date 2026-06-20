import React from "react";
import { Box, Paper, Stack, TextField, Button, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import Reveal from "../common/Reveal";
import useContactForm from "./useContactForm";

const ContactMobile = () => {
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
        py: 8,
        px: 2,
      }}
    >
      <Reveal style={{ width: "100%", maxWidth: 460 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 18px 50px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* Emerald info header */}
          <Box
            sx={{
              p: 4,
              color: "#fff",
              background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              Let's connect
            </Typography>
            <Typography sx={{ opacity: 0.92, lineHeight: 1.7, mb: 3, fontSize: 14 }}>
              Have a question, a proposal, or simply want to say hello? Drop me a message.
            </Typography>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <MailOutlineIcon fontSize="small" />
              <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                gaparerufaro@gmail.com
              </Typography>
            </Stack>
          </Box>

          {/* Form */}
          <Box
            sx={{ p: 4, backgroundColor: (theme) => theme.palette.background.paper }}
          >
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

export default ContactMobile;
