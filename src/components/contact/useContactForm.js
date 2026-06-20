import { useState } from "react";

// 1. Sign up at https://web3forms.com with your Gmail (gaparerufaro@gmail.com)
// 2. Copy your Access Key and paste it below.
// Submissions will be emailed to the Gmail you signed up with.
const WEB3FORMS_ACCESS_KEY = "1428a667-df4e-4e7b-8399-b11bc66a5dc0";

/**
 * Shared contact-form state + submit logic for the desktop and mobile forms.
 * Sends the name, email, and message to your inbox via Web3Forms.
 */
export default function useContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return { formData, status, handleChange, handleSubmit };
}
