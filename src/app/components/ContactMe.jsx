"use client";

import React, { useState, useEffect } from "react";

export default function ContactMe() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName") || "");
    setLastName(localStorage.getItem("lastName") || "");
    setEmail(localStorage.getItem("email") || "");
    setPhoneNumber(localStorage.getItem("phoneNumber") || "");
    setTopic(localStorage.getItem("topic") || "");
    setMessage(localStorage.getItem("message") || "");
    setTermsAccepted(localStorage.getItem("termsAccepted") === "true");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("topic", topic);
    localStorage.setItem("message", message);
    localStorage.setItem("termsAccepted", termsAccepted);

    alert("Your information has been saved!");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setTopic("Select One...");
    setMessage("");
    setTermsAccepted(false);
  };

  const handleEditLastMessage = () => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedEmail = localStorage.getItem("email");
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const storedTopic = localStorage.getItem("topic");
    const storedMessage = localStorage.getItem("message");
    const storedTermsAccepted =
      localStorage.getItem("termsAccepted") === "true";

    if (storedFirstName) setFirstName(storedFirstName);
    if (storedLastName) setLastName(storedLastName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPhoneNumber) setPhoneNumber(storedPhoneNumber);
    if (storedTopic) setTopic(storedTopic);
    if (storedMessage) setMessage(storedMessage);
    setTermsAccepted(storedTermsAccepted);
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Please provide your information, and I will get back to you as soon as
          I see your message.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option>Select One...</option>
            <option>Arins Favorite movie</option>
            <option>Arins Linkedin</option>
            <option>Arins Dota Rank</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <span className="text-sm">I accept the terms</span>
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary contact--form--btn"
            onClick={handleEditLastMessage}
          >
            Edit Previous Submit
          </button>
        </div>
      </form>
    </section>
  );
}
