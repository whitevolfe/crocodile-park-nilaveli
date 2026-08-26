import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, RotateCcw, Send } from "lucide-react";

import tourismChatFlow from "@/data/tourismChatFlow";
import "./TourismChatbot.css";

type Message = {
  role: "bot" | "user";
  content: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  travelers: string;
  message: string;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const TourismChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("start");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: tourismChatFlow.start.message,
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    travelers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const messagesRef = useRef<HTMLDivElement | null>(null);

  /*
   * Replace this with the real WhatsApp number.
   *
   * Example:
   * const WHATSAPP_NUMBER = "94771234567";
   */
  const WHATSAPP_NUMBER = "947XXXXXXXX";

  /*
   * Web3Forms key
   *
   * Add this to .env:
   *
   * VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   */
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

  const currentStep = tourismChatFlow[step];

  /*
   * Auto-scroll to newest message
   */
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  /*
   * Open chatbot
   */
  const openChat = () => {
    setIsOpen(true);
  };

  /*
   * Close chatbot
   */
  const closeChat = () => {
    setIsOpen(false);
  };

  /*
   * Reset chatbot
   */
  const resetChat = () => {
    setStep("start");

    setMessages([
      {
        role: "bot",
        content: tourismChatFlow.start.message,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      travelers: "",
      message: "",
    });

    setSubmitStatus(null);
    setIsSubmitting(false);
  };

  /*
   * Send chatbot interaction to Web3Forms
   */
  const sendInteraction = async (selectedOption: string) => {
    if (!WEB3FORMS_ACCESS_KEY) {
      console.warn("VITE_WEB3FORMS_ACCESS_KEY is not configured.");
      return;
    }

    try {
      const form = new FormData();

      form.append("access_key", WEB3FORMS_ACCESS_KEY);

      form.append("subject", "Chatbot Interaction - Nilaveli Wild Dreams");

      form.append("message", `A visitor selected: ${selectedOption}`);

      await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: form,
      });
    } catch (error) {
      console.error("Failed to send chatbot interaction:", error);
    }
  };

  /*
   * Handle chatbot option click
   */
  const handleOptionClick = async (
    label: string,
    next?: string,
    action?: "whatsapp" | "booking" | "inquiry",
  ) => {
    /*
     * Add user's selection to chat
     */
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: label,
      },
    ]);

    /*
     * Send selection to Web3Forms
     * Don't block the chatbot UI while sending.
     */
    void sendInteraction(label);

    /*
     * WhatsApp action
     */
    if (action === "whatsapp") {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sure! 👋 You can contact Nilaveli Wild Dreams directly on WhatsApp.",
        },
      ]);

      const whatsappMessage = encodeURIComponent(
        "Hello Nilaveli Wild Dreams! I would like to know more about your wildlife experiences.",
      );

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
        "_blank",
        "noopener,noreferrer",
      );

      return;
    }

    /*
     * Booking action
     */
    if (action === "booking") {
      setStep("booking");

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Great! 📅 Please provide your details and we'll get back to you to confirm your booking.",
        },
      ]);

      return;
    }

    /*
     * Inquiry action
     *
     * Currently use the booking form for inquiries too.
     */
    if (action === "inquiry") {
      setStep("booking");

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sure! 📩 Please provide your details and we'll contact you shortly.",
        },
      ]);

      return;
    }

    /*
     * Normal chatbot navigation
     */
    if (next) {
      const nextStep = tourismChatFlow[next];

      /*
       * Safety check in case the flow contains
       * an invalid next step.
       */
      if (!nextStep) {
        console.error(`Chatbot step "${next}" does not exist in tourismChatFlow.`);

        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: "Sorry, something went wrong. Please try again.",
          },
        ]);

        return;
      }

      /*
       * Update current step
       */
      setStep(next);

      /*
       * IMPORTANT FIX:
       *
       * Display the message belonging to the
       * selected next step.
       */
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: nextStep.message,
        },
      ]);
    }
  };

  /*
   * Form input handler
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * Submit booking / inquiry
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitStatus("error");

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Web3Forms is not configured. Please contact us through WhatsApp.",
        },
      ]);

      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const form = new FormData();

      form.append("access_key", WEB3FORMS_ACCESS_KEY);

      form.append("subject", "New Chatbot Booking Inquiry - Nilaveli Wild Dreams");

      form.append("from_name", formData.name);

      form.append("name", formData.name);

      form.append("email", formData.email);

      form.append("phone", formData.phone);

      form.append("preferred_date", formData.preferredDate);

      form.append("travelers", formData.travelers);

      form.append("message", formData.message);

      form.append("chatbot", "Nilaveli Wild Dreams Website Chatbot");

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Web3Forms submission failed");
      }

      setSubmitStatus("success");

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Thank you! ✅ Your request has been sent successfully. Our team will contact you soon.",
        },
      ]);

      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        travelers: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSubmitStatus("error");

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry ❌ We couldn't send your request. Please contact us through WhatsApp.",
        },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tourism-chatbot">
      {/* =========================
          FLOATING CHAT BUTTON
      ========================== */}
      {!isOpen && (
        <button
          type="button"
          className="chat-button"
          onClick={openChat}
          aria-label="Open Nilaveli Wild Dreams chatbot"
        >
          <MessageCircle size={22} />

          <span>Chat with us</span>
        </button>
      )}

      {/* =========================
          CHAT WINDOW
      ========================== */}
      {isOpen && (
        <div className="chat-window">
          {/* HEADER */}
          <div className="chat-header">
            <div className="chat-brand">
              <div className="chat-avatar">🐊</div>

              <div>
                <h3>Nilaveli Wild Dreams</h3>

                <p>Wildlife Experience Assistant</p>
              </div>
            </div>

            <div className="chat-header-actions">
              <button
                type="button"
                className="chat-icon-button"
                onClick={resetChat}
                aria-label="Reset chatbot"
                title="Reset chat"
              >
                <RotateCcw size={17} />
              </button>

              <button
                type="button"
                className="chat-icon-button"
                onClick={closeChat}
                aria-label="Close chatbot"
                title="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="chat-messages" ref={messagesRef}>
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`chat-message ${message.role}`}>
                <div className="message-bubble">{message.content}</div>
              </div>
            ))}

            {/* BOOKING FORM */}
            {step === "booking" && (
              <form className="chat-form" onSubmit={handleSubmit}>
                <h4>Make a Booking Request</h4>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp / Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="text"
                  name="travelers"
                  placeholder="Number of travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Anything else you'd like us to know?"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                />

                <button type="submit" className="chat-submit-button" disabled={isSubmitting}>
                  <Send size={16} />

                  {isSubmitting ? "Sending..." : "Send Booking Request"}
                </button>

                {submitStatus === "error" && (
                  <p className="form-error">Please check your details and try again.</p>
                )}

                {submitStatus === "success" && (
                  <p className="form-success">Request sent successfully.</p>
                )}
              </form>
            )}
          </div>

          {/* CHAT OPTIONS */}
          {step !== "booking" && (currentStep?.options?.length ?? 0) > 0 && (
            <div className="chat-options">
              {currentStep.options.map((option, index) => (
                <button
                  type="button"
                  key={`${option.label}-${index}`}
                  className="chat-option"
                  onClick={() => handleOptionClick(option.label, option.next, option.action)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {/* FOOTER */}
          <div className="chat-footer">
            <span>Nilaveli Wild Dreams</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourismChatbot;
